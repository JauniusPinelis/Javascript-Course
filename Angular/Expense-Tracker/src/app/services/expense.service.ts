import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { BaseService } from './base.service';

const API_URL: string = "http://localhost:3000/expenses";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends BaseService<Expense> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
  }

  getAll() : Observable<Expense[]>{
    return super.GetAll(API_URL);
  }

  add(expense: Expense): Observable<any>{
    return this.httpClient.post<Expense>(API_URL, expense);
  }
}
