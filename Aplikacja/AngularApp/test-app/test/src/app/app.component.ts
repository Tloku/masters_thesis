import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public numbers: number[] = [];
  ngOnInit(): void {
      for (let i = 0; i < 100_000; i++) {
        this.numbers.push(i);
      }
  }
}
