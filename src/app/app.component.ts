//our root app component
import {trigger, style, animate, state, transition, Component} from '@angular/core'
import {Http} from "@angular/http";

@Component({
  selector: 'app-component',
  templateUrl: '/app/app.component.html',
  animations: [
    trigger('state', [
      state('void', style({ display: 'none' })),
      state('active', style({ transform: 'translate3d(0, 0, 0)' })),
      state('hidden', style({ transform: 'translate3d(100%, 0, 0)' })),
      transition('active => hidden', [animate('350ms ease-out')]),
      transition('hidden => active', [
        style({ transform: 'translate3d(-100%, 0, 0)' }),
        animate('350ms ease-out')
      ]),
    ]),
  ]
})
export class AppComponent {
  public selectedEmail: any;
  public emails: EmailData[] = [];
  public defaultAuthor = 'matias@email.com';
  public showForm = false;

  constructor(public http: Http) {
    http.get('/app/app.data.json').subscribe((response: any) => {
      this.emails = response.json().map(value => {
        return new EmailData(value['author'], value['title'], value['content']);
      });
      this.selectedEmail = this.emails[0];
    });
  }

  onNewEmail(data: EmailData) {
    this.emails.push(data);
    this.showForm = false;
    this.selectedEmail = data;
  }
}

export class EmailData {
  constructor(public author: string, public title: string, public content: string) {}
}
