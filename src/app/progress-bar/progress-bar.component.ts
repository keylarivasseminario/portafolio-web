import { Component, Input, OnInit } from '@angular/core';
import { Ibar } from 'src/commons/intefaces/progres.interface';

@Component({
  selector: 'keyla-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() bar!: Ibar;

  constructor() { }

  ngOnInit(): void {
  }

}
