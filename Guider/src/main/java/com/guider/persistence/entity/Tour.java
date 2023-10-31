package com.guider.persistence.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Entity @Setter @Getter @NoArgsConstructor
public class Tour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String location;
    @Column
    private Long guide;
    @Column
    private String duration;
    @Column
    private Double price;
    @Column(length = 5000)
    private String description;
    @Column
    private Double rating;
    @Column(columnDefinition = "varbinary(2048)")
    private List<String> images;


}





