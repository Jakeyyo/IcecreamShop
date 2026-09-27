package com.example.icecreamshop.Exception;

public class FlavourNotFoundException extends RuntimeException {

    public FlavourNotFoundException(String message) {
        super(message);
    }
}
