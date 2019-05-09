import { Injectable } from '@angular/core';
import { OnlineUser } from '../models/online-user';

@Injectable({
  providedIn: 'root'
})
export class OnlineUserService {

  onlineUsers:OnlineUser[] = [];

  constructor() { }

  getOnlineUser():OnlineUser[] {
    return this.onlineUsers;
  }

  addOnlineUser(OnlineUser:OnlineUser) {
    this.onlineUsers.push(OnlineUser);
  }
}
