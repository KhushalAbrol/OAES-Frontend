import { Component, OnInit } from '@angular/core';
import { StudentTandC } from '../interface/StudentTandC';
import { LoginService } from '../_services/login.service';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  terms: boolean = false;
  access: boolean = false;
  id: any;
  studentTandC: StudentTandC  = ({} as any) as StudentTandC;

  constructor(
    public studentService: StudentService,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  startTest(){
    this.studentTandC.termsAndConditions = this.terms;
    this.studentTandC.micAndCamera = this.access;
    this.id = this.loginService.getId();
    this.studentService.startExam(this.id, this.studentTandC).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error (error: any){
        console.log(error);
        alert(error.error.text);
      }
    });
  }
}
