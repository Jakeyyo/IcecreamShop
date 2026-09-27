package com.example.icecreamshop.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.icecreamshop.DTO.CreateOrderRequest;
import com.example.icecreamshop.Model.Order;
import com.example.icecreamshop.Repository.orderRepository;

@Service 
public class OrderService {

    @Autowired 
    private orderRepository orderRepository;

    @Autowired 
    CustomerService customerService;

    public List<Order> getAllOrders (String name) {
      List<Order> result = new ArrayList<>();

          if (name != null && !name.isBlank()) {

            for (Order o : orderRepository.findAll()) {

              if (o.getCustomer().getName().toLowerCase().contains(name.toLowerCase())) {
                result.add(o);
              }
            }
     
            return result;
          }
      
      return orderRepository.findAll();
    }

    public String postOrder (CreateOrderRequest request) {

      Order o = orderRepository.save((new Order(0, request.getOrderTime(), request.getSum(), request.getCost(), customerService.getCustomerById(request.getCustomerId()))));

        return "Created new order ID: " + o.getId();
    }

}
