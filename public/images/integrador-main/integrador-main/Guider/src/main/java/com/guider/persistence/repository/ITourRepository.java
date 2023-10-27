package com.guider.persistence.repository;

import com.guider.persistence.entity.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ITourRepository extends JpaRepository<Tour, Long> {

    Optional<Tour> findByName(String name);

}
