package com.guider.persistence.repository;

import com.guider.persistence.entity.TourImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ITourImageRepository extends JpaRepository<TourImage, Long> {

        Optional<TourImage> findByName(String name);
}