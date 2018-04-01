import { Injectable } from '@angular/core';
import { NavItem } from '../../models/navItem.model';

@Injectable()
export class NavService {

  private _navList:NavItem[] = [] 
  constructor() { 
    this._navList = [
      new NavItem("בית", "home", "fa-home"),
      new NavItem("יומן", "calendar", "fa-calendar"),
      new NavItem("גלריה", "gallery", "fa-image"),
      new NavItem("מידע", "info", "fa-info")     
    ]
  }

  public get navList(){
    return this._navList
  }

}
