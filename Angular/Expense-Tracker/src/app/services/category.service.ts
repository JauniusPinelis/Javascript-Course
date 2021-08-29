import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { BaseService } from './base.service';

const API_URL = "http://localhost:3000/categories"

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
   }

  public GetAll(): Observable<Category[]>{
    return super.GetAll(API_URL);
  }
}
