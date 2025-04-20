import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
// import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   users = DUMMY_USERS;
   username = '';
   selectedUserId = '';
   get selectedUser() {
      return this.users.find(user => user.id === this.selectedUserId) || '';
   }
   onSelectUser(id: string){
      console.log("selected", id);
      this.selectedUserId = id;
      //this.username = this.users.find(user => user.id === id)?.name || '';
   }
}
