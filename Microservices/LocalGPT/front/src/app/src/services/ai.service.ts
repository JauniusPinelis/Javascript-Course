import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private httpClient: HttpClient) { }

  generateResponse(query: string): string {
    const httpBody = {
      input: query
    }
    
    this.httpClient.post<any>(`${environment.openAiApiUrl}/auth/login`, httpBody).subscribe((response) => {
      return response.response;
      
    }, (error) => {
      console.log("OpenAi call failed failed")
    })

    return "generate from backend service";
  }
}
