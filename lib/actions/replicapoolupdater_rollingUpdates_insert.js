/**
 * Auto-generated action file for "Google Compute Engine Instance Group Updater" API.
 *
 * Generated at: 2019-05-07T14:41:54.299Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-replicapoolupdater-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'replicapoolupdater.rollingUpdates.insert'
 * Endpoint Path: '/{project}/zones/{zone}/rollingUpdates'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "project",
    "zone",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "project": "project",
    "zone": "zone",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "actionType": "actionType",
    "creationTimestamp": "creationTimestamp",
    "description": "description",
    "errors": "errors",
    "error": "error",
    "id": "id",
    "instanceGroup": "instanceGroup",
    "instanceGroupManager": "instanceGroupManager",
    "instanceTemplate": "instanceTemplate",
    "kind": "kind",
    "oldInstanceTemplate": "oldInstanceTemplate",
    "autoPauseAfterInstances": "autoPauseAfterInstances",
    "instanceStartupTimeoutSec": "instanceStartupTimeoutSec",
    "maxNumConcurrentInstances": "maxNumConcurrentInstances",
    "maxNumFailedInstances": "maxNumFailedInstances",
    "minInstanceUpdateTimeSec": "minInstanceUpdateTimeSec",
    "policy": "policy",
    "progress": "progress",
    "selfLink": "selfLink",
    "status": "status",
    "statusMessage": "statusMessage",
    "user": "user",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'replicapoolupdater.rollingUpdates.insert',
        pathName: '/{project}/zones/{zone}/rollingUpdates',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}