# FacestoreApi.TaxesApi

All URIs are relative to *https://api.facestore.local/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTaxes**](TaxesApi.md#addTaxes) | **POST** /taxes | 
[**deleteTaxById**](TaxesApi.md#deleteTaxById) | **DELETE** /taxes/{id}/ | 
[**getTaxById**](TaxesApi.md#getTaxById) | **GET** /taxes/{id}/ | 
[**getTaxes**](TaxesApi.md#getTaxes) | **GET** /taxes | 
[**updateTaxById**](TaxesApi.md#updateTaxById) | **PUT** /taxes/{id}/ | 
[**updateTaxById_0**](TaxesApi.md#updateTaxById_0) | **PATCH** /taxes/{id}/ | 


<a name="addTaxes"></a>
# **addTaxes**
> InlineResponse2012 addTaxes(tax)



Creates a new tax in the store.

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.TaxesApi();

let tax = new FacestoreApi.Tax(); // Tax | Tax to add to the store


apiInstance.addTaxes(tax, (error, data, response) => {
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
 **tax** | [**Tax**](Tax.md)| Tax to add to the store | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTaxById"></a>
# **deleteTaxById**
> deleteTaxById(id)



deletes a single tax based on the ID supplied

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.TaxesApi();

let id = 789; // Number | ID of tax to delete


apiInstance.deleteTaxById(id, (error, data, response) => {
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
 **id** | **Number**| ID of tax to delete | 

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaxById"></a>
# **getTaxById**
> InlineResponse2012 getTaxById(id, opts)



Returns a tax based on a single ID

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.TaxesApi();

let id = 789; // Number | ID of tax to fetch

let opts = { 
  'limit': 56 // Number | max records to return
};

apiInstance.getTaxById(id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of tax to fetch | 
 **limit** | **Number**| max records to return | [optional] 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaxes"></a>
# **getTaxes**
> InlineResponse2002 getTaxes(opts)



Returns all taxes from the system that the user has access to

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.TaxesApi();

let opts = { 
  'includes': ["includes_example"], // [String] | Include associated objects within response
  'limit': 56 // Number | max records to return
  'orderBy': ["orderBy_example"] // [String] | Specify the field to be sorted, examples:  - `?order_by=id|desc` - `?order_by=updated_at|desc,position|asc` 
};

apiInstance.getTaxes(opts, (error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaxById"></a>
# **updateTaxById**
> InlineResponse2012 updateTaxById(id, tax)



update a single tax based on the ID supplied

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.TaxesApi();

let id = 789; // Number | ID of tax to update

let tax = new FacestoreApi.Tax(); // Tax | Tax to add to the store


apiInstance.updateTaxById(id, tax, (error, data, response) => {
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
 **id** | **Number**| ID of tax to update | 
 **tax** | [**Tax**](Tax.md)| Tax to add to the store | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaxById_0"></a>
# **updateTaxById_0**
> InlineResponse2012 updateTaxById_0(id, tax)



update a single tax based on the ID supplied

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.TaxesApi();

let id = 789; // Number | ID of tax to update

let tax = new FacestoreApi.Tax(); // Tax | Tax to add to the store


apiInstance.updateTaxById_0(id, tax, (error, data, response) => {
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
 **id** | **Number**| ID of tax to update | 
 **tax** | [**Tax**](Tax.md)| Tax to add to the store | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

