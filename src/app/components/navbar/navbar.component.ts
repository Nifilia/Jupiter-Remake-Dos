import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar">
      <div class="navbar-group">
        <h3>{{ title }}</h3>
        <a>TV Shows</a>
        <a>Films</a>
        <a>Radio</a>
        <a>Audio Books</a>
        <a>Other Media</a>
      </div>
      <div class="navbar-group">
        <a>Login</a>
        <a class="subscribe">Subscribe</a>
      </div>
    </nav>
  `,
  styles: `
    .navbar {
      color: white;

      width: 100%;
      height: 64px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &-group {

        padding: 0 2em;
        display: flex;
        gap: 4vh;

        align-items: center;

        font-size: 1.1em;
        font-weight: bold;

        a {
          padding: 8px;

          &:hover {
            cursor: pointer;
            border-radius: 2px;
            border-bottom: 2px solid white;
          }
        }

        .subscribe {
          background-color: #e74c3c;
          padding: 8px 20px;
          border-radius: 16px;
        }
      }
    }
  `,
})
export class NavbarComponent {
  title = 'JUPITER';
}
