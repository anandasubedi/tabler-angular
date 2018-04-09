import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-guestbook',
  template: `
    <ui-page-title
      title="Firebase Guestbook"
      subTitle="Rock a guestbook like it's 1999! 🚀 ">
    </ui-page-title>

    <app-message-form
      [message]="message"
      [user]="auth.user$ | async"
      (action)="handleAction($event)">
    </app-message-form>

    <app-message-list
      [messages]="fire.collection$ | async"
      [user]="auth.user$ | async"
      (action)="handleAction($event)">
    </app-message-list>
  `,
})
export class GuestbookComponent {
  public message = ''

  constructor(public auth: AuthService, public fire: FireService) {}

  addMessage({ message, user }) {
    console.log('addMessage', message, user)
    this.fire.upsert({ message, user })
      .subscribe(() => console.log('Item added'))
  }

  deleteMessage(id) {
    this.fire.delete(id)
      .subscribe(() => console.log('Item deleted'))
  }

  handleAction({ type, payload }) {
    switch (type) {
      case 'ADD':
        return this.addMessage(payload)
      case 'DELETE':
        return this.deleteMessage(payload)
      default:
        return console.log('Unknown type', type, payload)
    }
  }
}
