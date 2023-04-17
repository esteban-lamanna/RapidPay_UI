import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { Observable } from 'rxjs';
import { Menu } from '../menu/Menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  _menuItems: Menu[];

  constructor(private _menuService: MenuService) {
    this._menuItems = [];
  }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this._menuService.getMenu().subscribe(x => {
      this._menuItems = x;
    });
  }
}