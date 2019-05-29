import { Component, OnInit, HostListener } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable} from 'rxjs';
import { map, takeWhile, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  constructor(private observableMedia: MediaObserver) { }

  public cols: Observable<number>;

  ngOnInit() {
    const grid = new Map([
      ["xs", 1],
      ["sm", 1],
      ["md", 1],
      ["lg", 3],
      ["xl", 3]
    ]);
    
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });

    this.cols = this.observableMedia.asObservable()
      .pipe(map(change => {
        console.log(change);
        console.log(grid.get(change.mqAlias));
        return grid.get(change.mqAlias);
      }), startWith(start));  
  }

  goTo(url): void {
    window.location.href=url;
  }
}
