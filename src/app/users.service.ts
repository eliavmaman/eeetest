import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/user_object.json').subscribe((res: any[]) => {
      this.users = [res];
    });
  }


  getAllUsers(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      resolve(this.users);
    });
  }
}
