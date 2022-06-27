import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string[] = ["https://www.bing.com/?toWww=1&redig=E9DD2B5C0075415287E4E0A9E31147E2", "https://www.ask.com/"]

  constructor() { }

  ngOnInit() {
  }

}
