package com.lambranho.dsmovie.dto;

public class ScoreDTO {

	private Long MovieId;
	private String email;
	private Double score;
	
	public Long getMovieId() {
		return MovieId;
	}

	public void setMovieId(Long movieId) {
		MovieId = movieId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public ScoreDTO() {
		// TODO Auto-generated constructor stub
	}

}
