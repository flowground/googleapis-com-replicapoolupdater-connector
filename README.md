# ![LOGO](logo.png) Google Compute Engine Instance Group Updater **flow**ground Connector

## Description

A generated **flow**ground connector for the Google Compute Engine Instance Group Updater API (version v1beta1).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/replicapoolupdater/v1beta1/swagger.json<br/>
Generated at: 2019-05-23T12:13:36+03:00

## API Description

[Deprecated. Please use compute.instanceGroupManagers.update method. replicapoolupdater API will be disabled after December 30th, 2016] Updates groups of Compute Engine instances.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Retrieves the list of Operation resources contained within the specified zone.

*Tags:* `zoneOperations`

#### Input Parameters
* `filter` - _optional_ - Optional. Filter expression for filtering listed resources.
* `maxResults` - _optional_ - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
* `pageToken` - _optional_ - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
* `project` - _required_ - Name of the project scoping this request.
* `zone` - _required_ - Name of the zone scoping this request.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves the specified zone-specific operation resource.

*Tags:* `zoneOperations`

#### Input Parameters
* `operation` - _required_ - Name of the operation resource to return.
* `project` - _required_ - Name of the project scoping this request.
* `zone` - _required_ - Name of the zone scoping this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.

*Tags:* `rollingUpdates`

#### Input Parameters
* `filter` - _optional_ - Optional. Filter expression for filtering listed resources.
* `maxResults` - _optional_ - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
* `pageToken` - _optional_ - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
* `project` - _required_ - The Google Developers Console project name.
* `zone` - _required_ - The name of the zone in which the update's target resides.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts and starts a new update.

*Tags:* `rollingUpdates`

#### Input Parameters
* `project` - _required_ - The Google Developers Console project name.
* `zone` - _required_ - The name of the zone in which the update's target resides.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns information about an update.

*Tags:* `rollingUpdates`

#### Input Parameters
* `project` - _required_ - The Google Developers Console project name.
* `rollingUpdate` - _required_ - The name of the update.
* `zone` - _required_ - The name of the zone in which the update's target resides.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.

*Tags:* `rollingUpdates`

#### Input Parameters
* `project` - _required_ - The Google Developers Console project name.
* `rollingUpdate` - _required_ - The name of the update.
* `zone` - _required_ - The name of the zone in which the update's target resides.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists the current status for each instance within a given update.

*Tags:* `rollingUpdates`

#### Input Parameters
* `filter` - _optional_ - Optional. Filter expression for filtering listed resources.
* `maxResults` - _optional_ - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
* `pageToken` - _optional_ - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
* `project` - _required_ - The Google Developers Console project name.
* `rollingUpdate` - _required_ - The name of the update.
* `zone` - _required_ - The name of the zone in which the update's target resides.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.

*Tags:* `rollingUpdates`

#### Input Parameters
* `project` - _required_ - The Google Developers Console project name.
* `rollingUpdate` - _required_ - The name of the update.
* `zone` - _required_ - The name of the zone in which the update's target resides.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.

*Tags:* `rollingUpdates`

#### Input Parameters
* `project` - _required_ - The Google Developers Console project name.
* `rollingUpdate` - _required_ - The name of the update.
* `zone` - _required_ - The name of the zone in which the update's target resides.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.

*Tags:* `rollingUpdates`

#### Input Parameters
* `project` - _required_ - The Google Developers Console project name.
* `rollingUpdate` - _required_ - The name of the update.
* `zone` - _required_ - The name of the zone in which the update's target resides.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-replicapoolupdater-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
