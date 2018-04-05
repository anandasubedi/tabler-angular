import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="container">
        <div class="d-flex">
          <a class="navbar-brand" routerLink="/">
            <img src="assets/demo/brand/tabler.svg" class="navbar-brand-img" alt="tabler.io">
          </a>
          <div class="ml-auto d-flex order-lg-2">
            <div class="nav-item">
              <a href="" class="btn btn-sm btn-outline-primary" target="_blank">Source code</a>
            </div>
            <div class="dropdown d-none d-md-flex">
              <a class="nav-link icon" data-toggle="dropdown">
                <i class="fe fe-message-square"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow px-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium architecto asperiores dolorem, est fugiat in maxime natus
                officia velit voluptas! Ab asperiores
                delectus dolore dolores maxime nesciunt qui quia totam.
              </div>
            </div>
            <div class="dropdown d-none d-md-flex">
              <a class="nav-link icon" data-toggle="dropdown">
                <i class="fe fe-bell"></i>
                <span class="nav-unread"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow px-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                architecto asperiores dolorem, est fugiat in maxime natus officia velit
                voluptas! Ab asperiores
                delectus dolore dolores maxime nesciunt qui quia totam.
              </div>
            </div>
            <div class="dropdown">
              <a href="#" class="nav-link pr-0" data-toggle="dropdown">
                <app-avatar [image]="user.avatar"></app-avatar>
                <span class="ml-2 d-none d-lg-block">
							<span class="text-default">{{ user.name }} {{ user.surname }}</span>
							<small class="text-muted d-block mt-1">Administrator</small>
						</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a class="dropdown-item" href="#">
                  <span>Profile</span>
                </a>
                <a class="dropdown-item" href="#">
                  <span>Settings</span>
                </a>
                <a class="dropdown-item" href="#">
                  <span class="float-right"><span class="badge badge-primary">6</span></span>
                  <span>Inbox</span>
                </a>
                <a class="dropdown-item" href="#">
                  <span>Message</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Need help? </a>
                <a class="dropdown-item" href="#">Sign out</a>
              </div>
            </div>
          </div>
          <div class="collapse navbar-collapse order-lg-1" id="navbarToggler">
            <ul class="navbar-nav mt-2 mt-lg-0 mx-0 mx-lg-2">
              <li class="nav-item"><a href="#" class="nav-link">Dashboard</a></li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Projects</a>
                <div class="dropdown-menu mt-2 text-color" role="menu">
                  <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-tag"></i> Action </a>
                  <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-pencil"></i> Another action </a>
                  <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-reply"></i> Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-ellipsis-h"></i> Separated link</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header-nav d-none d-lg-flex">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">

            <app-menu></app-menu>

          </div>

          <div class="col-3 ml-auto">
            <form class="input-icon">
              <input type="search" class="form-control header-search" placeholder="Search&hellip;" tabindex="1">
              <div class="input-icon-addon">
                <i class="fe fe-search"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  `,
  styles: []
})
export class HeaderComponent {
  public user = {
    name: 'Jane',
    surname: 'Pearson',
    avatar: 'assets/demo/faces/female/25.jpg',
  }
}