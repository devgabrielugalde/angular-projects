import { Component} from '@angular/core';

@Component({
  selector: 'app-header-email-button',
  template: '<i class="material-icons left" (click)="abrir_email()">email</i>',
})
export class HeaderEmailButtonComponent {
	abrir_email() {
		alert("Email pop up");
	}
}