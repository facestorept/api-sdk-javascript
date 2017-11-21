# facestore_api

FacestoreApi - JavaScript client for facestore_api
This is a reference to Facestore API.  # Introduction This API is documented in **OpenAPI format** and provided by [facestore.pt](http://facestore.pt) team.  # About the API Through the Facestore API your applications can retrieve and manage Facestore platform content in your store. The base address of the API is `https://api.facestore.pt`. There are several endpoints at that address, each with its own unique path. All endpoints are private and you need the permissions to access them. To get an API Token you have to be client of Facestore and access your personal account to request it (see the next topic).  # Get API Token To consume the Facestore API is take the unique token to identify your requests. You can do that accessing the store manager admin and doing the following steps: 1. Go to ``configurations > API`` section. 2. Copy the unique token.  # Requests The API is based on REST principles: data resources are accessed via standard HTTPS requests in UTF-8 format to an API endpoint. Where possible, the API strives to use appropriate HTTP verbs for each action: | VERB     | DESCRIPTION                                            | | -------- |:-------------:                                         | | GET      | Used for retrieving resources.                         | | POST     | Used for creating resources.                           | | PUT      | Used for changing/replacing resources or collections.  | | PATCH    | Used for changing/replacing partial resources.         | | DELETE   | Used for deleting resources.                           |  # Responses Response Status Codes The API uses the following response status codes, as defined in the RFC 2616 and RFC 6585:  | STATUS CODE | DESCRIPTION                                                                                                                                                                                                                       | |:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| | 200         | OK - The request has succeeded. The client can read the result of the request in the body and the headers of the response.                                                                                                        | | 201         | Created - The request has been fulfilled and resulted in a new resource being created.                                                                                                                                            | | 202         | Accepted - The request has been accepted for processing, but the processing has not been completed.                                                                                                                               | | 204         | No Content - The request has succeeded but returns no message body.                                                                                                                                                               | | 304         | Not Modified. See Conditional requests.                                                                                                                                                                                           | | 400         | Bad Request - The request could not be understood by the server due to malformed syntax. The message body will contain more information; see Error Details.                                                                       | | 401         | Unauthorized - The request requires user authentication or, if the request included authorization credentials, authorization has been refused for those credentials.                                                              | | 403         | Forbidden - The server understood the request, but is refusing to fulfill it.                                                                                                                                                     | | 404         | Not Found - The requested resource could not be found. This error can be due to a temporary or permanent condition.                                                                                                               | | 429         | Too Many Requests - Rate limiting has been applied.                                                                                                                                                                               | | 500         | Internal Server Error. You should never receive this error because our clever coders catch them all ... but if you are unlucky enough to get one, please report it to us through a comment at the bottom of this page.            | | 502         | Bad Gateway - The server was acting as a gateway or proxy and received an invalid response from the upstream server.                                                                                                              | | 503         | Service Unavailable - The server is currently unable to handle the request due to a temporary condition which will be alleviated after some delay. You can choose to resend the request again.                                    |  # Rate limiting To make the API fast for everybody, rate limits apply.  Rate limiting is applied on an application basis (based on client id), regardless of how many users are using it.  If you get status code 429, it means that you have sent too many requests. If this happens, have a look in the Retry-After header, where you will see a number displayed. This is the amount of seconds that you need to wait, before you can retry sending your requests.  You can check the returned HTTP headers of any API request to see your current rate limit status:  ``` curl -i https://api.facestore.pt/v1/sample HTTP/1.1 200 OK Date: Mon, 01 Dec 2016 17:27:06 GMT Status: 200 OK X-RateLimit-Limit: 60 X-RateLimit-Remaining: 56 X-RateLimit-Reset: 1372700873 ```  The headers tell you everything you need to know about your current rate limit status:  | HEADER NAME           | DESCRIPTION                                                                     | |:---------------------:|:-------------------------------------------------------------------------------:| | X-RateLimit-Limit   | The maximum number of requests that the consumer is permitted to make per hour. | | X-RateLimit-Remaining | The number of requests remaining in the current rate limit window.              | | X-RateLimit-Reset   | The time at which the current rate limit window resets in UTC epoch seconds.    |  # Timestamps Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for example, the date/time of an product is created), an additional field will show the precision; see for example, created_at in an product object.  # Error Details The API uses the following format to describe unsuccessful responses, return information about the error as an error JSON object containing the following information::  | KEY         | VALUE TYPE   | VALUE DESCRIPTION | |:-----------:|:------------:|:-----------------:| | status_code | integer    | The HTTP status code (also returned in the response header; see Response Status Codes for more information). | | message     | string     | A short description of the cause of the error. | 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.4
- Package version: 0.1.4
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://facestore.pt](http://facestore.pt)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install facestore_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/facestorept/api-sdk-javascript
then install it via:

