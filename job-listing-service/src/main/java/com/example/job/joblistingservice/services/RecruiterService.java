package com.example.job.joblistingservice.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.job.joblistingservice.DTO.RecruiterDTO;
import com.example.job.joblistingservice.model.Recruiter;
import com.example.job.joblistingservice.repositories.RecruiterRepository;

@Service
public class RecruiterService {

    private final RecruiterRepository recruiterRepository;

    public RecruiterService(RecruiterRepository recruiterRepository) {
        this.recruiterRepository = recruiterRepository;
    }

    public List<RecruiterDTO> getAllRecruiters() {
        List<Recruiter> recruiters = recruiterRepository.findAll();
        List<RecruiterDTO> recruiterDTOs = new ArrayList<>();
        for (Recruiter recruiter : recruiters) {
            RecruiterDTO recruiterDTO = convertToRecruiterDTO(recruiter);
            recruiterDTOs.add(recruiterDTO);
        }
        return recruiterDTOs;
    }

    public RecruiterDTO getRecruiterById(Long id) {
        Optional<Recruiter> optionalRecruiter = recruiterRepository.findById(id);
        if (optionalRecruiter.isPresent()) {
            Recruiter recruiter = optionalRecruiter.get();
            return convertToRecruiterDTO(recruiter);
        }
        return null;
    }

    public RecruiterDTO createRecruiter(RecruiterDTO recruiterDTO) {
        Recruiter recruiter = convertToRecruiterModel(recruiterDTO);
        Recruiter savedRecruiter = recruiterRepository.save(recruiter);
        return convertToRecruiterDTO(savedRecruiter);
    }

    public RecruiterDTO updateRecruiter(Long id, RecruiterDTO recruiterDTO) {
        Optional<Recruiter> optionalRecruiter = recruiterRepository.findById(id);
        if (optionalRecruiter.isPresent()) {
            Recruiter existingRecruiter = optionalRecruiter.get();
            existingRecruiter.setName(recruiterDTO.getName());
            // Set other properties as needed
            Recruiter updatedRecruiter = recruiterRepository.save(existingRecruiter);
            return convertToRecruiterDTO(updatedRecruiter);
        }
        return null;
    }

    public void deleteRecruiter(Long id) {
        recruiterRepository.deleteById(id);
    }

    private RecruiterDTO convertToRecruiterDTO(Recruiter recruiter) {
        RecruiterDTO recruiterDTO = new RecruiterDTO();
        recruiterDTO.setId(recruiter.getId());
        recruiterDTO.setName(recruiter.getName());
        // Set other properties as needed
        return recruiterDTO;
    }

    private Recruiter convertToRecruiterModel(RecruiterDTO recruiterDTO) {
        Recruiter recruiter = new Recruiter();
        recruiter.setName(recruiterDTO.getName());
        // Set other properties as needed
        return recruiter;
    }
}
