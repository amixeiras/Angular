import { Component } from '@angular/core'
 
@Component({
    selector: 'hello-app',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})

export class HelloComponent {
    name: string = 'Hello App'
    text: string = 'Start'
    btClass: string = 'btn btn-primary'

    helloWord(value: string) {
        alert(value);
    }
}