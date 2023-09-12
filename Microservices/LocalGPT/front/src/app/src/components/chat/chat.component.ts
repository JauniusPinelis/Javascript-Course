import { Component } from '@angular/core';
import { AiService } from '../../services/ai.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(private aiService: AiService){

  }

  userInput: string = '';
  messages: { text: string; user: 'user' | 'bot' }[] = [
    {text: "Hello", user: 'user'},
    {text: "Hello to you again", user: "bot"}
  ];

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.messages.push({ text: this.userInput, user: 'user' });

      const response = this.aiService.generateResponse(this.userInput);

      this.messages.push({ text: response , user: 'bot' });
      this.userInput = '';
    }
  }
}
