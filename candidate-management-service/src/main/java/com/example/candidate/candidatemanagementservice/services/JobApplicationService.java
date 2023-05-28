package com.example.candidate.candidatemanagementservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.candidate.candidatemanagementservice.model.JobApplication;
import com.example.candidate.candidatemanagementservice.repositories.JobApplicationRepository;

@Service
public class JobApplicationService {
    private final JobApplicationRepository jobApplicationRepository;

    @Autowired
    public JobApplicationService(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    public JobApplication submitApplication(JobApplication jobApplication) {
        // Additional validation or processing logic can be added here
        return jobApplicationRepository.save(jobApplication);
    }
    public List<JobApplication> getAllSubmissions() {
        return jobApplicationRepository.findAll();
    }
}
