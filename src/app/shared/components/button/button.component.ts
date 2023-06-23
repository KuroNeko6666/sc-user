import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() className?: string = "bg-blue-500 hover:bg-blue-600 text-white font-bold";
  @Input() isLoading?: boolean = false;
  @Input() type: "button" | "submit" | "reset" | "" = "button"
  @Output() click = new EventEmitter()

  onCLick(): void {
    this.click.emit()
  }

}
