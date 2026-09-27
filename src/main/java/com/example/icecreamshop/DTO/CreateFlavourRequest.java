package com.example.icecreamshop.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class CreateFlavourRequest {

    @NotBlank (message = "Flavour name cannot be empty")
    private String name;

    private double stockLevel;

    private int supplierId;

    private double purchasePrice;

    private double sellingPrice;

}
