package com.example.profile.userprofilemanagementservice.controllers;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.profile.userprofilemanagementservice.models.Education;
import com.example.profile.userprofilemanagementservice.models.User;
import com.example.profile.userprofilemanagementservice.repositories.EducationRepository;
import com.example.profile.userprofilemanagementservice.repositories.UserRepository;

@RestController
@RequestMapping("/education")
public class EducationController {

    @Autowired
    private EducationRepository educationRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("")
    public ResponseEntity addEducation(@RequestBody Map<String, String> body) {
        Education education = new Education();
        education.setSchoolName(body.get("school name"));
        education.setMajor(body.get("Major"));

        String startDateStr = body.get("start_date");
        LocalDate startDate = LocalDate.parse(startDateStr);
        Date startDateAsDate = Date.valueOf(startDate);
        education.setStartDate(startDateAsDate);

        String endDateStr = body.get("end_date");
        LocalDate endDate = LocalDate.parse(endDateStr);
        Date endDateAsDate = Date.valueOf(endDate);
        education.setEndDate(endDateAsDate);

        Long userId = Long.valueOf(body.get("user_id"));
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        education.setUser(user);

        this.educationRepository.save(education);
        return new ResponseEntity(education, HttpStatus.CREATED);
    }

    @GetMapping("{userID}")
    public ResponseEntity getUserEducation(@PathVariable("userID") Long userID) {
        List<Education> education = this.educationRepository.findByUser_id(userID);

        if(education == null){
            
            return new ResponseEntity("Not Found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(education, HttpStatus.OK);
    }

    @DeleteMapping("/selected/{educationID}")
    public ResponseEntity deleteEducation(@PathVariable("educationID") Long educationID) throws Exception
    {
        Education education = this.educationRepository.findById(educationID).orElse(null);
        if(education == null){
            
            throw new Exception("Education not found");
        }

        this.educationRepository.delete(education);

        return new ResponseEntity("Deleted", HttpStatus.OK);
    }
    
}
