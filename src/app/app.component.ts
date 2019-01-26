import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-theme';
  timeoutfunc: any;
  color: '';
  headingColor: '';


  changeColor() {

    document.querySelector('body').style.setProperty('--debbaColor', this.color);
    document.querySelector('body').style.setProperty('--headerBackground', this.headingColor);

  }

}
