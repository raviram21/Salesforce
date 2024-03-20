import { LightningElement } from 'lwc';
import restdatapull from '@salesforce/apex/MerzServiceCallout.getCalloutResponseContents';
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
        alert(response.body);
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
    //this.getStatus().then(
    //  this.getStatus().then(
    //  function(value) {this.order_status=result; },
    //  function(error) {console.log(error);}
    //);

    restdatapull().then(result => {
      console.log('Result---'+result);
      this.order_status=result;
      }).catch(error => {
      console.log(error);
      
      });
      

  }
  

}

