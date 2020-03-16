import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]'
  // selector: 'app-servers',
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // プロパティバインディング
  allowNewServer = false;
  // イベントバインディング
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  // *ngIfを使用した時
  serverCreated = false;
  // *ngForを使用した時
  servers = ['Testserver', 'Testserver2'];

  constructor() {
  // プロパティバインディング
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  // イベントバインディング
  onCreateServer() {
    this.serverCreated = true; // *ngIfを使用した時
    this.servers.push(this.serverName); // *ngForを使用した時
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  //  イベントバインディング
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
