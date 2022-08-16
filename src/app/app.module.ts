import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickUsernameComponent } from './components/pick-username/pick-username.component';
import { environment } from 'src/environments/environment';
import { ChatComponent } from './components/chat/chat.component';
import { UserComponent } from './components/user/user.component';
import { StatusIconComponent } from './components/status-icon/status-icon.component';
import { MessagePanelComponent } from './components/message-panel/message-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PickUsernameComponent,
    ChatComponent,
    UserComponent,
    StatusIconComponent,
    MessagePanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
