package com.example.job.joblistingservice.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.job.joblistingservice.DTO.RecruiterDTO;
import com.example.job.joblistingservice.services.RecruiterService;


@RestController
@RequestMapping("/recruiters")
public class RecruiterController {

    private final RecruiterService recruiterService;

    public RecruiterController(RecruiterService recruiterService) {
        this.recruiterService = recruiterService;
    }

    @GetMapping
    public List<RecruiterDTO> getAllRecruiters() {
        return recruiterService.getAllRecruiters();
    }

    @GetMapping("/{id}")
    public RecruiterDTO getRecruiterById(@PathVariable Long id) {
        return recruiterService.getRecruiterById(id);
    }

    @PostMapping
    public RecruiterDTO createRecruiter(@RequestBody RecruiterDTO recruiterDTO) {
        return recruiterService.createRecruiter(recruiterDTO);
    }
    

    @PutMapping("/{id}")
    public RecruiterDTO updateRecruiter(@PathVariable Long id, @RequestBody RecruiterDTO recruiterDTO) {
        return recruiterService.updateRecruiter(id, recruiterDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteRecruiter(@PathVariable Long id) {
        recruiterService.deleteRecruiter(id);
    }
}
