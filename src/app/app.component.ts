import { LaunchService } from './launch.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spaceX-front';

  constructor(private launchService: LaunchService) {
    this.launchService.getAllLaunches().subscribe(( launches ) => {
       console.log(launches);
    });
  }
}
