package com.example.icecreamshop.DTO;

import java.time.LocalDateTime;

import com.example.icecreamshop.Model.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class CreateOrderRequest {

    private LocalDateTime orderTime;
    private int sum;
    private double cost;
    private int customerId;

}