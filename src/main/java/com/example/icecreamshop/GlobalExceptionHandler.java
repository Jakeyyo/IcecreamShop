package com.example.icecreamshop;

import java.time.LocalDateTime;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.icecreamshop.DTO.ErrorResponse;
import com.example.icecreamshop.Exception.CustomerNotFoundException;
import com.example.icecreamshop.Exception.FlavourNotFoundException;
import com.example.icecreamshop.Exception.SortNotFoundException;
import com.example.icecreamshop.Exception.SupplierNotFoundException;

@RestControllerAdvice 
public class GlobalExceptionHandler {

    @ExceptionHandler (SortNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleSortNotFoundException (SortNotFoundException ex) {

        ErrorResponse errorResponse = new ErrorResponse(400, ex.getMessage(), LocalDateTime.now());

        return ResponseEntity.status(400).body(errorResponse);
    }

     @ExceptionHandler (SupplierNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleSupplierNotFoundException (SupplierNotFoundException ex) {

        ErrorResponse errorResponse = new ErrorResponse(400, ex.getMessage(), LocalDateTime.now());

        return ResponseEntity.status(400).body(errorResponse);
    }

    @ExceptionHandler (FlavourNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleFlavourNotFoundException (FlavourNotFoundException ex) {

        ErrorResponse errorResponse = new ErrorResponse(400, ex.getMessage(), LocalDateTime.now());

        return ResponseEntity.status(400).body(errorResponse);
    }

    @ExceptionHandler (CustomerNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleCustomerNotFoundException (CustomerNotFoundException ex) {

        ErrorResponse errorResponse = new ErrorResponse(400, ex.getMessage(), LocalDateTime.now());

        return ResponseEntity.status(400).body(errorResponse);
    }

}
