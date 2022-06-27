import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Pics!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.kym-cdn.com/photos/images/newsfeed/001/207/210/b22.jpg';
  image3 = 'https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2019/09/17/5d81080f15c544000972f7d9_maxresdefault.jpg.rend.hgtvcom.966.966.suffix/1573230342507.jpeg';

  constructor() { }

  ngOnInit() {
  }

}