import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost/demo-photography/src/api/goi_chup/read.php')
      .subscribe(data => {
        console.log('Get ', data);
      });
  }

  onFileSelected(event) {
      const elem = event.target.files[0];
      console.log(elem);
      const formData = new FormData();

      formData.append('file', elem);

      this.http.post('http://localhost/demo-photography/server.php', elem)
      .subscribe((data) => {
        console.log('Get some data from Backend', data);
      }, (error) => {
        console.log('Error ', error);
      });
  }
}
