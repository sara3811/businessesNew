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
        this.userName = name;
        this
            .httpClient
            .post<any>(`${environment.apiUrl}/credentials`, user)
            .subscribe((user: any) => {
                localStorage.setItem(this.key, JSON.stringify(user));
                this.router.navigate(['/dashboard']);

            },
                (error: any) => console.log('err', error))

    }

    logout() {
        localStorage.removeItem(this.key);
        this.userName = '';
        this.flag = false;
        this.router.navigate(['/managerLogin']);
        
    }

    //signup(){}

    getCurrentUser() {

        return localStorage.getItem(this.key);
    }
}