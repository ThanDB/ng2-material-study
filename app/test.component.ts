import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    moduleId: module.id,
    selector: 'ng2-button>',
    template: '<button md-button>Greeting</button>',
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class TestComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}