package com.metahub.backend.controller;
import com.metahub.backend.repository.AnimationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.metahub.backend.model.Animation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animations")
@CrossOrigin(origins = "*") //for front end access

public class AnimationController {
    private final AnimationRepository repo;

    public AnimationController(AnimationRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Animation> getAll() {
        return repo.getAll();
    }

    @GetMapping("/filter")
    public List<Animation> filterAnimations(@RequestParam(required = false) Integer threePt, @RequestParam(required = true) Integer ballHandle){
        return repo.getAll().stream()
                .filter(anim -> threePt == null || threePt >= anim.getMinThreePoint())
                .filter(anim -> ballHandle == null || ballHandle >= anim.getMinBallHandle())
                .toList();
    }

    @PostMapping
    public void addAnimation(@RequestBody Animation animation) {
        repo.add(animation);
    }
}