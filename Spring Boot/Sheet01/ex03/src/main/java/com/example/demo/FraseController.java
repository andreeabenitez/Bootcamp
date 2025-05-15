package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/frases")
public class FraseController {

	private ArrayList<Frase> frases = new ArrayList<>();

	public FraseController() {
		frases.add(new Frase(1, "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", "Robert Collier"));
		frases.add(new Frase(2, "No te rindas, cada fracaso es una oportunidad para comenzar de nuevo.", "Henry Ford"));
	}

	@GetMapping
	public ArrayList<Frase> obtenerFrases() {
		return frases;
	}

	@GetMapping("/{id}")
	public Frase obtenerFrasePorId(@PathVariable int id) {
		Optional<Frase> frase = frases.stream().filter(f -> f.getId() == id).findFirst();
		return frase.orElse(null);
	}

	@PostMapping
	public Frase agregarFrase(@RequestBody Frase nuevaFrase) {
		frases.add(nuevaFrase);
		return nuevaFrase;
	}
}


