import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() selected: Boolean;
  status: String;
  constructor() {}

  ngOnInit(): void {
    this.ConnectionStatus();
  }

  onClick(): void {}

  ConnectionStatus(): void {
    this.user.connected ? (this.status = 'online') : (this.status = 'offline');
  }
}
