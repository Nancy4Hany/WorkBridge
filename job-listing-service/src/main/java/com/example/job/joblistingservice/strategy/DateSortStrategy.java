package com.example.job.joblistingservice.strategy;

import com.example.job.joblistingservice.DTO.JobPostDTO;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class DateSortStrategy implements JobPostSortStrategy {

    @Override
    public List<JobPostDTO> sort(List<JobPostDTO> jobPosts) {
        // Sort job posts by date in ascending order using a custom Comparator
        Collections.sort(jobPosts, new DateComparator());
        return jobPosts;
    }


    @Override
    public int compare(JobPostDTO jobPost1, JobPostDTO jobPost2) {
        // Implement your custom comparison logic for dates
        // Return a negative value if jobPost1's date is earlier than jobPost2's date
        // Return a positive value if jobPost1's date is later than jobPost2's date
        // Return 0 if both job posts have the same date
    
        if (jobPost1.getDate() == null && jobPost2.getDate() == null) {
            return 0;
        } else if (jobPost1.getDate() == null) {
            return 1; // jobPost2 is considered greater
        } else if (jobPost2.getDate() == null) {
            return -1; // jobPost1 is considered greater
        } else {
            // Compare the dates using the 'compareTo' method of the Date class
            return jobPost1.getDate().compareTo(jobPost2.getDate());
        }
    }
    
}

class DateComparator implements Comparator<JobPostDTO> {
    @Override
    public int compare(JobPostDTO jobPost1, JobPostDTO jobPost2) {
        // Implement your custom comparison logic for dates
        // Return a negative value if jobPost1's date is earlier than jobPost2's date
        // Return a positive value if jobPost1's date is later than jobPost2's date
        // Return 0 if both job posts have the same date
        // Example implementation:
        if (jobPost1.getDate() == null && jobPost2.getDate() == null) {
            return 0;
        } else if (jobPost1.getDate() == null) {
            return 1; // jobPost2 is considered greater
        } else if (jobPost2.getDate() == null) {
            return -1; // jobPost1 is considered greater
        } else {
            return jobPost1.getDate().compareTo(jobPost2.getDate());
        }
    }
}
