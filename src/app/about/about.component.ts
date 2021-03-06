import { Component, OnInit, Inject } from '@angular/core';

import { visibility } from '../animations/app.animation';
import { flyInOut } from '../animations/app.animation';
import { expand } from '../animations/app.animation';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [visibility(), flyInOut(), expand()]
})

export class AboutComponent implements OnInit {

  leaders: Leader[];
  leaderErrMess: string;
  
  constructor(private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL) { }
    
    ngOnInit() {
    this.leaderservice.getLeaders().subscribe(leaders => this.leaders = leaders, errmess => this.leaderErrMess = <any>errmess);
  }

}
