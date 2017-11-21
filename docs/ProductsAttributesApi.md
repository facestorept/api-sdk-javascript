# FacestoreApi.ProductsAttributesApi

All URIs are relative to *https://api.facestore.local/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductsAttributes**](ProductsAttributesApi.md#addProductsAttributes) | **POST** /attributes | 
[**deleteProductAttributeById**](ProductsAttributesApi.md#deleteProductAttributeById) | **DELETE** /attributes/{id}/ | 
[**getProductAttributeById**](ProductsAttributesApi.md#getProductAttributeById) | **GET** /attributes/{id}/ | 
[**getProductsAttributes**](ProductsAttributesApi.md#getProductsAttributes) | **GET** /attributes | 
[**updateProductAttributeById**](ProductsAttributesApi.md#updateProductAttributeById) | **PUT** /attributes/{id}/ | 


<a name="addProductsAttributes"></a>
# **addProductsAttributes**
> [Attribute] addProductsAttributes(attribute)



Creates a new attribute of products in the store.

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ProductsAttributesApi();

let attribute = new FacestoreApi.Attribute(); // Attribute | Attribute to add to the store


apiInstance.addProductsAttributes(attribute, (error, data, response) => {
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
 **attribute** | [**Attribute**](Attribute.md)| Attribute to add to the store | 

### Return type

[**[Attribute]**](Attribute.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProductAttributeById"></a>
# **deleteProductAttributeById**
> deleteProductAttributeById(id)



deletes a single attribute of products based on the ID supplied

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ProductsAttributesApi();

let id = 789; // Number | ID of attribute to delete


apiInstance.deleteProductAttributeById(id, (error, data, response) => {
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
 **id** | **Number**| ID of attribute to delete | 

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductAttributeById"></a>
# **getProductAttributeById**
> Attribute getProductAttributeById(id, opts)



Returns a attribute of products based on a single ID  ### Includes You can give the following values on includes parameter: &#x60;options&#x60; 

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ProductsAttributesApi();

let id = 789; // Number | ID of attribute to fetch

let opts = { 
  'includes': ["includes_example"], // [String] | Include associated objects within response
};

apiInstance.getProductAttributeById(id, opts, (error, data, response) => {
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
 **id** | **Number**| ID of attribute to fetch | 
 **includes** | [**[String]**](String.md)| Include associated objects within response | [optional] 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductsAttributes"></a>
# **getProductsAttributes**
> [Attribute] getProductsAttributes(opts)



Returns all attributes of products from the system that the user has access to  ### Includes You can give the following values on includes parameter: &#x60;options&#x60; 

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ProductsAttributesApi();

let opts = { 
  'includes': ["includes_example"], // [String] | Include associated objects within response
  'limit': 56 // Number | max records to return
  'orderBy': ["orderBy_example"] // [String] | Specify the field to be sorted, examples:  - `?order_by=id|desc` - `?order_by=updated_at|desc,position|asc` 
};

apiInstance.getProductsAttributes(opts, (error, data, response) => {
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

[**[Attribute]**](Attribute.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProductAttributeById"></a>
# **updateProductAttributeById**
> Attribute updateProductAttributeById(id, productAttribute)



update a single attribute of products based on the ID supplied

### Example
```javascript
import FacestoreApi from 'facestore_api';
let defaultClient = FacestoreApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new FacestoreApi.ProductsAttributesApi();

let id = 789; // Number | ID of attribute to update

let productAttribute = new FacestoreApi.Attribute(); // Attribute | Attribute to add to the store


apiInstance.updateProductAttributeById(id, productAttribute, (error, data, response) => {
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
 **id** | **Number**| ID of attribute to update | 
 **productAttribute** | [**Attribute**](Attribute.md)| Attribute to add to the store | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

