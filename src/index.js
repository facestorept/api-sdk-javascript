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


import ApiClient from './ApiClient';
import Attribute from './model/Attribute';
import AttributeOptions from './model/AttributeOptions';
import Brand from './model/Brand';
import Category from './model/Category';
import Customer from './model/Customer';
import DefaultResponse from './model/DefaultResponse';
import I18n from './model/I18n';
import I18nProduct from './model/I18nProduct';
import I18nProductSeo from './model/I18nProductSeo';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2001Meta from './model/InlineResponse2001Meta';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import InlineResponse201 from './model/InlineResponse201';
import InlineResponse2011 from './model/InlineResponse2011';
import InlineResponse2012 from './model/InlineResponse2012';
import InlineResponse2013 from './model/InlineResponse2013';
import InlineResponse2014 from './model/InlineResponse2014';
import MetaPartialResponse from './model/MetaPartialResponse';
import NotFoundResponse from './model/NotFoundResponse';
import Options from './model/Options';
import Order from './model/Order';
import Payment from './model/Payment';
import Product from './model/Product';
import Shipping from './model/Shipping';
import Tax from './model/Tax';
import BrandsApi from './api/BrandsApi';
import CategoriesApi from './api/CategoriesApi';
import CustomersApi from './api/CustomersApi';
import OrdersApi from './api/OrdersApi';
import PaymentsApi from './api/PaymentsApi';
import ProductsApi from './api/ProductsApi';
import ProductsAttributesApi from './api/ProductsAttributesApi';
import ShippingsApi from './api/ShippingsApi';
import TaxesApi from './api/TaxesApi';


