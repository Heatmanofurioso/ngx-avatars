import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

/**
 * Service used to fetch Async information about the user
 */
@Injectable()
export class UserService {
  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  fetchInformation(): Observable<User> {
    return this.http.get('assets/data/data.json').pipe(
      map(response => response as User)
    );
  }

  getUserFacebook(): Observable<string> {
    return this.http.get<{ facebookId: string}>('assets/data/data.json').pipe(
      map(response => response.facebookId )
    );
  }

  getPictureAsSafeUrl(): Observable<SafeUrl | null> {
    return this.http.get('assets/img/avatar.jpg', {responseType: 'blob'}).pipe(
        map(URL.createObjectURL),
        map(this.sanitizer.bypassSecurityTrustUrl)
      );
  }
}
