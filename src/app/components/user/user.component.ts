import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';

interface User {
  username: String;
  self: Boolean;
  connected: Boolean;
  hasNewMessages: Boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() selected: Boolean;
  status: String;
  constructor(private socket: Socket) {}

  ngOnInit(): void {
    this.ConnectionStatus();
  }

  onClick(): void {
    this.socket.emit('select');
  }

  ConnectionStatus(): void {
    this.user.connected ? (this.status = 'online') : (this.status = 'offline');
  }
}
