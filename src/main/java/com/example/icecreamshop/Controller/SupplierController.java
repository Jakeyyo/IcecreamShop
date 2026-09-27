package com.example.icecreamshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.icecreamshop.DTO.CreateSupplierRequest;
import com.example.icecreamshop.DTO.PutSupplierRequest;
import com.example.icecreamshop.Model.Supplier;
import com.example.icecreamshop.Service.SupplierService;

import jakarta.validation.Valid;




@RestController 
@RequestMapping("/suppliers")
public class SupplierController {

    @Autowired 
    private SupplierService supplierService;

    @GetMapping
    public List<Supplier> getAllSuppliers (@RequestParam (required = false) String name, @RequestParam (required = false) String sortBy,
    @RequestParam (required = false) String desc, @RequestParam (required = false) String active) {
        return supplierService.getAllSuppliers(name, sortBy, desc, active);
    }
    

    @GetMapping("/{id}")
    public Supplier getSupplier(@PathVariable int id) {
        return supplierService.getSupplierById(id);
    }

    @PostMapping
    public String postSupplier(@Valid @RequestBody CreateSupplierRequest request) {
        return supplierService.postSupplier(request);
    }
    

    @PutMapping("/{id}")
    public String putSupplier(@PathVariable int id, @Valid @RequestBody PutSupplierRequest request) {
        return supplierService.putSupplier(id, request);
    }
    
}
