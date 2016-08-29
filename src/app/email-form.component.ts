import {trigger, state, transition, style, animate, Component, Input, Output, EventEmitter} from '@angular/core';
import {EmailData} from './app.component';

@Component({
  host: {
    '[@onLoad]': 'true'
  },
  selector: 'email-form',
  animations: [
    trigger('onLoad', [
      state('void', style({ height: '0' })),
      state('*', style({ height: '*' })),
      transition('* => *', animate(500))
    ])
  ],
  template: `
    <form class="styled-form" (ngSubmit)="submit()">
      <div class="form-field">
        <label>Title: </label>
        <input type="text" [(ngModel)]="data.title" required name="title" />
      </div>
      <div class="form-field">
        <label>Author: </label>
        <input type="email" [(ngModel)]="data.author" required name="author" />
      </div>
      <div class="form-field">
        <label>Content: </label>
        <textarea [(ngModel)]="data.content" name="content"></textarea>
      </div>
      <input type="submit" class="form-button" />
    </form>
  `
})
export class EmailFormComponent {
  @Input()
  public author: string;

  @Output('newEmail')
  public onSubmit = new EventEmitter();

  public data: EmailData;

  constructor() {
    this.resetData();
  }

  resetData() {
    this.data = new EmailData("", "", "");
  }

  ngOnInit() {
    this.data.author = this.author;
  }

  submit() {
    this.author = this.data.author;
    this.onSubmit.next(this.data);
    this.resetData();
  }
}
