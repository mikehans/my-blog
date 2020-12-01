---
path: "/blog/microsoft-identity-ms-600-part-3"
date: "2020-11-26"
title: "Microsoft Identity (MS-600) - Implement Authentication"
author: "Mike Hansford"
tags:
    - MS-600
    - Microsoft Identity
    - Microsoft 365
    - OpenID Connect
    - OAuth 2.0
---
[Return to Table of Contents for the Microsoft Identity (MS-600) posts](microsoft-identity-ms-600)

### Configure MSAL JS for endpoint and token cache
So there are two parts here: understanding the endpoints and the token cache.

The MSAL config is the key to what gets set up for your application. Below is a sample of a basic config.

```
    const msalConfig = {
        auth: {
            clientId: "11111111-1111-1111-1111-111111111111",
            authority: "https://login.microsoftonline.com/22222222-2222-2222-2222-222222222222",
            redirectUri: "http://localhost:3001"
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: false
        }
    }
```


Only the ```clientId``` key is required. This is curious as I was under the impression that the ```redirectUri``` needed to match the one specified in the app registration. The question I have is what is the behaviour if this is left out. I'll test and report later.

The endpoint is defined in the authority key of your MSAL config. The default is ```https://login.microsoftonline.com/common ``` though I have over-ridden it here. The default is appropriate in a multi-tenant application, whereas the one shown is appropriate for a single tenant application, identified by the GUID (in this case 22222222-2222-2222-2222-222222222222). Note that there are presently 3 <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/authentication-national-cloud" target="_blank" rel="noreferrer">national cloud</a> endpoints as well, being:
* US Government
* Germany
* China

The token cache is set up under the ```cache``` key. In the sample, the defaults are shown, so in effect this whole section could be left out. The ```storeAuthStateInCookie``` is explained in the article <a href="https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser" target="_blank" rel="noreferrer">Known issues on IE and Edge Browser</a>. The article dates from 2018 however. I'd expect that with the introduction of Edge on Chromium (Edgeium?) this issue shouldn't exist for Edge anymore. As for IE 11? Well it's the zombie browser that will never die (so far) as it shares the lifecycle of Windows 10.

### Plan and configure scopes for dynamic or static permission
"Scopes" is a standard OAuth 2.0 term for the set of permissions that an app will request consent for. In MSAL, it is represented as an array of strings containing the permissions that are being requested (eg. ``` ["User.Read", "Mail.ReadWrite"]```). Scopes are highly granular, allowing for narrowly defined permissions in order to allow for the minimum necessary set of permissions to be requested for the app to run.

### /.default scope
This is a built-in scope defined for every application. It was introduced to aid developers migrating from the MS Identity 1.0 endpoint to the 2.0 endpoint and it refers to the list of statically defined permissions.

#### Consent
Some scopes require admin consent such as ```User.ReadWrite.All```. Typically, scopes that require admin consent are far reaching and powerful. With consent granted to one of these scopes, an app can potentially expose or modify a lot of data, intoducing potential infosec risk to the company.

There are 2 kinds of consent:
* static consent
    * consent that is granted upfront during app registration
    * these are set from the "API permissions" section of the app registration process
* dynamic consent
    * all scopes that have not been pre-consented during app registration by an admin are dynamically registered per user when the user first consents

Admin consent
* admin consent can be provided for static permissions by navigating to ```https://login.microsoftonline.com/common/adminconsent?client_id={{APPLICATION_ID}}&state=12345&redirect_uri={{REDIRECT_URI}}``` (replacing the {{APPLICATION_ID}} and {{REDIRECT_URI}} tokens for the ones for the app) 
    * the admin user will be asked to consent for only the statically defined permissions
    * app users will still be asked to consent for all dynamically defined permissions

### Use the MSAL JS login method
* what are the key patterns?
    * client credential flow
        * default in MSAL 2.0
    * implicit flow (no longer recommended)
        * default in MSAL 1.0
    * confidential client  
* app should try to obtain a token from the cache silently first then resort to either popup or redirect based methods when a UI required error is received.
* lets talk code...

### References
https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki
