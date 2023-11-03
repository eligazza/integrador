package com.guider;

import 	org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.guider.config")
@ComponentScan("com.guider.service")
public class GuiderApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuiderApplication.class, args);
	}

}