/**
* This_is_a_reference_to_Facestore_API__IntroductionThis_API_is_documented_in_OpenAPI_format_and_provided_by__facestore_pt_httpfacestore_pt_team__About_the_APIThrough_the_Facestore_API_your_applications_can_retrieve_and_manage_Facestore_platform_content_in_your_store_The_base_address_of_the_API_is_httpsapi_facestore_pt__There_are_several_endpoints_at_that_address_each_with_its_own_unique_path_All_endpoints_are_private_and_you_need_the_permissions_to_access_them_To_get_an_API_Token_you_have_to_be_client_of_Facestore_and_access_your_personal_account_to_request_it__see_the_next_topic__Get_API_TokenTo_consume_the_Facestore_API_is_take_the_unique_token_to_identify_your_requests__You_can_do_that_accessing_the_store_manager_admin_and_doing_the_following_steps1__Go_to_configurations__API_section_2__Copy_the_unique_token__RequestsThe_API_is_based_on_REST_principles_data_resources_are_accessed_via_standard_HTTPS_requests_in_UTF_8_format_to_an_API_endpoint__Where_possible_the_API_strives_to_use_appropriate_HTTP_verbs_for_each_action_VERB______DESCRIPTION_____________________________________________________________________________________________________________GET_______Used_for_retrieving_resources___________________________POST______Used_for_creating_resources_____________________________PUT_______Used_for_changingreplacing_resources_or_collections____PATCH_____Used_for_changingreplacing_partial_resources___________DELETE____Used_for_deleting_resources_____________________________ResponsesResponse_Status_CodesThe_API_uses_the_following_response_status_codes_as_defined_in_the_RFC_2616_and_RFC_6585_STATUS_CODE__DESCRIPTION____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________200__________OK___The_request_has_succeeded__The_client_can_read_the_result_of_the_request_in_the_body_and_the_headers_of_the_response__________________________________________________________________________________________________________201__________Created___The_request_has_been_fulfilled_and_resulted_in_a_new_resource_being_created______________________________________________________________________________________________________________________________________________202__________Accepted___The_request_has_been_accepted_for_processing_but_the_processing_has_not_been_completed_________________________________________________________________________________________________________________________________204__________No_Content___The_request_has_succeeded_but_returns_no_message_body_________________________________________________________________________________________________________________________________________________________________304__________Not_Modified__See_Conditional_requests_____________________________________________________________________________________________________________________________________________________________________________________________400__________Bad_Request___The_request_could_not_be_understood_by_the_server_due_to_malformed_syntax__The_message_body_will_contain_more_information_see_Error_Details_________________________________________________________________________401__________Unauthorized___The_request_requires_user_authentication_or_if_the_request_included_authorization_credentials_authorization_has_been_refused_for_those_credentials________________________________________________________________403__________Forbidden___The_server_understood_the_request_but_is_refusing_to_fulfill_it_______________________________________________________________________________________________________________________________________________________404__________Not_Found___The_requested_resource_could_not_be_found__This_error_can_be_due_to_a_temporary_or_permanent_condition_________________________________________________________________________________________________________________429__________Too_Many_Requests___Rate_limiting_has_been_applied_________________________________________________________________________________________________________________________________________________________________________________500__________Internal_Server_Error__You_should_never_receive_this_error_because_our_clever_coders_catch_them_all_____but_if_you_are_unlucky_enough_to_get_one_please_report_it_to_us_through_a_comment_at_the_bottom_of_this_page______________502__________Bad_Gateway___The_server_was_acting_as_a_gateway_or_proxy_and_received_an_invalid_response_from_the_upstream_server________________________________________________________________________________________________________________503__________Service_Unavailable___The_server_is_currently_unable_to_handle_the_request_due_to_a_temporary_condition_which_will_be_alleviated_after_some_delay__You_can_choose_to_resend_the_request_again______________________________________Rate_limitingTo_make_the_API_fast_for_everybody_rate_limits_apply_Rate_limiting_is_applied_on_an_application_basis__based_on_client_id_regardless_of_how_many_users_are_using_it_If_you_get_status_code_429_it_means_that_you_have_sent_too_many_requests__If_this_happens_have_a_look_in_the_Retry_After_header_where_you_will_see_a_number_displayed__This_is_the_amount_of_seconds_that_you_need_to_wait_before_you_can_retry_sending_your_requests_You_can_check_the_returned_HTTP_headers_of_any_API_request_to_see_your_current_rate_limit_statuscurl__i_httpsapi_facestore_ptv1sampleHTTP1_1_200_OKDate_Mon_01_Dec_2016_172706_GMTStatus_200_OKX_RateLimit_Limit_60X_RateLimit_Remaining_56X_RateLimit_Reset_1372700873The_headers_tell_you_everything_you_need_to_know_about_your_current_rate_limit_status_HEADER_NAME____________DESCRIPTION__________________________________________________________________________________________________________________________________________________________________________X_RateLimit_Limit____The_maximum_number_of_requests_that_the_consumer_is_permitted_to_make_per_hour___X_RateLimit_Remaining__The_number_of_requests_remaining_in_the_current_rate_limit_window________________X_RateLimit_Reset____The_time_at_which_the_current_rate_limit_window_resets_in_UTC_epoch_seconds______TimestampsTimestamps_are_returned_in_ISO_8601_format_as_Coordinated_Universal_Time__UTC_with_zero_offset_YYYY_MM_DDTHHMMSSZ__If_the_time_is_imprecise__for_example_the_datetime_of_an_product_is_created_an_additional_field_will_show_the_precision_see_for_example_created_at_in_an_product_object__Error_DetailsThe_API_uses_the_following_format_to_describe_unsuccessful_responses_return_information_about_the_error_as_an_error_JSON_object_containing_the_following_information_KEY__________VALUE_TYPE____VALUE_DESCRIPTION__________________________________________status_code__integer_____The_HTTP_status_code__also_returned_in_the_response_header_see_Response_Status_Codes_for_more_information___message______string______A_short_description_of_the_cause_of_the_error__.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FacestoreApi = require('index'); // See note below*.
* var xxxSvc = new FacestoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FacestoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FacestoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FacestoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Attribute model constructor.
     * @property {module:model/Attribute}
     */
    Attribute,

    /**
     * The AttributeOptions model constructor.
     * @property {module:model/AttributeOptions}
     */
    AttributeOptions,

    /**
     * The Brand model constructor.
     * @property {module:model/Brand}
     */
    Brand,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The DefaultResponse model constructor.
     * @property {module:model/DefaultResponse}
     */
    DefaultResponse,

    /**
     * The I18n model constructor.
     * @property {module:model/I18n}
     */
    I18n,

    /**
     * The I18nProduct model constructor.
     * @property {module:model/I18nProduct}
     */
    I18nProduct,

    /**
     * The I18nProductSeo model constructor.
     * @property {module:model/I18nProductSeo}
     */
    I18nProductSeo,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2001Meta model constructor.
     * @property {module:model/InlineResponse2001Meta}
     */
    InlineResponse2001Meta,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011,

    /**
     * The InlineResponse2012 model constructor.
     * @property {module:model/InlineResponse2012}
     */
    InlineResponse2012,

    /**
     * The InlineResponse2013 model constructor.
     * @property {module:model/InlineResponse2013}
     */
    InlineResponse2013,

    /**
     * The InlineResponse2014 model constructor.
     * @property {module:model/InlineResponse2014}
     */
    InlineResponse2014,

    /**
     * The MetaPartialResponse model constructor.
     * @property {module:model/MetaPartialResponse}
     */
    MetaPartialResponse,

    /**
     * The NotFoundResponse model constructor.
     * @property {module:model/NotFoundResponse}
     */
    NotFoundResponse,

    /**
     * The Options model constructor.
     * @property {module:model/Options}
     */
    Options,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The Shipping model constructor.
     * @property {module:model/Shipping}
     */
    Shipping,

    /**
     * The Tax model constructor.
     * @property {module:model/Tax}
     */
    Tax,

    /**
    * The BrandsApi service constructor.
    * @property {module:api/BrandsApi}
    */
    BrandsApi,

    /**
    * The CategoriesApi service constructor.
    * @property {module:api/CategoriesApi}
    */
    CategoriesApi,

    /**
    * The CustomersApi service constructor.
    * @property {module:api/CustomersApi}
    */
    CustomersApi,

    /**
    * The OrdersApi service constructor.
    * @property {module:api/OrdersApi}
    */
    OrdersApi,

    /**
    * The PaymentsApi service constructor.
    * @property {module:api/PaymentsApi}
    */
    PaymentsApi,

    /**
    * The ProductsApi service constructor.
    * @property {module:api/ProductsApi}
    */
    ProductsApi,

    /**
    * The ProductsAttributesApi service constructor.
    * @property {module:api/ProductsAttributesApi}
    */
    ProductsAttributesApi,

    /**
    * The ShippingsApi service constructor.
    * @property {module:api/ShippingsApi}
    */
    ShippingsApi,

    /**
    * The TaxesApi service constructor.
    * @property {module:api/TaxesApi}
    */
    TaxesApi
};
