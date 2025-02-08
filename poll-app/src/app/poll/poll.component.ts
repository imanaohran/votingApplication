import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent implements OnInit {

  newPoll: Poll = {  
    question: '',
    options: [
      {optionText: '', voteCount: 0},
      {optionText: '', voteCount: 0}
    ]
  }

  polls: Poll[] = [];
  
  constructor(private pollService: PollService) { }

  ngOnInit(): void {
      this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {this.polls = data;},
      error: (error) => {console.error('There is an error!', error)}
    });
  }

  createPoll() {
    console.log('Podaci koji se šalju:', this.newPoll);
    this.pollService.createPoll(this.newPoll).subscribe({
      next: (createdPoll) => {
        this.polls.push(createdPoll);
        this.resetPoll();},
      error: (error) => {console.error('There is an error!', error)}
    });
  }

  resetPoll() {
    this.newPoll = {  
      question: '',
      options: [
        {optionText: '', voteCount: 0},
        {optionText: '', voteCount: 0}
      ]
    }
  }

  trackByIndex(index: number): number{
    return index;
  }
}
