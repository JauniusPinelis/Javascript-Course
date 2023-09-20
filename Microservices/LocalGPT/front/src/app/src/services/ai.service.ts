import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(
    private httpClient: HttpClient, 
    private authService: AuthService
  ) { }

  async generateResponse(query: string): Promise<string> {
    const httpBody = {
      input: query
    }

    var jwt = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `${jwt}`
    });
    
    // this.httpClient.post<any>(`${environment.openAiApiUrl}/complete`, httpBody, { headers: headers }).subscribe({
    //   next: (response) => {return response},
    //   error: (error) => {console.log("OpenAi call failed")}
    // })

    var response = await firstValueFrom(this.httpClient.post<any>(`${environment.openAiApiUrl}/complete`, httpBody, { headers: headers }))

    return response.response;
  }
}
