import {Component} from '@angular/core';
import {ButtonBasicUsageComponent} from './button-demo/button-basic.component';

import {PuppyLoveAppComponent} from './puppy-love/puppy-love.component';

@Component({
    selector: 'my-app',
    template: '<puppy-love-app></puppy-love-app>',
    directives: [PuppyLoveAppComponent, ButtonBasicUsageComponent]
})
export class AppComponent { }
