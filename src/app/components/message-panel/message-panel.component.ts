import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css'],
})
export class MessagePanelComponent implements OnInit {
  @Input() user: User;
  input: String = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.input = '';
  }

  displaySender(message: any, index: any): any {
    return (
      index === 0 ||
      this.user.messages[index - 1].fromSelf !==
        this.user.messages[index].fromSelf
    );
  }

  isValid(): Boolean {
    return this.input.length > 0;
  }
}
