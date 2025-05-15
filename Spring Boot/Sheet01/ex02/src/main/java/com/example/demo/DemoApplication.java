package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.*;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@GetMapping("/suma/{a}/{b}")
	public String sumar(@PathVariable int a, @PathVariable int b) {
		int resultado = a + b;
		return "La suma de " + a + " + " + b + " es " + resultado;
	}

	@GetMapping("/multiplica")
	public String multiplicar(@RequestParam int a, @RequestParam int b) {
		int resultado = a * b;
		return "La multiplicación de " + a + " * " + b + " es " + resultado;
	}
}
