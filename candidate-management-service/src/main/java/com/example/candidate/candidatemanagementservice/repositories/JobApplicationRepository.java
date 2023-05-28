package com.example.candidate.candidatemanagementservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.candidate.candidatemanagementservice.model.JobApplication;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
   
}
