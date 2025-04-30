package com.metahub.backend.service;

import com.metahub.backend.model.Animation;
import com.metahub.backend.repository.AnimationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimationService {

    private final AnimationRepository animationRepository;

    @Autowired
    public AnimationService(AnimationRepository animationRepository) {
        this.animationRepository = animationRepository;
    }

    public List<Animation> getAnimations() {
        return animationRepository.getAll();
    }
}
