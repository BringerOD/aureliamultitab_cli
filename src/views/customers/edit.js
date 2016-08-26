import {bindable, bindingMode} from 'aurelia-framework';

export class EditCustomer {

    

    firstName = 'John';
    lastName = 'Doe';

  sayHello() {
    alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
  }

    constructor() {

    }

    close(){

        this.workspace.controller.closeWorkspace(this.workspace);
    }
    activate(model) {

        this.workspace = model;

    }


}

