import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  private roomId:number;
  room:Room;

  constructor(private route:ActivatedRoute, private roomService:RoomService) {
    this.route.params.subscribe(data => {
      this.roomId = data.id;
    })
  }

  ngOnInit() {
    this.roomService.getRoomById(this.roomId).subscribe(data => {
      this.room = data;
    });
  }

}