```shell
    npm install facestorept/api-sdk-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var FacestoreApi = require('facestore_api');

var defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix['APIToken'] = "Token"

var api = new FacestoreApi.BrandsApi()

var brand = new FacestoreApi.Brand(); // {Brand} Brand to add to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addBrands(brand, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.facestore.local/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FacestoreApi.BrandsApi* | [**addBrands**](docs/BrandsApi.md#addBrands) | **POST** /brands | 
*FacestoreApi.BrandsApi* | [**deleteBrandById**](docs/BrandsApi.md#deleteBrandById) | **DELETE** /brands/{id}/ | 
*FacestoreApi.BrandsApi* | [**getBrandById**](docs/BrandsApi.md#getBrandById) | **GET** /brands/{id}/ | 
*FacestoreApi.BrandsApi* | [**getBrands**](docs/BrandsApi.md#getBrands) | **GET** /brands | 
*FacestoreApi.BrandsApi* | [**updateCategoryById**](docs/BrandsApi.md#updateCategoryById) | **PUT** /brands/{id}/ | 
*FacestoreApi.BrandsApi* | [**updateCategoryById_0**](docs/BrandsApi.md#updateCategoryById_0) | **PATCH** /brands/{id}/ | 
*FacestoreApi.CategoriesApi* | [**addCategories**](docs/CategoriesApi.md#addCategories) | **POST** /categories | 
*FacestoreApi.CategoriesApi* | [**deleteCategoryById**](docs/CategoriesApi.md#deleteCategoryById) | **DELETE** /categories/{id}/ | 
*FacestoreApi.CategoriesApi* | [**getCategories**](docs/CategoriesApi.md#getCategories) | **GET** /categories | 
*FacestoreApi.CategoriesApi* | [**getCategoryById**](docs/CategoriesApi.md#getCategoryById) | **GET** /categories/{id}/ | 
*FacestoreApi.CategoriesApi* | [**updateCategoryById**](docs/CategoriesApi.md#updateCategoryById) | **PUT** /categories/{id}/ | 
*FacestoreApi.CustomersApi* | [**getCustomerById**](docs/CustomersApi.md#getCustomerById) | **GET** /customers/{id}/ | 
*FacestoreApi.CustomersApi* | [**getCustomers**](docs/CustomersApi.md#getCustomers) | **GET** /customers | 
*FacestoreApi.OrdersApi* | [**getOrderById**](docs/OrdersApi.md#getOrderById) | **GET** /orders/{id}/ | 
*FacestoreApi.OrdersApi* | [**getOrders**](docs/OrdersApi.md#getOrders) | **GET** /orders | 
*FacestoreApi.PaymentsApi* | [**getPaymentById**](docs/PaymentsApi.md#getPaymentById) | **GET** /payments/{id}/ | 
*FacestoreApi.PaymentsApi* | [**getPayments**](docs/PaymentsApi.md#getPayments) | **GET** /payments | 
*FacestoreApi.ProductsApi* | [**addProduct**](docs/ProductsApi.md#addProduct) | **POST** /products | 
*FacestoreApi.ProductsApi* | [**deleteProductById**](docs/ProductsApi.md#deleteProductById) | **DELETE** /products/{id}/ | 
*FacestoreApi.ProductsApi* | [**getProductById**](docs/ProductsApi.md#getProductById) | **GET** /products/{id}/ | 
*FacestoreApi.ProductsApi* | [**getProducts**](docs/ProductsApi.md#getProducts) | **GET** /products | 
*FacestoreApi.ProductsApi* | [**updateProductById**](docs/ProductsApi.md#updateProductById) | **PUT** /products/{id}/ | 
*FacestoreApi.ProductsApi* | [**updateProductById_0**](docs/ProductsApi.md#updateProductById_0) | **PATCH** /products/{id}/ | 
*FacestoreApi.ProductsAttributesApi* | [**addProductsAttributes**](docs/ProductsAttributesApi.md#addProductsAttributes) | **POST** /attributes | 
*FacestoreApi.ProductsAttributesApi* | [**deleteProductAttributeById**](docs/ProductsAttributesApi.md#deleteProductAttributeById) | **DELETE** /attributes/{id}/ | 
*FacestoreApi.ProductsAttributesApi* | [**getProductAttributeById**](docs/ProductsAttributesApi.md#getProductAttributeById) | **GET** /attributes/{id}/ | 
*FacestoreApi.ProductsAttributesApi* | [**getProductsAttributes**](docs/ProductsAttributesApi.md#getProductsAttributes) | **GET** /attributes | 
*FacestoreApi.ProductsAttributesApi* | [**updateProductAttributeById**](docs/ProductsAttributesApi.md#updateProductAttributeById) | **PUT** /attributes/{id}/ | 
*FacestoreApi.ShippingsApi* | [**addShipping**](docs/ShippingsApi.md#addShipping) | **POST** /shippings | 
*FacestoreApi.ShippingsApi* | [**deleteShippingById**](docs/ShippingsApi.md#deleteShippingById) | **DELETE** /shippings/{id}/ | 
*FacestoreApi.ShippingsApi* | [**getShippingById**](docs/ShippingsApi.md#getShippingById) | **GET** /shippings/{id}/ | 
*FacestoreApi.ShippingsApi* | [**getShippings**](docs/ShippingsApi.md#getShippings) | **GET** /shippings | 
*FacestoreApi.ShippingsApi* | [**updateShippingById**](docs/ShippingsApi.md#updateShippingById) | **PUT** /shippings/{id}/ | 
*FacestoreApi.ShippingsApi* | [**updateShippingById_0**](docs/ShippingsApi.md#updateShippingById_0) | **PATCH** /shippings/{id}/ | 
*FacestoreApi.TaxesApi* | [**addTaxes**](docs/TaxesApi.md#addTaxes) | **POST** /taxes | 
*FacestoreApi.TaxesApi* | [**deleteTaxById**](docs/TaxesApi.md#deleteTaxById) | **DELETE** /taxes/{id}/ | 
*FacestoreApi.TaxesApi* | [**getTaxById**](docs/TaxesApi.md#getTaxById) | **GET** /taxes/{id}/ | 
*FacestoreApi.TaxesApi* | [**getTaxes**](docs/TaxesApi.md#getTaxes) | **GET** /taxes | 
*FacestoreApi.TaxesApi* | [**updateTaxById**](docs/TaxesApi.md#updateTaxById) | **PUT** /taxes/{id}/ | 
*FacestoreApi.TaxesApi* | [**updateTaxById_0**](docs/TaxesApi.md#updateTaxById_0) | **PATCH** /taxes/{id}/ | 


## Documentation for Models

 - [FacestoreApi.Attribute](docs/Attribute.md)
 - [FacestoreApi.AttributeOptions](docs/AttributeOptions.md)
 - [FacestoreApi.Brand](docs/Brand.md)
 - [FacestoreApi.Category](docs/Category.md)
 - [FacestoreApi.Customer](docs/Customer.md)
 - [FacestoreApi.DefaultResponse](docs/DefaultResponse.md)
 - [FacestoreApi.I18n](docs/I18n.md)
 - [FacestoreApi.I18nProduct](docs/I18nProduct.md)
 - [FacestoreApi.I18nProductSeo](docs/I18nProductSeo.md)
 - [FacestoreApi.InlineResponse200](docs/InlineResponse200.md)
 - [FacestoreApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [FacestoreApi.InlineResponse2001Meta](docs/InlineResponse2001Meta.md)
 - [FacestoreApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [FacestoreApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [FacestoreApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [FacestoreApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [FacestoreApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [FacestoreApi.InlineResponse201](docs/InlineResponse201.md)
 - [FacestoreApi.InlineResponse2011](docs/InlineResponse2011.md)
 - [FacestoreApi.InlineResponse2012](docs/InlineResponse2012.md)
 - [FacestoreApi.InlineResponse2013](docs/InlineResponse2013.md)
 - [FacestoreApi.InlineResponse2014](docs/InlineResponse2014.md)
 - [FacestoreApi.MetaPartialResponse](docs/MetaPartialResponse.md)
 - [FacestoreApi.NotFoundResponse](docs/NotFoundResponse.md)
 - [FacestoreApi.Options](docs/Options.md)
 - [FacestoreApi.Order](docs/Order.md)
 - [FacestoreApi.Payment](docs/Payment.md)
 - [FacestoreApi.Product](docs/Product.md)
 - [FacestoreApi.Shipping](docs/Shipping.md)
 - [FacestoreApi.Tax](docs/Tax.md)


## Documentation for Authorization


### APIKeyHeader

- **Type**: API key
- **API key parameter name**: APIToken
- **Location**: HTTP header

