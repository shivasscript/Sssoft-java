package com.shiva.consultantapp.service;

import com.shiva.consultantapp.model.Consultant;
import com.shiva.consultantapp.repository.ConsultantRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultantService {
    private final ConsultantRepository repository;

    public ConsultantService(ConsultantRepository repository){
        this.repository=repository;
    }

    public Consultant save(Consultant consultant){
        return repository.save(consultant);
    }

    public List<Consultant> findAll(){
        return repository.findAll();
    }

    public Consultant findById(Long id){
        return repository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

}
