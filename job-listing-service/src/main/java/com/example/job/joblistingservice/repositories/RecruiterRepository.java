package com.example.job.joblistingservice.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.job.joblistingservice.model.Recruiter;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter, Long> {
    // Custom query methods if needed
}

