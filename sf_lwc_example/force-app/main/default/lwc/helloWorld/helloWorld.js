import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Change As You Like';
  order_status = 'not found';
  changeHandler(event) {
    this.greeting = event.target.value;
  }

  async getStatus() {
    try {
      const response = await fetch("https://merzcommunities--tina.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber=anystringwilldo");
      if (!response.ok) {
        throw Error(response);
      }
      this.order_status = response.text;
      return response.text
    } catch (error) {
      console.error("There's a problem with your fetch operation:", error);
      return error
    } 
  }
  connectedCallback() {
    this.getStatus().then(
      function(value) { alert (value); },
      function(error) { alert (error); }
    );
  }
  

}

