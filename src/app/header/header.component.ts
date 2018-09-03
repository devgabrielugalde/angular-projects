import { Component, OnInit, Input } from '@angular/core';
import { HeaderLogoComponent } from './header-logo/header-logo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  entryComponents: [HeaderLogoComponent],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo_src: string = "https://www.bemol.com.br/wcsstore/Bemol/images/chatbot/logo_bemol.png";

  constructor() { }

  ngOnInit() {}

}