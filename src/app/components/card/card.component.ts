import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() gameCover: string = ""
	@Input() gameLabel: string = ""
	@Input() gameType: string = "Digital PS4"
	@Input() gamePrice: string = "R$ 290,00"

  constructor() { }

  ngOnInit(): void {
  }

}
