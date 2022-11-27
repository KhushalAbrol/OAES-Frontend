import { Component, OnInit } from '@angular/core';
import { ExamService } from '../_services/exam.service';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  constructor(public examService: ExamService) { }

  ngOnInit(): void {
  }

  startExam(){
    this.examService.startExam().subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        alert(error.error.text);  
      }
    });
  }

}
