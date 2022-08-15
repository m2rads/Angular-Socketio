import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
interface User {
  username: String;
  self: Boolean;
  connected: Boolean;
  hasNewMessages: Boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  users: Array<User>;
  selectedUser: any;
  constructor(private socket: Socket) {}

  ngOnInit(): void {}

  onSelectUser(user: User): void {
    this.selectedUser = user;
    user.hasNewMessages = false;
  }
}
