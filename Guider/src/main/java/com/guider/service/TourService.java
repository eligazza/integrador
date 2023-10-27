package com.guider.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.guider.dtos.req.TourDtoReq;
import com.guider.dtos.res.TourDtoRes;
import com.guider.exceptions.*;
import com.guider.persistence.entity.Tour;
import com.guider.persistence.repository.ITourRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TourService implements IService<TourDtoReq, TourDtoRes>{

    private static final Logger LOG = LogManager.getLogger(TourService.class);

    @Autowired
    ITourRepository tourRepository;

    @Autowired
    ObjectMapper mapper;
    
    // LISTAR
    public List<TourDtoRes> listAll() throws NoContentException {
        if (tourRepository.findAll().isEmpty() || tourRepository.findAll().size() == 0) {
            throw new NoContentException("No resources found");
        } else {
            return tourRepository.findAll()
                    .stream()
                    .map(tour -> mapper.convertValue(tour, TourDtoRes.class))
                    .collect(Collectors.toList());
        }
    }

    // ENCONTRAR
    public TourDtoRes findById(Long id) throws InvalidArgumentException, NotFoundException, MissingArgumentException {
        if (id == null) {
            throw new MissingArgumentException("Please, choose a tour");
        } else if (id < 1) {
            throw new InvalidArgumentException("Id must be greater than zero");
        } else if (tourRepository.findById(id).isEmpty()) {
            throw new NotFoundException("Tour id not found");
        } else {
            return mapper.convertValue(tourRepository.findById(id).get(), TourDtoRes.class);
        }
    }

    // GUARDAR
    public TourDtoRes save(TourDtoReq tourDtoReq) throws DuplicatedException, InvalidArgumentException, MissingArgumentException {

        validateRequest(tourDtoReq);

        if (tourRepository.findByName(tourDtoReq.getName()).isPresent()) {
            throw new DuplicatedException("There is already a tour with that exact name");
        } else {
            Tour tour = mapper.convertValue(tourDtoReq, Tour.class);
            Tour savedTour = tourRepository.save(tour);
            return mapper.convertValue(savedTour, TourDtoRes.class);
        }
    }

    // TODO MODIFICAR
    public TourDtoRes update(TourDtoReq tourDtoReq) throws InvalidArgumentException, MissingArgumentException {
        validateRequest(tourDtoReq);
        return null;
    }

    // BORRAR
    public TourDtoRes delete(Long id) throws NotFoundException {

        if (tourRepository.findById(id).isEmpty()) {
            throw new NotFoundException("Tour not found");
        } else {
            TourDtoRes deletedTour = mapper.convertValue(tourRepository.findById(id).get(), TourDtoRes.class);
            tourRepository.deleteById(id);
            return deletedTour;
        }
    }

    private void validateRequest(TourDtoReq t) throws MissingArgumentException, InvalidArgumentException {

        if (t.getName() == null || t.getName().isBlank() || t.getName().isEmpty()) {
            throw new MissingArgumentException("Please, write a name for the tour");
        } else if (t.getLocation() == null || t.getLocation().isBlank() || t.getLocation().isEmpty() ) {
            throw new MissingArgumentException("Please, specify a location for the tour");
        } else if (t.getGuide() == null || t.getGuide().isEmpty()) {
            throw new MissingArgumentException("Every tour needs a guide");
        } else if (t.getDuration() == null || t.getDuration().isBlank() || t.getDuration().isEmpty()) {
            throw new MissingArgumentException("Please, specify the duration for the tour");
        } else if (t.getDescription() == null || t.getDescription().isBlank() || t.getDescription().isEmpty()) {
            throw new MissingArgumentException("Please, write a description for the tour");
        } else if (t.getDescription().length() > 5000) {
            throw new InvalidArgumentException("Keep your description short: 5000 characters or less");
        } else if (t.getPrice() == null || t.getPrice() < 1) {
            throw new InvalidArgumentException("Please, specify a valid price");
        } //else if (t.getRating() == null || t.getRating() < 1) {
            //throw new InvalidArgumentException("Please, specify a valid rating: from 1 to 5");
        //}
    }

}
