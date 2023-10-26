package com.guider.service;

import com.guider.dtos.res.TourDtoRes;
import com.guider.persistence.entity.Tour;
import com.guider.persistence.entity.TourImage;
import com.guider.persistence.repository.ITourImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TourImageService {
    @Autowired
    ITourImageRepository tourImageRepository;

    public List<TourImage> ListAll() {
        if (tourImageRepository.findAll().size() == 0) {
            throw new NullPointerException("Nothing here :)");
        } else {
            return tourImageRepository.findAll();

        }
    }
    public TourImage save(TourImage tourImage) {

        if (tourImageRepository.findByName(tourImage.getName()).isPresent()) {
            throw new NullPointerException("Tour already exists");
        } else {

            TourImage savedTourImage = tourImageRepository.save(tourImage);
            return savedTourImage;
        }
    }

    public TourImage delete(Long id) {
        if (tourImageRepository.findById(id).isEmpty()) {
            throw new NullPointerException("Tour image doesn't exist");
        } else {
            TourImage deletedtourImage = tourImageRepository.findById(id).get();
            tourImageRepository.deleteById(id);
            return deletedtourImage;
        }

    }

}


