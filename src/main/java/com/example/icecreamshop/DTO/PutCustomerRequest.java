package com.example.icecreamshop.DTO;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class PutCustomerRequest {

    @NotBlank (message = "Name cannot be blank")
    private String name;

    private String phoneNumber;

    private String email;

    private boolean active;

}
