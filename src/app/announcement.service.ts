import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Announcement } from './response/announcement';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  protected base: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.base = 'http://adi-server.herokuapp.com/';
  }

  public index() {
    const suffix = 'announcements.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.get<Announcement[]>(this.base + suffix, header);
  }

  public create(request: Announcement) {
    const suffix = 'announcements.json';
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.post<Announcement>(this.base + suffix, request, header);
  }

  public update(announcement: Announcement, request: Announcement) {
    const suffix = `announcements/${announcement.id}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.patch<Announcement>(this.base + suffix, request, header);
  }

  public destroy(request: Announcement) {
    const suffix = `announcements/${request.id}.json`;
    const header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.auth.currentUser().token
      })
    };
    return this.http.delete<Announcement>(this.base + suffix, header);
  }
}
