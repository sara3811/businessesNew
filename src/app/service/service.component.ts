import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {

  myControl = new FormControl();
  options;
  filteredOptions: Observable<string[]>;
  isAdvanceEnabled;
  apiUri = '/categories';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadCategories();

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    //console.log(this.options);
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  loadCategories() {
    this.http.get(environment.apiUrl + this.apiUri).subscribe((categories: any[]) => {
      this.options = categories;
      for (let i = 0; i < this.options.length; i++) {
        this.options[i] = this.options[i].CategoryName
      }
      //console.log("categoriesOptions", this.options);

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      // console.log("filteredOptions", this.filteredOptions);
    },
      (error => { debugger; }))

  }
}
