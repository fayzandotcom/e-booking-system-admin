import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms:Room[];
  room:Room;
  state:string;
  bookingDate:string;
  bookingTime:string = "00:00";

  constructor(private roomService:RoomService) {
    this.state = 'list';
  }

  ngOnInit() {
    this.doListRoom();
  }

  doNewRoom() {
    this.room = new Room(0, "", 0, 0, "");
    this.state = 'new';
  }

  doListRoom() {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
      this.state = 'list';
    });
  }

  doSaveRoom() {
    if (this.room.id === 0) {
      this.roomService.addRoom(this.room).subscribe(data => {
        this.doListRoom();
      });
    } else {
      this.roomService.updateRoom(this.room).subscribe(data => {
        this.doListRoom();
      });
    }
  }

  doEdit(id:number) {
    this.roomService.getRoomById(id).subscribe(data => {
      this.room = data;
      this.state = 'new';
    });
  }

  doDelete(id:number) {
    this.roomService.deleteRoomById(id).subscribe(data => {
      this.doListRoom();
    })
  }
}
