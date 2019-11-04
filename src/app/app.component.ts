import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  
  ngOnInit() {
    of(1,2,3,4,5).pipe(
      tap(item => console.log(`original value ... ${item}`)),
      map(item => item * 2),
      take(2),
    ).subscribe(
      console.log,
      err => console.log(`error occured ... ${err}`),
      () => console.log('complete')
     );

    from([20,30,40,50]).subscribe(
      item => console.log(`resulting items ...${item}`),
      err => console.log(`error occured ... ${err}`),
      () => console.log('complete')
    )
  }

}
