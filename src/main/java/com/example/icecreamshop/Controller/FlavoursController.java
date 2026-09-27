package com.example.icecreamshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.icecreamshop.DTO.CreateFlavourRequest;
import com.example.icecreamshop.DTO.PutFlavourRequest;
import com.example.icecreamshop.Model.Flavour;
import com.example.icecreamshop.Service.FlavourService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/flavours")
public class FlavoursController {

    @Autowired
    private FlavourService flavourService;

    @GetMapping
    public List<Flavour> getAllFlavours(@RequestParam(required = false) String name,
            @RequestParam(required = false) String sortBy,
            @RequestParam(required = false) String desc, @RequestParam(required = false) String active) {
        return flavourService.getAllFlavours(name, sortBy, desc, active);
    }

    @GetMapping("/count/{id}")
    public Integer getTotalFlavourCountById(@PathVariable int id) {
        return flavourService.getTotalFlavourCountById(id);
    }
    

    @GetMapping("/mostPopularFlavours")
    public List<Flavour> getMostPopularFlavours() {
        return flavourService.getMostPopularFlavours();
    }
    

    @PostMapping(consumes = "multipart/form-data")
    public String postFlavour(@Valid @RequestPart CreateFlavourRequest request,
            @RequestPart MultipartFile image) {
        return flavourService.postFlavour(request, image);
    }

    @PutMapping(value = "/{id}", consumes = "multipart/form-data")
    public String putFlavour(@PathVariable int id, @Valid @RequestPart("request") PutFlavourRequest request,
            @RequestPart(value = "image", required = false) MultipartFile image) {

        return flavourService.putFlavour(id, request, image);
    }

}
