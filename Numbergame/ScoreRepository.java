package com.example.guessgame.repository;

import com.example.guessgame.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, Long> {
}
