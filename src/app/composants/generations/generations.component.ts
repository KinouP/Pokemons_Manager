import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  private generations = ['1st Gen (Kanto)',
    '2nd Gen (Johto)',
    '3eme Gen (Hoenn)',
    '4eme Gen (Sinnoh)',
    '5eme Gen (Unys)',
    '6eme Gen (Kalos)',
    '7eme Gen (Alola)',
    '8eme Gen (Galar)'];

  constructor() {
  }

  ngOnInit() {
  }

}
