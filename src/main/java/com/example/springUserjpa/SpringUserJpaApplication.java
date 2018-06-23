package com.example.springUserjpa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "repo")
@ComponentScan ({"com.example.springUserjpa.model","controller","service"})
public class SpringUserJpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringUserJpaApplication.class, args);




	}
}
