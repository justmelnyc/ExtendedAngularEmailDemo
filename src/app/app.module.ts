import {AppComponent} from './app.component';
import {EmailFormComponent} from './email-form.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, EmailFormComponent],
    imports: [BrowserModule, HttpModule, FormsModule]
})
export class AppModule { }
