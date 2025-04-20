import { Component, Input, input, computed, Output, output, EventEmitter } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string; 
// }

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input() name!: string;
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  //select = output<string> ();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => `assets/users/${this.avatar()}`);
  get imagePath(){
    return `assets/users/${this.user.avatar}`;
  }
  onSelectUser1() {
    this.select.emit(this.user.id)
  }
}
