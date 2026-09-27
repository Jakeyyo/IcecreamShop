package com.example.icecreamshop.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@Entity 
@Table (name = "flavours")
public class Flavour {

   @Id 
   @GeneratedValue (strategy = GenerationType.IDENTITY)
   private int id;

   @NotBlank 
   @Column (name = "flavour_name")
   private String name;

   @Min (value = 0)
   @Column (name = "stock_level")
   private double stockLevel;

   @ManyToOne 
   @JoinColumn (name = "supplier_id")
   private Supplier supplier;

   @Column (name = "image_path")
   private String imagePath;

   @Column(nullable = false)
   private boolean active = true;

   @Column (name = "purchase_price")
   private double purchasePrice;

   @Column (name = "selling_price")
   private double sellingPrice;

   @JsonIgnore
   @ManyToMany(mappedBy = "flavours")
   private List<Icecream> icecreams;
}
