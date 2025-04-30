package com.metahub.backend.model;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


import jakarta.persistence.Entity;

@Entity
public class Animation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type; //dibble, jump shot, etc...
    private int minThreePoint;
    private int minBallHandle;

    public Animation() {}

    public Animation(String name, String type, int minThreePoint, int minBallHandle) {
        this.name = name;
        this.type = type;
        this.minThreePoint = minThreePoint;
        this.minBallHandle = minBallHandle;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getType() { return type; }
    public void setType(String name) { this.type = type; }

    public int getMinThreePoint() { return minThreePoint; }
    public void setMinThreePoint(String name) { this.minThreePoint = minThreePoint; }

    public int getMinBallHandle() { return minBallHandle; }
    public void setMinBallHandle(int minBallHandle) { this.minBallHandle = minBallHandle; }


}