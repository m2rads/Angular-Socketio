import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.css'],
})
export class StatusIconComponent implements OnInit {
  @Input() connected: Boolean;

  constructor() {}

  ngOnInit(): void {}
}
