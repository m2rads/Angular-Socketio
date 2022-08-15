import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-pick-username',
  templateUrl: './pick-username.component.html',
  styleUrls: ['./pick-username.component.css'],
})
export class PickUsernameComponent implements OnInit {
  singupForm = this.formBuilder.group({
    name: '',
  });

  constructor(private formBuilder: FormBuilder, private socket: Socket) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // process picking username here
    console.log(
      'You have successfully picked a name',
      this.singupForm.value.name
    );
    // this.socket.emit('input', this.singupForm.value.name);
    this.singupForm.reset();
  }
}
