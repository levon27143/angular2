import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

// webpack html imports
@Component({
  selector: 'buttons-demo',
  template: 'pages/home.html',
  directives: [BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AppComponent {
  public singleModel:string = '1';
  public radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};
}