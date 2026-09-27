package com.example.icecreamshop.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class PutFlavourRequest {

    @NotBlank (message = "Name cannot be empty")
    private String name;

    private double stockLevel;

    private int supplierId;

    private boolean active;

    private double purchasePrice;

    private double sellingPrice;


}
