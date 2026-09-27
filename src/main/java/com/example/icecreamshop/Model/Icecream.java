package com.example.icecreamshop.Model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@Entity 
@Table(name = "icecreams")
public class Icecream {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    private int price;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @ManyToMany 
    @JoinTable (
        name = "icecreams_flavours",
        joinColumns = @JoinColumn(name = "icecream_id"),
        inverseJoinColumns = @JoinColumn (name = "flavour_id") 
    )
    private List<Flavour> flavours;

}
