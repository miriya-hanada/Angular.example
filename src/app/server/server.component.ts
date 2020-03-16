import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';

  // ngStyleを使用した時
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  // ngStyleを使用した時
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
