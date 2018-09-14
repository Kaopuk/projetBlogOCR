import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 0
    );
  });

  posts = [
    {
      title: 'Premier Post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.',
      createdAt : this.lastUpdate,
      loveIts : '-1'
    },
    {
      title: 'Second Post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.',
      createdAt : this.lastUpdate,
      loveIts : '1'
    },
    {
      title: 'Troisième Post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.',
      createdAt : this.lastUpdate,
      loveIts : 0
    }
  ];



}
