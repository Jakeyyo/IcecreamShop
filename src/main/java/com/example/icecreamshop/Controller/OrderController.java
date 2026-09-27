package com.example.icecreamshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.icecreamshop.DTO.CreateOrderRequest;
import com.example.icecreamshop.Model.Order;
import com.example.icecreamshop.Service.OrderService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController 
@RequestMapping("/orders")
public class OrderController {

 @Autowired 
 private OrderService orderService;

 @GetMapping
 public List<Order> getAllOrders(@RequestParam (required = false) String name) {
     return orderService.getAllOrders(name);
 }
 

@PostMapping
 public String postOrder ( @Valid @RequestBody CreateOrderRequest request) {
    return orderService.postOrder(request);
 }


}
