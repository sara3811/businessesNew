import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })

export class AuthService {

    private key = 'currentUser';
    public flag = false;
    public kind = 0;
    public userName = '';
    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) { }

    login(name, password) {
        this.flag = true;
        let user = { 'userName': name, 'password': password };
        this.kind = 1;
        //פונקציה שבודקת בשרת האם הסיסמה של המנהל

        this
            .httpClient
            .post<any>(`${environment.apiUrl}/credentials`, user)
            .subscribe((user: any) => {
                localStorage.setItem('name', name);
                // localStorage.setItem(this.key, JSON.stringify(user));
                localStorage.setItem('kind', '1');
                this.router.navigate(['/']);

            },
                (error: any) => console.log('err', error))

    }

    logout() {
        localStorage.removeItem('kind');
        this.userName = '';
        this.flag = false;
        this.router.navigate(['enterance']);

    }

    //signup(){}
    getUserName() {
        return localStorage.getItem('name');
    }
    getCurrentUser() {

        return localStorage.getItem('kind');
    }
}