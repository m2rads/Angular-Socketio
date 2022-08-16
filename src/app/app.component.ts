import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './services/chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-chat-app';
  usernameAlreadySelected: Boolean = false;

  constructor(private _chatSerivce: ChatService) {}

  ngOnInit(): void {
    this._chatSerivce.listen('connect_error').subscribe((err) => {
      if (err.message === 'invalid username') {
        this.usernameAlreadySelected = false;
      }
    });
  }

  ngOnDestroy(): void {
    this._chatSerivce.destroyConnection('connect_error');
  }

  onUserSelection(username: string) {
    this.usernameAlreadySelected = true;
    this._chatSerivce.initConnetion(username);
  }
}
