package com.shiva.consultantapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shiva.consultantapp.model.Consultant;

public interface ConsultantRepository extends JpaRepository<Consultant, Long> {

}
