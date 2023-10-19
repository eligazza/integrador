package com.guider.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.guider.dtos.req.TourDtoReq;
import com.guider.dtos.res.TourDtoRes;
import com.guider.persistence.entity.Tour;
import com.guider.persistence.repository.ITourRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

public class TourService implements IService<TourDtoReq, TourDtoRes>{

    @Autowired
    ITourRepository tourRepository;

    @Autowired
    ObjectMapper mapper;
    
    // LISTAR
    public List<TourDtoRes> listAll() throws NullPointerException {
        if (tourRepository.findAll().size() == 0) {
            throw new NullPointerException("Nothing here :)");
        } else {
            return tourRepository.findAll()
                    .stream()
                    .map(tour -> mapper.convertValue(tour, TourDtoRes.class))
                    .collect(Collectors.toList());
        }
    }

    // ENCONTRAR
    public TourDtoRes findById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("ID can't be null");
        } else if (id < 1) {
            throw new IllegalArgumentException("ID must be greater than zero");
        } else if (tourRepository.findById(id).isEmpty()) {
            throw new NullPointerException("Tour not found");
        } else {
            return mapper.convertValue(tourRepository.findById(id).get(), TourDtoRes.class);
        }
    }

    // GUARDAR
    public TourDtoRes save(TourDtoReq tourDtoReq) {

        if (tourRepository.findByName(tourDtoReq.getName()).isPresent()) {
            throw new NullPointerException("Tour already exists");
        } else {
            Tour tour = mapper.convertValue(tourDtoReq, Tour.class);
            Tour savedTour = tourRepository.save(tour);
            return mapper.convertValue(savedTour, TourDtoRes.class);
        }
    }

    // TODO MODIFICAR
    public TourDtoRes update(TourDtoReq tourDtoReq) {
        return null;
    }

    // BORRAR
    public TourDtoRes delete(Long id) {

        if (tourRepository.findById(id).isEmpty()) {
            throw new NullPointerException("Tour doesn't exist");
        } else {
            TourDtoRes deletedTour = mapper.convertValue(tourRepository.findById(id).get(), TourDtoRes.class);
            tourRepository.deleteById(id);
            return deletedTour;
        }
    }

}
