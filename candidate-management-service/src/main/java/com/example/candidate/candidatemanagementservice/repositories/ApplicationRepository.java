package com.example.candidate.candidatemanagementservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.candidate.candidatemanagementservice.models.Applications;

public interface ApplicationRepository extends JpaRepository<Applications, Long> {

}
