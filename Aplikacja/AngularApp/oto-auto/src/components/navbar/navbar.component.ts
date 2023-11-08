import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  
  constructor(private _router: Router) {}

  onCreateOfferClick(): void {
    this._router.navigateByUrl('/new-offer');
  } 
}
