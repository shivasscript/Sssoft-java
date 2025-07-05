package com.shiva.consultantapp.controller;

import com.shiva.consultantapp.model.Consultant;
import com.shiva.consultantapp.service.ConsultantService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consultants")
@CrossOrigin
public class ConsultantController {
    private final ConsultantService service;

    public ConsultantController(ConsultantService service){
        this.service=service;
    }

    @PostMapping
    public ResponseEntity<Consultant> create(@RequestBody Consultant consultant){
        return ResponseEntity.ok(service.save(consultant));
    }

    @GetMapping
    public List<Consultant> getAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Consultant> getById(@PathVariable Long id){
        Consultant consultant=service.findById(id);
        return consultant!=null ? ResponseEntity.ok(consultant) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Consultant> update(@PathVariable Long id, @RequestBody Consultant updatedData){
        Consultant existing = service.findById(id);
        if(existing==null){
            return ResponseEntity.notFound().build();
        }
        existing.setName(updatedData.getName());
        existing.setEmail(updatedData.getEmail());
        existing.setPhoneNumber(updatedData.getPhoneNumber());

        return ResponseEntity.ok(service.save(existing));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
