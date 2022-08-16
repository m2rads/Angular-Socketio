import { Component, OnInit, OnDestroy } from '@angular/core';
// import { User } from 'src/app/models/user.model';
import socket from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  users: Array<any>;
  selectedUser: any;
  constructor() {}

  ngOnInit(): void {
    socket.on('connect', () => {
      // this.users.forEach((user) => {
      //   if (user.self) {
      //     user.connected = true;
      //   }
      // });
      console.log(this.users);
    });
    // socket.on('disconnect', () => {
    //   this.users.forEach((user) => {
    //     if (user.self) {
    //       user.connected = false;
    //     }
    //   });
    // });

    const initReactiveProperties = (user: any) => {
      user.connected = true;
      user.messages = [];
      user.hasNewMessages = false;
    };

    socket.on('users', (users) => {
      users.forEach((user) => {
        user.self = user.userID === socket.id;
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

    // socket.on('user connected', (user) => {
    //   initReactiveProperties(user);
    //   this.users.push(user);
    // });

    // socket.on('user disconnected', (id) => {
    //   for (let i = 0; i < this.users.length; i++) {
    //     const user = this.users[i];
    //     if (user.userID === id) {
    //       user.connected = false;
    //       break;
    //     }
    //   }
    // });
    // socket.on('private message', ({ content, from }) => {
    //   for (let i = 0; i < this.users.length; i++) {
    //     const user = this.users[i];
    //     if (user.userID === from) {
    //       user.messages.push({
    //         content,
    //         fromSelf: false,
    //       });
    //       if (user !== this.selectedUser) {
    //         user.hasNewMessages = true;
    //       }
    //       break;
    //     }
    //   }
    // });
  }

  ngOnDestroy(): void {
    socket.off('connect');
    socket.off('disconnect');
    socket.off('users');
    socket.off('user connected');
    socket.off('user disconnected');
    socket.off('private message');
  }

  // onSelectUser(user: User): void {
  //   this.selectedUser = user;
  //   user.hasNewMessages = false;
  // }
}
