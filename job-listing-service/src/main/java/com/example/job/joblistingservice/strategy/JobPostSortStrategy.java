package com.example.job.joblistingservice.strategy;

import com.example.job.joblistingservice.DTO.JobPostDTO;

import java.util.List;

public interface JobPostSortStrategy {

    List<JobPostDTO> sort(List<JobPostDTO> jobPosts);
    
    int compare(JobPostDTO jobPost1, JobPostDTO jobPost2);
}
