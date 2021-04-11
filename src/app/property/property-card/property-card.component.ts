import { Component, Input, OnInit } from '@angular/core';
import { IpropertyBase } from 'src/app/model/ipropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  constructor() {}
  @Input() property: IpropertyBase;
  @Input() hideIcons: boolean;

  ngOnInit(): void {}
}
