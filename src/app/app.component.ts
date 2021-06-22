import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputData: any;
  keyword: string = "";
 
  ngOnInit() {
    this.appService.getData().subscribe(data => {  
     this.inputData=data; 
    });
  }
  constructor(private appService: AppService){}
}
