package com.metahub.backend.repository;

import com.metahub.backend.model.Animation;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

public class AnimationRepository {
    private final List<Animation> animations = new ArrayList<>();

    public AnimationRepository() {
        animations.add(new Animation("LaMelo Ball", "Jump Shot", 85, 60));
        animations.add(new Animation("Stephen Curry", "Jump Shot", 92, 55));
        animations.add(new Animation("Kyrie Irving", "Dribble", 70, 92));
        animations.add(new Animation("Zach LaVine", "Dunk", 60, 75));
    }

    public List<Animation> getAll(){
        return animations;
    }

    public void add(Animation animation){
        animations.add(animation);
    }

}