import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-namecard',
  templateUrl: './namecard.component.html',
  styleUrls: ['./namecard.component.css']
})
export class NamecardComponent implements OnInit {

  constructor() { }

  @Input()
  cardName: string = '';
  @Input()
  email: string = '';
  @Input()
  phone: string = '';

  ngOnInit(): void {
  }

}
