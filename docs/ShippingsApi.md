# FacestoreApi.ShippingsApi

All URIs are relative to *https://api.facestore.local/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addShipping**](ShippingsApi.md#addShipping) | **POST** /shippings | 
[**deleteShippingById**](ShippingsApi.md#deleteShippingById) | **DELETE** /shippings/{id}/ | 
[**getShippingById**](ShippingsApi.md#getShippingById) | **GET** /shippings/{id}/ | 
[**getShippings**](ShippingsApi.md#getShippings) | **GET** /shippings | 
[**updateShippingById**](ShippingsApi.md#updateShippingById) | **PUT** /shippings/{id}/ | 
[**updateShippingById_0**](ShippingsApi.md#updateShippingById_0) | **PATCH** /shippings/{id}/ | 


<a name="addShipping"></a>
# **addShipping**
> InlineResponse2013 addShipping(shipping)



Creates a new shipping in the store.

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ShippingsApi();

let shipping = new FacestoreApi.Shipping(); // Shipping | Shipping to add to the store


apiInstance.addShipping(shipping, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping** | [**Shipping**](Shipping.md)| Shipping to add to the store | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteShippingById"></a>
# **deleteShippingById**
> deleteShippingById(id)



deletes a single shipping based on the ID supplied

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ShippingsApi();

let id = 789; // Number | ID of shipping to delete


apiInstance.deleteShippingById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of shipping to delete | 

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingById"></a>
# **getShippingById**
> InlineResponse2013 getShippingById(id, opts)



Returns a shipping based on a single ID

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ShippingsApi();

let id = 789; // Number | ID of shipping to fetch

let opts = { 
  'limit': 56 // Number | max records to return
};

apiInstance.getShippingById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of shipping to fetch | 
 **limit** | **Number**| max records to return | [optional] 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippings"></a>
# **getShippings**
> InlineResponse2003 getShippings(opts)



Returns all shippings from the system that the user has access to

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ShippingsApi();

let opts = { 
  'includes': ["includes_example"], // [String] | Include associated objects within response
  'limit': 56 // Number | max records to return
  'orderBy': ["orderBy_example"] // [String] | Specify the field to be sorted, examples:  - `?order_by=id|desc` - `?order_by=updated_at|desc,position|asc` 
};

apiInstance.getShippings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includes** | [**[String]**](String.md)| Include associated objects within response | [optional] 
 **limit** | **Number**| max records to return | [optional] 
 **orderBy** | [**[String]**](String.md)| Specify the field to be sorted, examples:  - &#x60;?order_by&#x3D;id|desc&#x60; - &#x60;?order_by&#x3D;updated_at|desc,position|asc&#x60;  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShippingById"></a>
# **updateShippingById**
> InlineResponse2013 updateShippingById(id, tax)



update a single shipping based on the ID supplied

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ShippingsApi();

let id = 789; // Number | ID of shipping to update

let tax = new FacestoreApi.Shipping(); // Shipping | Shipping to update in store


apiInstance.updateShippingById(id, tax, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of shipping to update | 
 **tax** | [**Shipping**](Shipping.md)| Shipping to update in store | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShippingById_0"></a>
# **updateShippingById_0**
> InlineResponse2013 updateShippingById_0(id, tax)



update a single shipping based on the ID supplied

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ShippingsApi();

let id = 789; // Number | ID of shipping to update

let tax = new FacestoreApi.Shipping(); // Shipping | Shipping to update in store


apiInstance.updateShippingById_0(id, tax, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of shipping to update | 
 **tax** | [**Shipping**](Shipping.md)| Shipping to update in store | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

