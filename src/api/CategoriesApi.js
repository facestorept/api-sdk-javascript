/**
 * Facestore API
 * This is a reference to Facestore API.  # Introduction This API is documented in **OpenAPI format** and provided by [facestore.pt](http://facestore.pt) team.  # About the API Through the Facestore API your applications can retrieve and manage Facestore platform content in your store. The base address of the API is `https://api.facestore.pt`. There are several endpoints at that address, each with its own unique path. All endpoints are private and you need the permissions to access them. To get an API Token you have to be client of Facestore and access your personal account to request it (see the next topic).  # Get API Token To consume the Facestore API is take the unique token to identify your requests. You can do that accessing the store manager admin and doing the following steps: 1. Go to ``configurations > API`` section. 2. Copy the unique token.  # Requests The API is based on REST principles: data resources are accessed via standard HTTPS requests in UTF-8 format to an API endpoint. Where possible, the API strives to use appropriate HTTP verbs for each action: | VERB     | DESCRIPTION                                            | | -------- |:-------------:                                         | | GET      | Used for retrieving resources.                         | | POST     | Used for creating resources.                           | | PUT      | Used for changing/replacing resources or collections.  | | PATCH    | Used for changing/replacing partial resources.         | | DELETE   | Used for deleting resources.                           |  # Responses Response Status Codes The API uses the following response status codes, as defined in the RFC 2616 and RFC 6585:  | STATUS CODE | DESCRIPTION                                                                                                                                                                                                                       | |:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| | 200         | OK - The request has succeeded. The client can read the result of the request in the body and the headers of the response.                                                                                                        | | 201         | Created - The request has been fulfilled and resulted in a new resource being created.                                                                                                                                            | | 202         | Accepted - The request has been accepted for processing, but the processing has not been completed.                                                                                                                               | | 204         | No Content - The request has succeeded but returns no message body.                                                                                                                                                               | | 304         | Not Modified. See Conditional requests.                                                                                                                                                                                           | | 400         | Bad Request - The request could not be understood by the server due to malformed syntax. The message body will contain more information; see Error Details.                                                                       | | 401         | Unauthorized - The request requires user authentication or, if the request included authorization credentials, authorization has been refused for those credentials.                                                              | | 403         | Forbidden - The server understood the request, but is refusing to fulfill it.                                                                                                                                                     | | 404         | Not Found - The requested resource could not be found. This error can be due to a temporary or permanent condition.                                                                                                               | | 429         | Too Many Requests - Rate limiting has been applied.                                                                                                                                                                               | | 500         | Internal Server Error. You should never receive this error because our clever coders catch them all ... but if you are unlucky enough to get one, please report it to us through a comment at the bottom of this page.            | | 502         | Bad Gateway - The server was acting as a gateway or proxy and received an invalid response from the upstream server.                                                                                                              | | 503         | Service Unavailable - The server is currently unable to handle the request due to a temporary condition which will be alleviated after some delay. You can choose to resend the request again.                                    |  # Rate limiting To make the API fast for everybody, rate limits apply.  Rate limiting is applied on an application basis (based on client id), regardless of how many users are using it.  If you get status code 429, it means that you have sent too many requests. If this happens, have a look in the Retry-After header, where you will see a number displayed. This is the amount of seconds that you need to wait, before you can retry sending your requests.  You can check the returned HTTP headers of any API request to see your current rate limit status:  ``` curl -i https://api.facestore.pt/v1/sample HTTP/1.1 200 OK Date: Mon, 01 Dec 2016 17:27:06 GMT Status: 200 OK X-RateLimit-Limit: 60 X-RateLimit-Remaining: 56 X-RateLimit-Reset: 1372700873 ```  The headers tell you everything you need to know about your current rate limit status:  | HEADER NAME           | DESCRIPTION                                                                     | |:---------------------:|:-------------------------------------------------------------------------------:| | X-RateLimit-Limit   | The maximum number of requests that the consumer is permitted to make per hour. | | X-RateLimit-Remaining | The number of requests remaining in the current rate limit window.              | | X-RateLimit-Reset   | The time at which the current rate limit window resets in UTC epoch seconds.    |  # Timestamps Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with zero offset: YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for example, the date/time of an product is created), an additional field will show the precision; see for example, created_at in an product object.  # Error Details The API uses the following format to describe unsuccessful responses, return information about the error as an error JSON object containing the following information::  | KEY         | VALUE TYPE   | VALUE DESCRIPTION | |:-----------:|:------------:|:-----------------:| | status_code | integer    | The HTTP status code (also returned in the response header; see Response Status Codes for more information). | | message     | string     | A short description of the cause of the error. | 
 *
 * OpenAPI spec version: 0.1.4
 * Contact: apihelp@facestore.pt
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Category from '../model/Category';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2011 from '../model/InlineResponse2011';
import NotFoundResponse from '../model/NotFoundResponse';

/**
* Categories service.
* @module api/CategoriesApi
* @version 0.1.4
*/
export default class CategoriesApi {

    /**
    * Constructs a new CategoriesApi. 
    * @alias module:api/CategoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addCategories operation.
     * @callback module:api/CategoriesApi~addCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new category in the store.
     * @param {module:model/Category} category Category to add to the store
     * @param {module:api/CategoriesApi~addCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */
    addCategories(category, callback) {
      let postBody = category;

      // verify the required parameter 'category' is set
      if (category === undefined || category === null) {
        throw new Error("Missing the required parameter 'category' when calling addCategories");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCategoryById operation.
     * @callback module:api/CategoriesApi~deleteCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes a single category based on the ID supplied
     * @param {Number} id ID of category to delete
     * @param {module:api/CategoriesApi~deleteCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCategoryById(id, callback) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCategoryById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/categories/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategories operation.
     * @callback module:api/CategoriesApi~getCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all categories from the system that the user has access to  ### Includes You can give the following values on includes parameter: &#x60;routes, products&#x60; 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.includes Include associated objects within response
     * @param {Number} opts.limit max records to return
     * @param {Array.<String>} opts.orderBy Specify the field to be sorted, examples:  - &#x60;?order_by&#x3D;id|desc&#x60; - &#x60;?order_by&#x3D;updated_at|desc,position|asc&#x60; 
     * @param {module:api/CategoriesApi~getCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    getCategories(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'includes': this.apiClient.buildCollectionParam(opts['includes'], 'csv'),
        'limit': opts['limit'],
        'order_by': this.apiClient.buildCollectionParam(opts['orderBy'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategoryById operation.
     * @callback module:api/CategoriesApi~getCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a category based on a single ID  ### Includes You can give the following values on includes parameter: &#x60;routes, products&#x60; 
     * @param {Number} id ID of category to fetch
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.includes Include associated objects within response
     * @param {Number} opts.limit max records to return
     * @param {module:api/CategoriesApi~getCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */
    getCategoryById(id, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCategoryById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
        'includes': this.apiClient.buildCollectionParam(opts['includes'], 'csv'),
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/categories/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCategoryById operation.
     * @callback module:api/CategoriesApi~updateCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update a single category based on the ID supplied
     * @param {Number} id ID of category to update
     * @param {Object} category Category to update in store
     * @param {module:api/CategoriesApi~updateCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateCategoryById(id, category, callback) {
      let postBody = category;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCategoryById");
      }

      // verify the required parameter 'category' is set
      if (category === undefined || category === null) {
        throw new Error("Missing the required parameter 'category' when calling updateCategoryById");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyHeader'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/categories/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
