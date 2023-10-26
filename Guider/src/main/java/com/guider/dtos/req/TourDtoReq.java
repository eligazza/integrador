package com.guider.dtos.req;

//import com.guider.persistence.entity.Image;
//import com.guider.persistence.entity.TourImage;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

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
    private List<String> images;

}
