package com.lambranho.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lambranho.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	
}
