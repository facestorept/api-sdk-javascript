# FacestoreApi.CustomersApi

All URIs are relative to *https://api.facestore.local/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerById**](CustomersApi.md#getCustomerById) | **GET** /customers/{id}/ | 
[**getCustomers**](CustomersApi.md#getCustomers) | **GET** /customers | 


<a name="getCustomerById"></a>
# **getCustomerById**
> [Customer] getCustomerById(id, opts)



Returns all customers from the system that the user has access to  ### Includes You can give the following values on includes parameter: &#x60;orders, groups&#x60; 

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.CustomersApi();

let id = 789; // Number | ID of customer

let opts = { 
  'includes': ["includes_example"], // [String] | Include associated objects within response
};

apiInstance.getCustomerById(id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of customer | 
 **includes** | [**[String]**](String.md)| Include associated objects within response | [optional] 

### Return type

[**[Customer]**](Customer.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomers"></a>
# **getCustomers**
> [Customer] getCustomers(opts)



Returns all customers from the system that the user has access to  ### Includes You can give the following values on includes parameter: &#x60;orders, groups&#x60; 

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.CustomersApi();

let opts = { 
  'includes': ["includes_example"], // [String] | Include associated objects within response
  'limit': 56 // Number | max records to return
  'orderBy': ["orderBy_example"] // [String] | Specify the field to be sorted, examples:  - `?order_by=id|desc` - `?order_by=updated_at|desc,position|asc` 
};

apiInstance.getCustomers(opts, (error, data, response) => {
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

[**[Customer]**](Customer.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

