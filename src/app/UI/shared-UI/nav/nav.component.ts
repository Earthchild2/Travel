import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavComponent, RouterLink,FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  authService = inject(AuthService)

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }
  Logout(){
    this.authService.logout()

  }
}
