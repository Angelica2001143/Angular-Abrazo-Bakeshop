import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.css']
})
export class BreadsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
