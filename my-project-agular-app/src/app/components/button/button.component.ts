import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'my-button',
    templateUrl: 'button.component.html',
    styleUrls: [ 'button.component.css' ]
})

export class MyButton {
    @Input() btClass: string = '';
    @Input() text: string = '';
    @Input() callback: string = ''
    @Output() eventclick: EventEmitter<any> = new EventEmitter<any>();

    click(){
        this.eventclick.emit();
    }
}