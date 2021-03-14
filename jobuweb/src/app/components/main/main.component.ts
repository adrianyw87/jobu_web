import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PlanningComponent } from '../planning/planning.component';
import { ContactComponent } from '../contact/contact.component'; 
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
