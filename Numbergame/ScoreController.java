package com.example.guessgame.controller;

import com.example.guessgame.model.Score;
import com.example.guessgame.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scores")
public class ScoreController {

    @Autowired
    private ScoreRepository scoreRepository;

    @PostMapping
    public Score saveScore(@RequestBody Score score) {
        return scoreRepository.save(score);
    }

    @GetMapping
    public List<Score> getAllScores() {
        return scoreRepository.findAll();
    }
}

