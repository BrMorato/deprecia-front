import {Component, Input, OnInit} from '@angular/core';
import {AlertType} from "./alert";

@Component({
selector: 'app-alert',
templateUrl: './alert.component.html',
styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

@Input() alerta: string = "";
@Input() ehVisivel: boolean = true;
@Input() alertType: AlertType;

constructor() {

}

ngOnInit() {
}

}
