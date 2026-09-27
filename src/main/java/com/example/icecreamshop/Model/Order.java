package com.example.icecreamshop.Model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@Entity 
@Table (name = "orders")
public class Order {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    @Column (name = "order_time")
    private LocalDateTime orderTime;

    @Column (name = "order_sum")
    private int sum;

    @Column (name = "order_cost")
    private double cost;

    @ManyToOne 
    @JoinColumn (name = "customer_id")
    private Customer customer;
}
