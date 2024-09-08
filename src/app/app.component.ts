import { Component } from '@angular/core';
import {ChildrenOutletContexts, RouterLink, RouterOutlet} from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {slideInAnimation} from "./animations/route-transition";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
