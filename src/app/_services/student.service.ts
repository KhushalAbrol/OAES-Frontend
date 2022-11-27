import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrlStudent } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  startExam(id: any, form: any){
    return this.httpClient.post(`${baseUrlStudent}/student/${id}`, form);
  }
  
}
