package com.example.icecreamshop.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.icecreamshop.Model.Icecream;

public interface icecreamRepository extends JpaRepository<Icecream, Integer> {

}
