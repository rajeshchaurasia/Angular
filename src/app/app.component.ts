import {
    Component,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user';

import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app';
    componentRef: any;
    @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;


      currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private resolver: ComponentFactoryResolver
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

     createComponent(message) {
       console.log('inside create component');
        this.entry.clear();
        const factory = this.resolver.resolveComponentFactory(MessageComponent);
        this.componentRef = this.entry.createComponent(factory);
        this.componentRef.instance.message = message;
    }
    destroyComponent() {
        this.componentRef.destroy();
    }
}
