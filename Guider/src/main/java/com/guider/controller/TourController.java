package com.guider.controller;

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
    public ResponseEntity<List<Tour>> listAll() {
        List<Tour> list = tourService.list();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findTour(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(tourService.find(id));
    }

    @PostMapping()
    public ResponseEntity<Tour> saveTour(@RequestBody Tour tour) {
        Tour newTour = tourService.save(tour);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTour);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Tour> deleteTour(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(tourService.delete(id));
    }

    
}
