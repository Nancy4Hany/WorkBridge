package com.example.job.joblistingservice.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.job.joblistingservice.model.Company;
@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    // Custom query methods if needed
}
