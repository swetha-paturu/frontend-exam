import { Question } from './../models/question';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class QuizService {
  private baseUrl : string = "http://192.168.0.106:8001";
//  private baseUrl : string = "http://desktop-97q9p8g:8000/exam-service";
//  private baseUrl1 : string = "http://desktop-97q9p8g:8000/user-service";
  private baseUrl1 : string = "http://192.168.0.106:8003";

  constructor(private http: HttpClient) { }

  getAll() : Observable<Question[]>{
      return this.http.get<Question[]>(this.baseUrl + "/fetch_all_questions");
  }

  updateScore(id : number, score : number) {
    return this.http.get(this.baseUrl1 + "/change_exam_score/" + id + "/" + score).subscribe();
  }

}
