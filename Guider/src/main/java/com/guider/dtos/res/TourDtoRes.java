package com.guider.dtos.res;

import com.guider.persistence.entity.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter @Setter
public class TourDtoRes {

    private Long id;
    private String name;
    private String location;
    private String guide;
    private String duration;
    private String description;
    private Set<Image> images;

}
