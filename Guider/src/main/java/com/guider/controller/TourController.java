package com.guider.controller;
import com.guider.dtos.req.TourDtoReq;
import com.guider.dtos.res.TourDtoRes;
import com.guider.persistence.entity.Tour;
import com.guider.service.TourService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/tour")
public class TourController {

    @Autowired
    private TourService tourService;

    @GetMapping()
    public ResponseEntity<List<TourDtoRes>> listAll() {
        List<TourDtoRes> list = tourService.listAll();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
    @GetMapping("/{id}")
    public ResponseEntity<TourDtoRes> findTour(@PathVariable Long id) {
        TourDtoRes tourFounded = tourService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(tourFounded);
    }

    @PostMapping()
    public ResponseEntity<TourDtoRes> saveTour(@RequestBody TourDtoReq tour) {
        TourDtoRes newTour = tourService.save(tour);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTour);
    }

    //TODO PutMapping

    @DeleteMapping("/{id}")
    public ResponseEntity<TourDtoRes> deleteTour(@PathVariable Long id) {
        TourDtoRes deletedTour = tourService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(deletedTour);
    }

    
}
