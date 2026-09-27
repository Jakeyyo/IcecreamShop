package com.example.icecreamshop.Repository;

import java.util.List;
import java.util.function.Supplier;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<com.example.icecreamshop.Model.Supplier, Integer> {

    List<com.example.icecreamshop.Model.Supplier> findByNameContainsIgnoreCase (String name);
}
