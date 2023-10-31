package com.guider.dtos.req;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class TourDtoReq {

    private Long id;
    private String name;
    private String location;
    private String guide;
    private String duration;
    private Double price;
    private String description;
    private Double rating;

    private String category;
    private List<String> images;

}
