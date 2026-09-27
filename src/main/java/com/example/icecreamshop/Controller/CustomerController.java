package com.example.icecreamshop.Controller;

import com.example.icecreamshop.Service.OrderService;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.icecreamshop.DTO.CreateCustomerRequest;
import com.example.icecreamshop.DTO.PutCustomerRequest;
import com.example.icecreamshop.Model.Customer;
import com.example.icecreamshop.Service.CustomerService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController 
@RequestMapping("/customers")
public class CustomerController {

    
    
    @Autowired 
    private CustomerService customerService;

    @GetMapping
    public List<Customer> getAllCustomers(@RequestParam (required = false) String name, @RequestParam (required = false) String sortBy,
    @RequestParam (required = false) String desc, @RequestParam (required =  false) String active) {
        return customerService.getAllCustomers(name, sortBy, desc, active);
    }
    
    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable int id) {
        return customerService.getCustomerById(id);
    }

    @GetMapping("/orderSum/{id}")
    public Integer getOrdersSumByCustomerId(@PathVariable int id) {
        return customerService.getOrdersSumByCustomerId(id);
    }
    

    @GetMapping("/mostFrequentCustomers")
    public List<Customer> getMostFrequentCustomers(@RequestParam (required = false) String name) {
        return customerService.getMostFrequentCustomers(name);
    }
    
    
    @PostMapping
    public String postCustomer(@Valid @RequestBody CreateCustomerRequest request) {
        return customerService.postCustomer(request);
    
    }

    @PutMapping("/{id}")
    public String putCustomer(@PathVariable int id, @RequestBody PutCustomerRequest request) {
        return customerService.putCustomer(id, request);
    }
}
