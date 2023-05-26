package com.example.candidate.candidatemanagementservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.candidate.candidatemanagementservice.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
