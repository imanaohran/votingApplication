package com.voting.voting_app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.voting.voting_app.model.Poll;
import com.voting.voting_app.repository.PollRepository;

@Service
public class PollService {

    private final PollRepository pollRepository;

    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);
    }

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Optional<Poll> getPoll(Long id) {
        return pollRepository.findById(id);
    }

}
