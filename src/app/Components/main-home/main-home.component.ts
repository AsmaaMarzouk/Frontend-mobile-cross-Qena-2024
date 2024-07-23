import { Component } from '@angular/core';
import { TrackInfo } from '../../Models/track-info';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {
// firstTitle:string="title one";
// sayHello(){
//   return `Hello ${this.firstTitle}`;
// }

// use class model
track:TrackInfo=new TrackInfo("Frontend",44,["html","css","JS"]);
track2:TrackInfo=new TrackInfo("MEARN",44,["Node js","css","JS"]);

}
