import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  service: string;
  messages: { text: string; sender: string }[] = [];
  newMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.service = this.route.snapshot.params['service'];
    // TODO: Implement real-time chat functionality
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'user' });
      this.newMessage = '';
      // TODO: Send message to the server
    }
  }

  // TODO: Implement methods for sending media, making voice/video calls
}