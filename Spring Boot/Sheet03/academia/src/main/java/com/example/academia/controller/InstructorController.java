package com.example.academia.controller;

import com.example.academia.dto.instructorCreationDto;
import com.example.academia.entity.Instructor;
import com.example.academia.service.InstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/instructores")
public class InstructorController {
    private final InstructorService instructorService;

    @Autowired
    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }
    @GetMapping
    public List<Instructor> todosLosInstructores() {
        return instructorService.todosLosInstructores();

    }

    @PostMapping
    public Instructor crearInstructor(@RequestBody Instructor instructor) {
        return instructorService.crearInstructor(instructor);
    }
}
