import { Component, OnInit } from '@angular/core';
import { Frames, frames, frames2 } from '../../bowlingGame';

@Component({
  selector: 'app-score-game',
  templateUrl: './score-game.component.html',
  styleUrls: ['./score-game.component.css'],
})
export class ScoreGameComponent implements OnInit {
  headers = ['Frame', 'Roll1', 'Roll2', 'Roll3'];
  score = 0;

  columns: any = [
    {
      Frame: '1',
      Roll1: '4',
      Roll2: '3',
      Roll3: '',
    },
    {
      Frame: '2',
      Roll1: '7',
      Roll2: '3',
      Roll3: '',
    },
    {
      Frame: '3',
      Roll1: '5',
      Roll2: '2',
      Roll3: '',
    },
    {
      Frame: '4',
      Roll1: '8',
      Roll2: '1',
      Roll3: '',
    },
    {
      Frame: '5',
      Roll1: '4',
      Roll2: '6',
      Roll3: '',
    },
    {
      Frame: '6',
      Roll1: '2',
      Roll2: '4',
      Roll3: '',
    },
    {
      Frame: '7',
      Roll1: '8',
      Roll2: '0',
      Roll3: '',
    },
    {
      Frame: '8',
      Roll1: '8',
      Roll2: '0',
      Roll3: '',
    },
    {
      Frame: '9',
      Roll1: '8',
      Roll2: '2',
      Roll3: '',
    },
    {
      Frame: '10',
      Roll1: '10',
      Roll2: '1',
      Roll3: '7',
    },
  ];

  constructor() {}
  ngOnInit() {
    if (frames != null) {
      frames.forEach((currentFrame) => {
        var nextFrame = frames[currentFrame.Frame];
        var followingNextFrame = frames[currentFrame.Frame + 1];
        this.score = this.addCurrentFrameRolls(currentFrame);

        if (nextFrame != null && currentFrame.Roll1 == 10) {
          this.score = this.addFollowingFrameRolls(nextFrame);

          this.score =
            followingNextFrame != null && nextFrame.Roll1 == 10
              ? (this.score = this.score + followingNextFrame.Roll1)
              : (this.score = this.score + currentFrame.Roll2);
        }

        if (
          nextFrame != null &&
          currentFrame.Roll1 < 10 &&
          currentFrame.Roll1 + currentFrame.Roll2 == 10
        ) {
          this.score = this.addFollowingFrameFirstRoll(nextFrame);
        }
      });
    }
  }

  private addCurrentFrameRolls(currentFrame: Frames) {
    var score = this.score + currentFrame.Roll1 + currentFrame.Roll2;

    /** this condition ensures that either a strike or spare is bowled 
    in the 10th frame before accounting for the third roll **/
    if (
      currentFrame.Frame == 10 &&
      (currentFrame.Roll1 == 10 ||
        currentFrame.Roll1 + currentFrame.Roll2 == 10)
    ) {
      score = score + currentFrame.Roll3;
    }

    return score;
  }

  private addFollowingFrameRolls(nextFrame: Frames) {
    var score = this.score;

    if (nextFrame != null) {
      score = score + nextFrame.Roll1 + nextFrame.Roll2;
    }

    return score;
  }

  private addFollowingFrameFirstRoll(nextFrame: Frames) {
    var score = this.score;

    if (nextFrame != null) {
      score = score + nextFrame.Roll1;
    }

    return score;
  }
}
