import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IpropertyBase } from 'src/app/model/ipropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  propertyType: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishType: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  RTM: Array<string> = ['Yes', 'No'];
  gatedComunity: Array<string> = ['Yes', 'No'];
  mainEntrance: Array<string> = ['East', 'West', 'North', 'South'];
  propertyView: IpropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    PType: null,
    RTM: null,
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
