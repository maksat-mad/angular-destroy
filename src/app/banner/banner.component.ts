import { Component, OnInit } from '@angular/core';
import { destroyNotifier } from '../utils/destroy';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  counter1$!: Subscription;
  counter2$!: Subscription;
  counter3$!: Subscription;

  destroy$ = destroyNotifier();

  ngOnInit() {
    this.counter1$ = interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => {
        console.log('Source 1: ', value);
      }
    });

    this.counter2$ = interval(1100).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => {
        console.log('Source 2: ', value);
      }
    });

    this.counter3$ = interval(1200).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => {
        console.log('Source 3: ', value);
      }
    });
  }
}
