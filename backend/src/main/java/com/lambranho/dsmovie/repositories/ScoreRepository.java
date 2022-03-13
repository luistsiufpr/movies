package com.lambranho.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lambranho.dsmovie.entities.Score;
import com.lambranho.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

	

}
