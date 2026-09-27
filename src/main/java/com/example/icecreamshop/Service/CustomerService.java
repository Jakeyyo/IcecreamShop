package com.example.icecreamshop.Service;

import java.lang.StackWalker.Option;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.apache.catalina.util.CustomObjectInputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.icecreamshop.DTO.CreateCustomerRequest;
import com.example.icecreamshop.DTO.PutCustomerRequest;
import com.example.icecreamshop.Exception.CustomerNotFoundException;
import com.example.icecreamshop.Exception.SortNotFoundException;
import com.example.icecreamshop.Model.Customer;
import com.example.icecreamshop.Model.Flavour;
import com.example.icecreamshop.Model.Order;
import com.example.icecreamshop.Repository.CustomerRepository;
import com.example.icecreamshop.Repository.orderRepository;

@Service 
public class CustomerService {

    @Autowired 
    private CustomerRepository customerRepository;

    @Autowired 
    private orderRepository orderRepository;


    public List<Customer> getAllCustomers (String name, String sortBy, String desc, String active) {

        List<Customer> result = new ArrayList<>();


        for (Customer c : customerRepository.findAll()) {

            if (active != null && active.equals("true")) {

                if (!c.isActive())  {
                if (name == null || name.isBlank() || c.getName().toLowerCase().contains(name.toLowerCase())) {
                    result.add(c);
                }      
            }
        }
 
        else {

            if (c.isActive()) {

                if (name == null || name.isBlank() || c.getName().toLowerCase().contains(name.toLowerCase())) {
                    result.add(c);
                }
            }
        }
        }


         if (sortBy != null && !sortBy.isBlank() && !sortBy.equals("null")) {

            if (sortBy.equals("name")) {
                result.sort((a, b) -> a.getName().compareTo(b.getName()));
            }

            else {
                throw new SortNotFoundException("Sort condition " + sortBy + " not found");
            }
        }

        if (desc != null && desc.equals("desc")) {
            Collections.reverse(result);
        }

        return result;
    }

    public Customer getCustomerById (int id) {
        Optional<Customer> c = customerRepository.findById(id);

        if (c.isPresent()) {
            return c.get();
        }

        throw new CustomerNotFoundException("Customer could not be found");
    }

    public Integer getOrdersSumByCustomerId (int id) {

      int result = 0;

      for (Order o : orderRepository.findAllByCustomerId(id)) {
        result += o.getSum();
      }

      return result;
    }

    public List<Customer> getMostFrequentCustomers(String name) {

        List<Customer> result = new ArrayList<>();

        for (Customer c : customerRepository.findAll()) {

            if (name == null || name.isBlank() || c.getName().toLowerCase().contains(name.toLowerCase())) {
                    result.add(c);
                }    
        }

        result.sort((a, b) -> Integer.compare(
        getOrdersSumByCustomerId(b.getId()), getOrdersSumByCustomerId(a.getId())));

        return result;
    }

public String postCustomer(CreateCustomerRequest request) {
        
        Customer customer = new Customer(
    0,
    request.getName(),
    request.getPhoneNumber(),
    request.getEmail(),
    true
);

Customer savedCustomer = customerRepository.save(customer);

return "Customer " + savedCustomer.getName()
        + " created with ID " + savedCustomer.getId();
        
    }

public String putCustomer (int id, PutCustomerRequest request) {

    Customer c = getCustomerById(id);

    c.setName(request.getName());
    c.setPhoneNumber(request.getPhoneNumber());
    c.setEmail(request.getEmail());
    c.setActive(request.isActive());

    customerRepository.save(c);

    return "Customer updated ID: " + c.getId();

}
}
