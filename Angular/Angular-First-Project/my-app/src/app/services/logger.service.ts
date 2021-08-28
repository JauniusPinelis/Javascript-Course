import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private messages: string[] = [];

  constructor() { }

  public Log(message: string): void {
    this.messages.push(message);
    console.log(message);
  }
}
