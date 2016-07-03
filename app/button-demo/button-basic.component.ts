import {Component} from '@angular/core';
import {MdButton} from '@angular2-material/button';
@Component({
  moduleId: module.id,
  selector: 'button-basic',
  templateUrl: 'button-basic.component.html',
  styleUrls: ['button-basic.component.scss'],
  directives: [MdButton]
})
export class ButtonBasicUsageComponent {
  googleUrl: string = 'https://www.google.com';
  title1: string = 'Button';
  title4: string = 'Warn';
  isDisabled: boolean = true;
}
