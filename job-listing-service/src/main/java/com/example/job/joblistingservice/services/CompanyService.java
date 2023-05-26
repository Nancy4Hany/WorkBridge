package com.example.job.joblistingservice.services;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.job.joblistingservice.DTO.CompanyDTO;
import com.example.job.joblistingservice.model.Company;
import com.example.job.joblistingservice.repositories.CompanyRepository;



@Service
public class CompanyService {

    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public List<CompanyDTO> getAllCompanies() {
        List<Company> companies = companyRepository.findAll();
        List<CompanyDTO> companyDTOs = new ArrayList<>();
        for (Company company : companies) {
            CompanyDTO companyDTO = new CompanyDTO();
            companyDTO.setId(company.getId());
            companyDTO.setName(company.getName());
            companyDTO.setAddress(company.getAddress());
            companyDTO.setIndustry(company.getIndustry());
            companyDTO.setWebsite(company.getWebsite());
            companyDTOs.add(companyDTO);
        }
        return companyDTOs;
    }

    public CompanyDTO createCompany(CompanyDTO companyDTO) {
        Company company = new Company();
        company.setName(companyDTO.getName());
        company.setAddress(companyDTO.getAddress());
        company.setIndustry(companyDTO.getIndustry());
        company.setWebsite(companyDTO.getWebsite());

        Company savedCompany = companyRepository.save(company);

        CompanyDTO savedCompanyDTO = new CompanyDTO();
        savedCompanyDTO.setId(savedCompany.getId());
        savedCompanyDTO.setName(savedCompany.getName());
        savedCompanyDTO.setAddress(savedCompany.getAddress());
        savedCompanyDTO.setIndustry(savedCompany.getIndustry());
        savedCompanyDTO.setWebsite(savedCompany.getWebsite());

        return savedCompanyDTO;
    }

    public CompanyDTO getCompanyById(Long id) {
        Company company = companyRepository.findById(id).orElse(null);
        if (company != null) {
            CompanyDTO companyDTO = new CompanyDTO();
            companyDTO.setId(company.getId());
            companyDTO.setName(company.getName());
            companyDTO.setAddress(company.getAddress());
            companyDTO.setIndustry(company.getIndustry());
            companyDTO.setWebsite(company.getWebsite());
            return companyDTO;
        }
        return null;
    }

    public CompanyDTO updateCompany(Long id, CompanyDTO companyDTO) {
        Company company = companyRepository.findById(id).orElse(null);
        if (company != null) {
            company.setName(companyDTO.getName());
            company.setAddress(companyDTO.getAddress());
            company.setIndustry(companyDTO.getIndustry());
            company.setWebsite(companyDTO.getWebsite());
            Company updatedCompany = companyRepository.save(company);
            CompanyDTO updatedCompanyDTO = new CompanyDTO();
            updatedCompanyDTO.setId(updatedCompany.getId());
            updatedCompanyDTO.setName(updatedCompany.getName());
            updatedCompanyDTO.setAddress(updatedCompany.getAddress());
            updatedCompanyDTO.setIndustry(updatedCompany.getIndustry());
            updatedCompanyDTO.setWebsite(updatedCompany.getWebsite());
            return updatedCompanyDTO;
        }
        return null;
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}
