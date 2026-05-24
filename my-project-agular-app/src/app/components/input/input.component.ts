import { Component } from '@angular/core'


@Component({
    selector: 'my-input',
    templateUrl: 'input.component.html',
    styleUrls: [ 'input.component.css']
})

export class InputComponent{
    placeholder: string = '';
    placepass: string = '';
}