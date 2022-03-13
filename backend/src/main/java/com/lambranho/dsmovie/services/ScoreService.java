package com.lambranho.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lambranho.dsmovie.dto.MovieDTO;
import com.lambranho.dsmovie.dto.ScoreDTO;
import com.lambranho.dsmovie.entities.Movie;
import com.lambranho.dsmovie.entities.Score;
import com.lambranho.dsmovie.entities.User;
import com.lambranho.dsmovie.repositories.MovieRepository;
import com.lambranho.dsmovie.repositories.ScoreRepository;
import com.lambranho.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ScoreRepository scoreRepository;
	
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO scoreDTO) {
		User user = userRepository.findByEmail(scoreDTO.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(scoreDTO.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(scoreDTO.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(scoreDTO.getScore());
		score = scoreRepository.saveAndFlush(score);

		Double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum += s.getValue();
		}
		Double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		movie = movieRepository.saveAndFlush(movie);
		
		return new MovieDTO(movie);
	}
	
	
	
	public ScoreService() {
		// TODO Auto-generated constructor stub
	}

}
