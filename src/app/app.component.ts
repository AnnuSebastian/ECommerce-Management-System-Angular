import { Component } from '@angular/core';
import { AuthServiceService } from './Auth/auth-service.service';


//The @Component decorator identifies the class immediately below it as a component class, 
//and specifies its metadata.
//The metadata for a component tells Angular where to get the major building blocks that it needs to create and present the component and its view.
@Component({
  selector: 'app-root',//called in index.html inside the <body> to load the main component. This selector binds the templateUrl & styleUrl
  templateUrl: './app.component.html',//defines view for the app component
  styleUrls: ['./app.component.css']//style for the component
})
export class AppComponent {
  title = 'EMSApp';

  constructor(private authSvc:AuthServiceService){ 
    authSvc.logout();//this method is called here to clear the local storage if a user tries to login again but he didn't
                     //log out of the previous login. Otherwise the nav bar shows all the fields even before loggin
  }

  isLoggedIn():boolean{
    return this.authSvc.isLoggedIn();
  }

  logout(){
    this.authSvc.logout();
  }
}
