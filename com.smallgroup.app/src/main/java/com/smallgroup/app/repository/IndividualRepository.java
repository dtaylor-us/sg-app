package com.smallgroup.app.repository;

import com.smallgroup.app.domain.Individual;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IndividualRepository extends JpaRepository<Individual,Long> {

}
