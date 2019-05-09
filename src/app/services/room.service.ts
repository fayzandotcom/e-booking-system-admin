import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient:HttpClient) {
  }

  public getRooms():Observable<Room[]> {
    return this.httpClient.get<Room[]>('http://localhost:3000/rooms');
  }

  public getRoomById(roomId:number):Observable<Room> {
    return this.httpClient.get<Room>('http://localhost:3000/rooms/' + roomId);
  }

  public addRoom(room:Room):Observable<Room> {
    return this.httpClient.post<Room>('http://localhost:3000/rooms', room);
  }

  public updateRoom(room:Room):Observable<Room> {
    return this.httpClient.put<Room>('http://localhost:3000/rooms/' + room.id, room);
  }

  public deleteRoomById(roomId:number):Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/rooms/' + roomId);
  }
}
