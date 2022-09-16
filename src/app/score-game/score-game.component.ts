import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-game',
  templateUrl: './score-game.component.html',
  styleUrls: ['./score-game.component.css']
})
export class ScoreGameComponent implements OnInit {
  headers = ["Frame", "Roll 1", "Roll 2", "Roll 3"];

  frames: any= [
    {
      "Frame" : "1",
      "Roll 1" : "4",
      "Roll 2" : "3",
      "Roll 3" : ""
    },
    {
      "Frame" : "2",
      "Roll 1" : "7",
      "Roll 2" : "3",
      "Roll 3" : ""
    },
    {
      "Frame" : "3",
      "Roll 1" : "5",
      "Roll 2" : "2",
      "Roll 3" : ""
    },
    {
      "Frame" : "4",
      "Roll 1" : "8",
      "Roll 2" : "1",
      "Roll 3" : ""
    },
    {
      "Frame" : "5",
      "Roll 1" : "4",
      "Roll 2" : "6",
      "Roll 3" : ""
    },
    {
      "Frame" : "6",
      "Roll 1" : "2",
      "Roll 2" : "4",
      "Roll 3" : ""
    },
    {
      "Frame" : "7",
      "Roll 1" : "8",
      "Roll 2" : "0",
      "Roll 3" : ""
    },
    {
      "Frame" : "8",
      "Roll 1" : "8",
      "Roll 2" : "0",
      "Roll 3" : ""
    },
    {
      "Frame" : "9",
      "Roll 1" : "8",
      "Roll 2" : "2",
      "Roll 3" : ""
    },
    {
      "Frame" : "10",
      "Roll 1" : "10",
      "Roll 2" : "1",
      "Roll 3" : "7"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
