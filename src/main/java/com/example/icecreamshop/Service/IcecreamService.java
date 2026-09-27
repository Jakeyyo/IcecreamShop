package com.example.icecreamshop.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.icecreamshop.DTO.CreateIcecreamRequest;
import com.example.icecreamshop.Model.Flavour;
import com.example.icecreamshop.Model.Icecream;
import com.example.icecreamshop.Model.Order;
import com.example.icecreamshop.Repository.FlavourRepository;
import com.example.icecreamshop.Repository.icecreamRepository;
import com.example.icecreamshop.Repository.orderRepository;

@Service 
public class IcecreamService {

    @Autowired 
    private icecreamRepository icecreamRepository;

    @Autowired FlavourRepository flavourRepository;

    @Autowired orderRepository orderRepository;

    public List<Icecream> getAllIcecreams() {
        return icecreamRepository.findAll();
    }

    public List<Icecream> getIcecreamsByOrderId (int id) {
        List<Icecream> result = new ArrayList<>();

        for (Icecream i : icecreamRepository.findAll()) {
            if (i.getOrder().getId() == id) {
                result.add(i);
            }
        }

        return result;
    }

    public String postIcecream (CreateIcecreamRequest request) {

        Order order = orderRepository.findById(request.getOrderId()).orElseThrow();

        List<Flavour> flavours = flavourRepository.findAllById(request.getFlavourIds());

        Icecream icecream = new Icecream();

        icecream.setPrice(request.getPrice());
        icecream.setOrder(order);
        icecream.setFlavours(flavours);

        icecreamRepository.save(icecream);

        return "Created new icecream";
    }
}
