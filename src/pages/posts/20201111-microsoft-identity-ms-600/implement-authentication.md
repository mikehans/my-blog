---
path: "/blog/microsoft-identity-ms-600-part-3"
date: "2020-11-25"
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
* Setting up the MSAL config is the important part here, eg.
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
    * Of these, only the clientId field is required
    * Defaults (for optional keys):
        * authority: "https://login.microsoftonline.com/common"
            * there are other authority URIs, particularly if using a national cloud. The <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/authentication-national-cloud" target="_blank" rel="noreferrer">national clouds documentation</a>  describes them as authentication endpoints
                * in particular, there are additional endpoints for
                    * US Government
                    * Germany
                    * China
        * redirectUri: unknown
            * interestingly redirectUri is listed as an optional key, however somewhere else I learned that this URI must match what is configured in the app registration, which begs the question:
                * What is the behaviour if I do not configure a redirectUri?
        * cacheLocation: sessionStorage
            * the only option is localStorage
        * storeAuthStateInCookie: false
            * the guidance is to set this to true if you are having trouble with IE 11 or Edge
            * The wiki article <a href="https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser" target="_blank" rel="noreferrer">Known issues on IE and Edge Browser</a> describes why this key may need to be set. However, the date on the article is 2018. I'd expect that with the introduction of Edge on Chromium (Edgeium?) this issue shouldn't exist for Edge anymore. As for IE 11? Well it's the zombie browser that will never die (so far) as it shares the lifecycle of Windows 10.
* MSAL caches tokens without programmer intervention
    * caching can take place in sessionStorage (default) or localStorage
    * there is a separate option to store in cookies if you are having trouble with IE11 or Edge - possibly the older non-Chromium Edge (storeAuthStateInCookie)
* token types
    * ID token
    * access token
    * refresh token
    * application token

* app should try to obtain a token from the cache silently first then resort to either popup or redirect based methods when a UI required error is received.


### Plan and configure scopes for dynamic or static permission
* scopes
    * permissions that a web API exposes that client apps can request access to
    * in MSAL, it is an array of strings representing the scopes that are requested (eg. "User.Read", "Mail.ReadWrite")
    * some scopes require admin consent such as User.ReadWrite.All
    * scopes are highly granular, allowing for narrowly defined permissions in order to allow for the minimum necessary set of permissions to be requested for the application to run

* static consent
    * consent requested upfront when a user first logs into the app

* dynamic consent
    * as a user access features of an app for the first time, the app can request additional consent such as the first time that a user accesses functionality to create calendar entries, the app can request the Calendar.Write scope.

### Use the MSAL JS login method
* what are the key patterns?
    * client credential flow
        * default in MSAL 2.0
    * implicit flow (no longer recommended)
        * default in MSAL 1.0
    * confidential client  
* lets talk code...

### References
https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki
