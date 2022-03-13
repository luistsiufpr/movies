package com.lambranho.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lambranho.dsmovie.dto.MovieDTO;
import com.lambranho.dsmovie.dto.ScoreDTO;
import com.lambranho.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

	@Autowired
	private ScoreService scoreService;
	
	@PutMapping
	public MovieDTO SaveScore(@RequestBody ScoreDTO scoreDTO){
		return scoreService.saveScore(scoreDTO);
	}
	
	public ScoreController() {
		// TODO Auto-generated constructor stub
	}

}
