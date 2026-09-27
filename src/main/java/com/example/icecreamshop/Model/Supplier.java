package com.example.icecreamshop.Model;

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
@Table (name = "suppliers")
public class Supplier {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank 
    @Column(name = "supplier_name")
    private String name;

    @Column (name = "phone_number")
    private String phoneNumber;
    
    private String email;

    @Column (nullable = false)
    private boolean active = true;
}
