import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventProxyService {
  private subject = new Subject<any>();

  public sendToggleDateEvent(): void {
    this.subject.next();
  }

  public getToggleDateEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
