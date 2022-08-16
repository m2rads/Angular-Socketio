import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css'],
})
export class MessagePanelComponent implements OnInit {
  @Input() user: any;
  @Output() input = new EventEmitter<any>();

  messageForm = this.formBuilder.group({
    input: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let content = this.messageForm.value.input;
    this.messageForm.reset();
    this.input.emit(content);
    // console.log(content);
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
