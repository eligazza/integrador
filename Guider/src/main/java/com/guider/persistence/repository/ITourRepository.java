package com.guider.persistence.repository;

import com.guider.persistence.entity.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ITourRepository extends JpaRepository<Tour, Long> {

    Optional<Tour> findByName(String name);

}
