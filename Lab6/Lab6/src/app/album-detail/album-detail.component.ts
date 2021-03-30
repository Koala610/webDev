import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../albums/album';
import { Location } from '@angular/common';
import { AlbumsService } from '../albums.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!:Album;
  loaded !: boolean;

  constructor(private route: ActivatedRoute,
    private location:Location,
    private albumsService:AlbumsService) {}

  ngOnInit(): void {
    /**const id : number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.album = ALBUMS.find((x) => x.id == id);**/
    //console.log(id)
    this.getPost();

  }

  goBack(){
    this.location.back();
  }


  getPost():void{
    this.route.paramMap.subscribe((params) => {
      const id = +(params.get('id') || 0);
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
      } )
    })
  }

  updateTitle():void{
    this.albumsService.updateAlbum(this.album).subscribe();
    console.log(this.album)
  }

}
