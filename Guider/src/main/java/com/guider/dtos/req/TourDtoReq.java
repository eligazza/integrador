package com.guider.dtos.req;

import com.guider.persistence.entity.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter @Setter
public class TourDtoReq {

    private Long id;
    private String name;
    private String location;
    private String guide;
    private String duration;
    private String description;
    private Set<Image> images;

}
