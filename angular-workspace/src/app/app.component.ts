import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, HeaderComponent, MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expenses-app';

  public isSidebarOpen = true;

  public handleSideBarToggle(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }

}
