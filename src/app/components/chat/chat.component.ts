import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  users = [];
  selectedUser: any;
  constructor(private _chatService: ChatService) {}

  ngOnInit(): void {
    this._chatService.listen('connect').subscribe(() => {
      this.users.forEach((user) => {
        if (user.self) {
          user.connected = true;
        }
      });
    });
    this._chatService.listen('disconnecct').subscribe((data) => {
      this.users.forEach((user) => {
        if (user.self) {
          user.connected = false;
        }
      });
    });
    const initReactiveProperties = (user: any) => {
      user.connected = true;
      user.messages = [];
      user.hasNewMessages = false;
    };

    this._chatService.listen('users').subscribe((users) => {
      // console.log('here are the users', users);
      users.forEach((user) => {
        console.log('indivisuals', user);
        user.self = user.userID === this._chatService.socketId();
        initReactiveProperties(user);
      });
      // put the current user first, and sort by username
      this.users = users.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });
    });

    this._chatService.listen('user connected').subscribe((user) => {
      initReactiveProperties(user);
      this.users.push(user);
    });

    this._chatService.listen('user disconnected').subscribe((id) => {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        if (user.userID === id) {
          user.connected = false;
          break;
        }
      }
    });

    this._chatService
      .listen('private message')
      .subscribe(({ content, from }) => {
        for (let i = 0; i < this.users.length; i++) {
          const user = this.users[i];
          if (user.userID === from) {
            user.messages.push({
              content,
              fromSelf: false,
            });
            if (user !== this.selectedUser) {
              user.hasNewMessages = true;
            }
            break;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this._chatService.destroyConnection('connect');
    this._chatService.destroyConnection('disconnect');
    this._chatService.destroyConnection('users');
    this._chatService.destroyConnection('user connected');
    this._chatService.destroyConnection('user disconnected');
    this._chatService.destroyConnection('private message');
  }

  onMessage(content: any): void {
    if (!content.type) {
      console.log('this is content', content);
      if (this.selectedUser) {
        this._chatService.emit('private message', {
          content,
          to: this.selectedUser.userID,
        });
        this.selectedUser.messages.push({
          content,
          fromSelf: true,
        });
      }
    }
  }

  onSelectUser(user: any): void {
    this.selectedUser = user;
    user.hasNewMessages = false;
  }
}
