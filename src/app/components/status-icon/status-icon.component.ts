import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.css'],
})
export class StatusIconComponent implements OnInit {
  connected: Boolean;
  constructor() {
    this.connected = false;
  }

  ngOnInit(): void {}
}
