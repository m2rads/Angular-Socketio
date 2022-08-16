import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  socket: Socket;
  URL: any = 'http://localhost:8081';

  constructor() {
    this.socket = io(this.URL, { autoConnect: false });
    this.socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  }

  initConnetion(username: string): void {
    console.log(username);
    this.socket.auth = { username };
    this.socket.connect();
  }

  destroyConnection(event: string): void {
    this.socket.off(event);
  }

  socketId(): any {
    return this.socket.id;
  }

  listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }
}
