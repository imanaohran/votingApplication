package com.voting.voting_app.model;

import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class OptionVote {

    private String optionText;
    private Long voteCount = 0L;
}
