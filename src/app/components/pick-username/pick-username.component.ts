import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pick-username',
  templateUrl: './pick-username.component.html',
  styleUrls: ['./pick-username.component.css'],
})
export class PickUsernameComponent implements OnInit {
  @Output() addUsername = new EventEmitter<any>();

  singupForm = this.formBuilder.group({
    name: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const username = this.singupForm.value.name;
    this.singupForm.reset();
    this.addUsername.emit(username);
  }
}
