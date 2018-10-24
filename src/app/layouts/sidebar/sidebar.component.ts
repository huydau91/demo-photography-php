import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sideBarTus: Boolean =  false;
  @Output() changeTus = new EventEmitter();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  closeSideBar(event) {
    this.sideBarTus = !this.sideBarTus;
    this.changeTus.emit();
    this.renderer.removeClass(document.body, 'sidebar-shadow');
    this.renderer.removeStyle(document.body, 'padding-right');
  }
}
