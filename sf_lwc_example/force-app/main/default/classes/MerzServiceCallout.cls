@RestResource(urlMapping='/MerzServiceCallout')
 global class MerzServiceCallout {
  
  @HttpGet
  @AuraEnabled
  global static String getCalloutResponseContents() {

    // Instantiate a new Http object
    Http h = new Http();

     // Instantiate a new HTTP request, specify the method (GET) as well as the endpoint
    HttpRequest req = new HttpRequest();
    req.setEndpoint('https://merzcommunities--tina.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber=anystringwilldo');
    req.setMethod('GET');

    // Send the request, and return a response
    HttpResponse res = h.send(req);
    System.debug(res.getBody());
    return res.getBody();
  }
}