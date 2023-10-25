package com.guider.persistence.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
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
    private String guide;
    @Column
    private String duration;
    @Column
    private Double price;
    @Column
    private String description;
//    @Column
//    private Set<Image> images;

}





