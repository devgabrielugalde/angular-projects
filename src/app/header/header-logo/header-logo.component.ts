import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  template: '<img class="responsive-img" src="{{logo_src}}">',
  styles: ['img {vertical-align: middle}']
})
export class HeaderLogoComponent implements OnInit{

  @Input() logo_src: string;

  constructor() {}

  ngOnInit(){}

}