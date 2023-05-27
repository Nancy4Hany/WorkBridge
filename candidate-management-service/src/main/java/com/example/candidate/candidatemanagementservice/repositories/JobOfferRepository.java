package com.example.candidate.candidatemanagementservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.candidate.candidatemanagementservice.models.JobOffer;

@Repository
public interface JobOfferRepository extends JpaRepository<JobOffer, Long> {

}
