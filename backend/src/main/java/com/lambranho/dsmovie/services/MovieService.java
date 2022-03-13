package com.lambranho.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lambranho.dsmovie.dto.MovieDTO;
import com.lambranho.dsmovie.entities.Movie;
import com.lambranho.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		Page<Movie> movies = movieRepository.findAll(pageable);
		Page<MovieDTO> page = movies.map(item -> new MovieDTO(item));
		return page;		
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		Movie movie = movieRepository.findById(id).get();
		MovieDTO movieDTO = new MovieDTO(movie);
		return movieDTO;		
	}
	
	public MovieService() {
		// TODO Auto-generated constructor stub
	}

}
