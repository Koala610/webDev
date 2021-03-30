import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from './album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded!:boolean;
  newTitle!:string;
  newUId!:number;
  constructor(private albumsService : AlbumsService) {
    this.newTitle = '';
    this.newUId = 0;
  }

  ngOnInit(): void {
    //this.albums = ALBUMS;
    this.getAlbums();
  }

  getAlbums():void{
    this.loaded = false;
    this.albumsService.getAlbums().subscribe(((albums)=>{
      this.albums = albums;
      this.loaded = true;

    }));
  }

  deleteAlbum(id:number):void{
    this.albums = this.albums.filter( (x) => x.id !== id )
    this.albumsService.deleteAlbum(id).subscribe();
  }

  addAlbum():void{
    let album : Album = {
      title : this.newTitle,
      id : this.albums[this.albums.length-1].id+1,
      userId:this.newUId
    }
    this.albumsService.addAlbum(album);
    this.albums.push(album)
    this.albums.sort( (a,b)=>a.userId- b.userId  )
    this.newTitle = ''
    this.newUId = 0;
  }

}
