package com.example.icecreamshop.Model;

import org.hibernate.annotations.Collate;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.icecreamshop.Repository.orderRepository;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@Entity 
@Table (name = "customers")
public class Customer {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank 
    @Column(name = "customer_name")
    private String name;
    
    @Column (name = "phone_number")
    private String phoneNumber;
    
    private String email;

   @Column(nullable = false)
   private boolean active = true;


    
}
