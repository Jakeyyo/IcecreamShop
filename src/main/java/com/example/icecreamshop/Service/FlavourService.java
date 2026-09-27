package com.example.icecreamshop.Service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.icecreamshop.DTO.CreateFlavourRequest;
import com.example.icecreamshop.DTO.PutFlavourRequest;
import com.example.icecreamshop.Exception.FlavourNotFoundException;
import com.example.icecreamshop.Exception.SortNotFoundException;
import com.example.icecreamshop.Model.Flavour;
import com.example.icecreamshop.Model.Icecream;
import com.example.icecreamshop.Model.Supplier;
import com.example.icecreamshop.Repository.FlavourRepository;

@Service 
public class FlavourService {

    @Autowired 
    private FlavourRepository flavourRepository;

    @Autowired 
    private SupplierService supplierService;

    @Autowired 
    private IcecreamService icecreamService;

    public List<Flavour> getAllFlavours (String name, String sortBy, String desc, String active) {
        
        List<Flavour> result = new ArrayList<>();

        for (Flavour f : flavourRepository.findAll()) {

            if (active != null && active.equals("true")) {

                if (!f.isActive())  {
                if (name == null || name.isBlank() || f.getName().toLowerCase().contains(name.toLowerCase())) {
                    result.add(f);
                }      
            }
        }
 
        else {

            if (f.isActive()) {

                if (name == null || name.isBlank() || f.getName().toLowerCase().contains(name.toLowerCase())) {
                    result.add(f);
                }

            }
        }
   
        }

        if (sortBy != null && !sortBy.isBlank() && !sortBy.equals("null")) {
        
        if (sortBy.equals("name")) {
            result.sort((a, b) -> a.getName().compareTo(b.getName()));
        }

        else if (sortBy.equals("stockLevel")) {
            result.sort((a, b) -> Double.compare(a.getStockLevel(), b.getStockLevel()));
        }

        else {
            throw new SortNotFoundException("Sort condition " + sortBy + " not found");
        }
    }

        if (desc != null && desc.equals("desc")) {
            Collections.reverse(result);
        }

        return result;
    }

    public Flavour getFlavourById (int id) {
          Optional<Flavour> f = flavourRepository.findById(id);

          if (f.isPresent()) {
            return f.get();
          }

          else {
            throw new FlavourNotFoundException("Flavour could not be found");
          }
    }

    public Integer getTotalFlavourCountById(int id) {

        int count = 0;

        for (Icecream i : icecreamService.getAllIcecreams()) {

            for (Flavour f : i.getFlavours()) {

                if (f.getId() == id) {
                    count++;
                }
            }
        }
        return count;
    }

    public List<Flavour> getMostPopularFlavours() {
        
        List<Flavour> result = flavourRepository.findAll();

        result.sort((a, b) -> Integer.compare(getTotalFlavourCountById(b.getId()), getTotalFlavourCountById(a.getId())));

        return result;

    }


    public String postFlavour (CreateFlavourRequest request, MultipartFile image) {

        com.example.icecreamshop.Model.Supplier s = supplierService.getSupplierById(request.getSupplierId());

        java.nio.file.Path imageFolder = Paths.get("target/classes/static/images");


        try {

        Files.createDirectories(imageFolder);

        String fileName = image.getOriginalFilename();

        java.nio.file.Path filePath = imageFolder.resolve(fileName);

        Files.write(filePath, image.getBytes());

        String imagePath = "/images/" + fileName;

        flavourRepository.save(new Flavour(0, request.getName(), request.getStockLevel(), s, imagePath, true, request.getPurchasePrice(), request.getSellingPrice(), new ArrayList<>()));

        return "Flavour " + request.getName() + " added";
            
        } 
        catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Image could not be created", e);
        }
    }

    public String putFlavour (int id, PutFlavourRequest request, MultipartFile image) {

        Supplier s  = supplierService.getSupplierById(request.getSupplierId());
        Flavour f = getFlavourById(id);

        Path imageFolder = Paths.get("target/classes/static/images");

        try {

            if (image != null && !image.isEmpty()) {
            Files.createDirectories(imageFolder);

            String fileName = image.getOriginalFilename();

            Path filePath = imageFolder.resolve(fileName);

            if (Files.exists(filePath)) {
            throw new RuntimeException("An image with that name already exists");
            }

            Files.write(filePath, image.getBytes());

            String imagePath = "/images/" + fileName;

            f.setImagePath(imagePath);
            }
            
            f.setName(request.getName());
            f.setStockLevel(request.getStockLevel());
            f.setSupplier(s);
            f.setActive(request.isActive());
            f.setPurchasePrice(request.getPurchasePrice());
            f.setSellingPrice(request.getSellingPrice());

            flavourRepository.save(f);

            return "Flavour " + f.getName() + " updated";
        }  
        catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage(), e);
        }
    }
}
