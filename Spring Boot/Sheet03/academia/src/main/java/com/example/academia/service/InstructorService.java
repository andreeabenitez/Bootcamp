package com.example.academia.service;

import com.example.academia.entity.Instructor;
import com.example.academia.repository.InstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorService {

    private final InstructorRepository instructorRepository;

    @Autowired
    public InstructorService(InstructorRepository instructorRepository) {
        this.instructorRepository = instructorRepository
    }

    public List<Instructor> todosLosInstructores(){
        return instructorRepository.findAll();
    }

    public Instructor crearInstructor(Instructor instructor) {
        return instructorRepository.save(instructor);
    }
}
