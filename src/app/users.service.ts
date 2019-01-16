import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any[] = [
    {
      'UserId': 1111,
      'IsActive': true,
      'Name': 'Cyberbit Name',
      'Icon': '',
      'Roles': [
        {
          'ID': 123,
          'Name': 'Manager'
        }
      ]
    }
  ];

  constructor(private http: HttpClient) {

  }


  getAllUsers(): Promise<any[]> {
    return Promise.resolve(this.users);
  }
}
