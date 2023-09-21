import { Component, OnInit } from '@angular/core';
import { Input  } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
	@Input() gameCover: string = "";
	@Input() gameTitle: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
