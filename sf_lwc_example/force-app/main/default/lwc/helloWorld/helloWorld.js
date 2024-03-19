import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Change As You Like';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}