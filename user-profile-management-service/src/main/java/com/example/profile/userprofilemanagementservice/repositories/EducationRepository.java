package com.example.profile.userprofilemanagementservice.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.profile.userprofilemanagementservice.models.Education;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {
    
    public List<Education> findByUser_id(Long userID);

}
