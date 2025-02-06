package com.voting.voting_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.voting_app.model.Poll;

@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {

}
