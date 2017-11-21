# FacestoreApi.Category

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**position** | **Number** |  | [optional] 
**imageSmall** | **String** | The file to be attached. Must be multipart/form-data. The maximum file size is 2 MB.  | [optional] 
**imageLarger** | **String** | The file to be attached. Must be multipart/form-data. The maximum file size is 2 MB.  | [optional] 
**active** | **Boolean** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**visibility** | **[String]** | channels that resource are showed | [optional] 
**i18n** | [**[I18n]**](I18n.md) | I18n fields to categories | [optional] 


<a name="[VisibilityEnum]"></a>
## Enum: [VisibilityEnum]


* `facebook` (value: `"facebook"`)

* `mobile` (value: `"mobile"`)

* `webstore` (value: `"webstore"`)

* `none` (value: `"none"`)

* `all` (value: `"all"`)




