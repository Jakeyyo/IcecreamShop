package com.example.icecreamshop.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.icecreamshop.Model.Flavour;

public interface FlavourRepository extends JpaRepository<Flavour, Integer> {

    List<Flavour> findByNameContainingIgnoreCase(String name);
}
