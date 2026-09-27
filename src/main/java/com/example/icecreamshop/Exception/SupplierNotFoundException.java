package com.example.icecreamshop.Exception;

public class SupplierNotFoundException extends RuntimeException {

    public SupplierNotFoundException (String message) {
        super(message);
    }
}
