import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
// import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
// import { StarComponent } from "./shared/Star.component";
// import { CustomDatePipe } from './shared/custom.datepipe';
import{HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import{WelcomeComponent}from './home/welcome.component';
import { ProductModule } from './products/product.module';



@NgModule({
    declarations: [
        AppComponent,
        
        //ConvertToSpacesPipe,
        //CustomDatePipe,
        WelcomeComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
       
        {path:'welcome',component:WelcomeComponent},
        {path:'',redirectTo:'welcome',pathMatch:'full'},
        {path:'**',redirectTo:'welcome',pathMatch:'full'},
        ]),
        ProductModule
    ]
    
        
})
export class AppModule { }
