package com.example.icecreamshop.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.icecreamshop.DTO.CreateIcecreamRequest;
import com.example.icecreamshop.Model.Icecream;
import com.example.icecreamshop.Repository.icecreamRepository;
import com.example.icecreamshop.Service.IcecreamService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController 
@RequestMapping("/icecreams")
public class IcecreamController {

    @Autowired 
    private IcecreamService icecreamService;

    
    @GetMapping("/order/{id}")
    public List<Icecream> getIcecreamsByOrderId(@PathVariable int id) {
        return icecreamService.getIcecreamsByOrderId(id);
    }
    


    @PostMapping
    public String postIcecream( @Valid @RequestBody CreateIcecreamRequest request) {
        return icecreamService.postIcecream(request);
    }
    


}
