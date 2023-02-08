import { Component } from "@angular/core";
//decorators 
@Component({
  selector:'pm-root',
  template :`
  <div>
  <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
        </ul>
    </nav>
    <div class="container">
      <router-outlet>
        
      </router-outlet>
    </div>


 
  </div>`
  })

//class 

export class AppComponent{
  pageTitle: string='Acme Product Management';
  currentdate: number = Date.now();
}
