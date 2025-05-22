package com.example.academia.dto;

public class instructorCreationDto {
    @NotBlank
    String nombre;

    @NotBlank
    @Email
    String email;

    public @NotBlank String getNombre() {
        return nombre;
    }

    public void setNombre(@NotBlank String nombre) {
        this.nombre = nombre;
    }

    public @NotBlank @Email String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank @Email String email) {
        this.email = email;
    }
}
