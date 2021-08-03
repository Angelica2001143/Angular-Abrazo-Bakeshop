import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
