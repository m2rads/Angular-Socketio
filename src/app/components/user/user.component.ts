import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Input() selected: Boolean;
  @Output() select = new EventEmitter<any>();

  status: string;

  constructor() {}

  ngOnInit(): void {
    this.ConnectionStatus();
  }

  onClick(): void {
    this.select.emit('select');
  }

  ConnectionStatus(): void {
    this.user.connected ? (this.status = 'online') : (this.status = 'offline');
  }
}
