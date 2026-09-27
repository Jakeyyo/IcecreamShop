package com.example.icecreamshop.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.icecreamshop.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>  {

}
