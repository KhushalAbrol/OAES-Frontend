import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrlExam } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) { }

  public startExam(){
    return this.httpClient.get(`${baseUrlExam}/exam`);
  }
}
