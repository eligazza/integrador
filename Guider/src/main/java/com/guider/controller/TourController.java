package com.guider.controller;
import com.guider.dtos.req.TourDtoReq;
import com.guider.dtos.res.TourDtoRes;
import com.guider.exceptions.*;
import com.guider.service.TourService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/tours")
public class TourController {

    @Autowired
    private TourService tourService;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping()
    public ResponseEntity<List<TourDtoRes>> listAll() throws NoContentException {
        List<TourDtoRes> list = tourService.listAll();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/{id}")
    public ResponseEntity<TourDtoRes> findTour(@PathVariable Long id) throws InvalidArgumentException, MissingArgumentException, NotFoundException {
        TourDtoRes tourFounded = tourService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(tourFounded);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping()
    public ResponseEntity<TourDtoRes> saveTour(@RequestBody TourDtoReq tour) throws DuplicatedException, InvalidArgumentException, MissingArgumentException {
        TourDtoRes newTour = tourService.save(tour);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTour);
    }

    //TODO PutMapping
    @CrossOrigin(origins = "http://localhost:8080")
    @PutMapping
    public ResponseEntity<TourDtoRes> changeTour(@RequestBody TourDtoReq tourDtoReq) throws DuplicatedException, InvalidArgumentException, MissingArgumentException {
        return ResponseEntity.status(HttpStatus.OK).body(tourService.update(tourDtoReq));
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @DeleteMapping("/{id}")
    public ResponseEntity<TourDtoRes> deleteTour(@PathVariable Long id) throws NotFoundException {
        TourDtoRes deletedTour = tourService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(deletedTour);
    }

    
}
