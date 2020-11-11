---
path: "/blog/microsoft-identity-ms-600-page-2"
date: "2020-11-11"
title: "Microsoft Identity (MS-600) - Register an application"
author: "Mike Hansford"
tags:
    - MS-600
    - Microsoft Identity
    - Microsoft 365
---
[Return to Table of Contents for the Microsoft Identity (MS-600) posts](microsoft-identity-ms-600)

This is referring to the process of creating the application object in AAD.
![Azure Active Directory App Registrations page](./aad-app-registrations.png)

### Determine the supported account type
This is talking specifically about the account type for the application object you are creating.
![Azure Active Directory new registration showing account types](./aad-new-registration.png)

The key here is what do each of the four options under "Supported account types" grant / prohibit? Clicking on the "Help me choose" link is helpful to understanding these.
* Accounts in this organisational directory only (single tenant)
    * an application has something called a home tenant
    * only users in the same home tenant as the application can sign into it (_mikehans1_ in the example)
    * a user must be a _user or guest_ of this tenant
    * this is for use in line of business applications
    * will use SAML tokens for single sign-on (SSO)
* Accounts in any organisational directory (AAD multi-tenant)
    * users in AAD organisations outside of the home tenant can sign into the application
    * useful for ISVs who are sharing (selling!) their application to many clients who use AAD
        * you still have the issue of separating the application's data by tenant - this doesn't magically resolve it
* Accounts in any organisational directory and personal Microsoft accounts
    * this will allow multi-tenancy AAD customers as well as customers using Microsoft accounts
    * will allow for the widest set of Microsoft identites to be used
* Personal Microsoft accounts only
    * intended for consumer-facing scenarios using Microsoft accounts

I've noticed that only Microsoft accounts have been addressed here. How do you allow for people using Google, Twitter or Facebook accounts (et. al)? This will be an area of experimentation. I'm pretty sure I've seen it already though.

#### Resources for this criteria
<a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#register-an-application" target="_blank" rel="noreferrer">Microsoft Documentation for account types</a>

### Select authentication and client credentials for app type and authentication flow
#### App types
OK, so here I'm a little confused. Are "app types" the items that appear in the dropdown list under the Redirect UI
![Redirect URI dropdown list opened](redirect-uri-dropdown.png)

or is it the list of application types listed under the <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant" target="_blank" rel="noreferrer">Quickstarts</a> section of the MS Doc for Identity, being
* Single Page Apps
* Web apps
* Web APIS
* Mobile and desktop apps
* Daemon apps

or is it the list of <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-supported-account-types" target="_blank" rel="noreferrer">Application scenarios</a> that appear in the docs, being:
* Single-page apps
* Web app that signs in users
* Web app that calls web APIs
* Protected web API
* Web API that calls web APIs
* Desktop app that calls web APIs
* Daemon app
* Mobile app that calls web APIs

Frankly, these start to sound very similar. The approach I'm taking for now is to understand these and hope that the question leads me sufficiently.
#### Outstanding questions
* ~~How does account type relate to topology?~~

#### Resources for this criteria
* <a hrf="https://docs.microsoft.com/en-us/learn/modules/getting-started-identity/4-different-account-types" target="_blank" rel="noreferrer">MS Learn page</a>