package com.example.icecreamshop.DTO;

import java.util.List;

import com.example.icecreamshop.Model.Flavour;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
public class CreateIcecreamRequest {

    private int price;
    private int orderId;
    private List<Integer> flavourIds;

}
