import { Component } from '@angular/core';
import { CustomPipePipe } from '../../shared/Pipe/customPipe/custom-pipe.pipe';
import { ReversePipePipe } from '../../shared/Pipe/reversePipe/reverse-pipe.pipe';

@Component({
  selector: 'app-user-home-page',
  standalone: true,
  imports: [CustomPipePipe, ReversePipePipe],
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.scss'
})
export class UserHomePageComponent {

}
