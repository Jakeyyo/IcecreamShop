package com.example.icecreamshop.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.icecreamshop.DTO.CreateSupplierRequest;
import com.example.icecreamshop.DTO.PutSupplierRequest;
import com.example.icecreamshop.Exception.SortNotFoundException;
import com.example.icecreamshop.Exception.SupplierNotFoundException;
import com.example.icecreamshop.Model.Supplier;
import com.example.icecreamshop.Repository.SupplierRepository;

@Service 
public class SupplierService {

    @Autowired 
    private SupplierRepository supplierRepository;

    public List<com.example.icecreamshop.Model.Supplier> getAllSuppliers(String name, String sortBy, String desc, String active) {

        List<com.example.icecreamshop.Model.Supplier> result = new ArrayList<>();

        for (Supplier s : supplierRepository.findAll()) {

            if (active != null && active.equals("true")) {

                if (!s.isActive()) {
                    if (name == null || name.isBlank() || s.getName().toLowerCase().contains(name.toLowerCase())) {
                        result.add(s);
                    }
                }   
            }

            else {
                  if (s.isActive()) {
                    if (name == null || name.isBlank() || s.getName().toLowerCase().contains(name.toLowerCase())) {
                        result.add(s);
                    }
                }  
            }
        }

        if (sortBy != null && !sortBy.isBlank() && !sortBy.equals("null")) {

            if (sortBy.equals("name")) {
                result.sort((a, b) -> a.getName().compareTo(b.getName()));
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

    public com.example.icecreamshop.Model.Supplier getSupplierById (int id) {
        Optional<com.example.icecreamshop.Model.Supplier> s = supplierRepository.findById(id);

        if (s.isPresent()) {
            return s.get();
        }

        throw new SupplierNotFoundException("Supplier cannot be found");
    }

    public String postSupplier (CreateSupplierRequest request) {

        supplierRepository.save(new Supplier(0, request.getName(), request.getPhoneNumber(), request.getEmail(), true));

        return "Supplier " + request.getName() + " added";
    }

    public String putSupplier (int id, PutSupplierRequest request) {
        com.example.icecreamshop.Model.Supplier s = getSupplierById(id);

        s.setName(request.getName());
        s.setPhoneNumber(request.getPhoneNumber());
        s.setEmail(request.getEmail());
        s.setActive(request.isActive());

        supplierRepository.save(s);

        return "Supplier " + s.getName() + " updated";
    }
}
