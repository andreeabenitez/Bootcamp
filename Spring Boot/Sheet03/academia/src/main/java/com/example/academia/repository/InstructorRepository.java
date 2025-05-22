package com.example.academia.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface InstructorRepository extends JpaRepository<Instructor, Long> {

}
