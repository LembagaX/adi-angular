import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent implements OnInit {

  @Input() body: string;
  @Input() icon: string;
  @Input() title: string;
  @Input() point: string;
  @Input() type: string;

  ngOnInit() {
  }

}
