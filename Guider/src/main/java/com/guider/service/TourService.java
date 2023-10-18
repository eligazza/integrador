package com.guider.service;

import com.guider.persistence.entity.Tour;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class TourService {

    @Autowired
    com.guider.persistence.repository.TourRepository tourRepository;

    public List<Tour> list() {
        return tourRepository.findAll();
    }
    public Optional<Tour> find(Long id) {
        return tourRepository.findById(id);
    }
    public Tour save(Tour Touro) {
        return tourRepository.save(Touro);
    }

    public Tour delete(Long id) {
        Tour deletedTour = tourRepository.findById(id).get();
        if(tourRepository.findById(id).isPresent()) {
        tourRepository.deleteById(id);}
       return deletedTour;
    }


}
