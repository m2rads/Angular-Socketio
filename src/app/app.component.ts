import { Component, OnInit, OnDestroy } from '@angular/core';
import socket from './services/chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-chat-app';
  usernameAlreadySelected: Boolean = false;

  // @Output() username: String;

  constructor() {}

  ngOnInit(): void {
    socket.on('connect_error', (err) => {
      if (err.message === 'invalid username') {
        this.usernameAlreadySelected = false;
      }
    });
  }

  ngOnDestroy(): void {
    socket.off('connect_error');
  }

  onUserSelection(username: string) {
    this.usernameAlreadySelected = true;
    console.log(username);
    socket.auth = { username };
    socket.connect();
  }
}
