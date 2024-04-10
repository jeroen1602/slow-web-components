import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BadgeComponent {


  @Input()
  public color: string = '#46ab0b';
}
