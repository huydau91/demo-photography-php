import { Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideBarTus: Boolean = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
  }

  openSideBar() {
    this.sideBarTus = !this.sideBarTus;
    this.renderer.setStyle(document.body, 'padding-right', '17px');
    this.renderer.addClass(document.body, 'sidebar-shadow');
  }

  getChange(event: Boolean) {
    this.sideBarTus = event;
  }
}
