import { Component } from '@angular/core';
import { DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-about',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DecimalPipe, DatePipe],
  templateUrl: './user-about.component.html',
  styleUrl: './user-about.component.scss'
})
export class UserAboutComponent {

  currentDate = new Date


  students = [
    { id: 1, name: 'Pranay', gender: 'Male' },
    { id: 2, name: 'Aaditya', gender: 'Male' },
    { id: 3, name: 'shurti', gender: 'Female' },
    { id: 4, name: 'Shubham', gender: 'Male' },
  ]

}
