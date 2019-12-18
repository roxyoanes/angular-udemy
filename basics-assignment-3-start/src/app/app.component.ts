import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = false;
  btnLogs = [];

  onToggle() {
    this.toggle = !this.toggle;
    this.btnLogs.push(this.btnLogs.length + 1);
  }
  
}
