import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from './photo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos !: Photo[];

  constructor(private route: ActivatedRoute,
    private location:Location,
    private albumsService:AlbumsService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos():void {
    this.route.paramMap.subscribe((params) => {
      console.log(params)
      const id = +(params.get('id') || 0);
      this.albumsService.getPhotos(id).subscribe(((photos)=>{
        this.photos = photos;

      }));

    })

  }

  goBack(){
    this.location.back();
  }

}
