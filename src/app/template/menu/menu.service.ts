import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './Menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor(private _httpClient: HttpClient) {

  }

  getMenu(): Observable<Menu[]> {
    return this._httpClient.get<Menu[]>('./assets/data/MenuItems.json');
  }
}