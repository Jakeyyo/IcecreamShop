package com.example.icecreamshop.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.icecreamshop.Model.Order;

public interface orderRepository extends JpaRepository<Order, Integer> {

    List<Order> findAllByCustomerId(int id);

}
