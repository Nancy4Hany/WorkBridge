package com.example.job.joblistingservice.strategy;

import com.example.job.joblistingservice.DTO.JobPostDTO;

import java.util.List;

public class RelevanceSortStrategy implements JobPostSortStrategy {

    @Override
    public List<JobPostDTO> sort(List<JobPostDTO> jobPosts) {
        // Sort job posts by relevance
        // Implement your custom relevance sorting logic here
        return jobPosts;
    }

    @Override
    public int compare(JobPostDTO jobPost1, JobPostDTO jobPost2) {
        // Implement your custom comparison logic for relevance
        // Return a negative value if jobPost1 is less relevant than jobPost2
        // Return a positive value if jobPost1 is more relevant than jobPost2
        // Return 0 if both job posts have the same relevance
        return 0;
    }
}
