# Shipment Tracking Lightning Web Component

This repository contains the code to make a REST callout to the MERZ mock service
https://merzcommunities--tina.sandbox.my.salesforce- sites.com/services/apexrest/mockShipmentStatus?trackingNumber=anystringwilldo


This is how this code works:

- Lightning web component "Shipping status" accepts a tracking number in the input field
- The LWC makes a REST callout to the Apex class MerzServiceCallout by invoking the getCalloutResponseContents function
- The getCalloutResponseContents function calls out to the MERZ mock service (please make sure that you have added this Service to the Salesforce Trusted URLS)
- The response from the REST callout is displayed at the bottom of the Lightning app

Why even use a Apex class?
 - Because the MERZ mock service does not support CORS
 - The fetch function from the LWC does not work because the API being called is not CORS compatible
 - The only option is to call the MERZ mock service from the backed Apex class and display the result in the Lighting App

Screenshot from the Lightning App
![alt text](https://github.com/raviram21/Salesforce/blob/main/sf_lwc_example/Screenshot.png)


