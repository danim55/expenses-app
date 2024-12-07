import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-header',
    imports: [CommonModule, MatIconModule, MatToolbarModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Output() sidebarOpen = new EventEmitter<boolean>(true);
    private isOpen: boolean = true;

    public onToggleSidebar(): void {
        this.isOpen = !this.isOpen;        
        this.sidebarOpen.emit(this.isOpen);
    }

}
