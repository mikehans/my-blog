---
path: "/blog/microsoft-identity-ms-600"
date: "2020-11-11"
title: "Microsoft Identity (MS-600)"
author: "Mike Hansford"
tags:
    - MS-600
    - Microsoft Identity
    - Microsoft 365
---
## Summary of what I think matters so far
OK, so Microsoft Identity is a large component of MS-600: Building Applications and Solutions with Microsoft 365 Core Services. It's the exam you need for the <a href="https://docs.microsoft.com/en-us/learn/certifications/m365-developer-associate" target="_blank" rel="noreferrer"> Microsoft 365 Certified: Developer Associate certification</a>. 

Identity is a large and complex domain of knowledge, so I want to unpack it a bit here. Importantly, what is the required knowledge and what are the constraints for the exam?

This was going to be a single page post, but it long quickly. So, refer to the Table of Contents below.

## Contents
1. [Register an application](microsoft-identity-ms-600-part-2)
1. [Implement Authentication](microsoft-identity-ms-600-part-3)
1. Configure Permissions to Consume an API
1. Implement Authorisation to Consume an API
1. Implement Authorisation in an API
1. Create a Service to Access Microsoft Graph

## Glossary
(Updated 25 Nov 2020)

* Account type
* Delegated permissions
* Consent
    * Related to OAuth 2.0, the user will be asked to provide their consent to allow the app to do a number of things. These are called scopes and is a common term in OAuth 2.0 / OIDC. I don't know if these are common terms though. In Microsoft 365, some scopes require admin consent. These are typically very powerful scopes or ones that could potentially alter the infosec stance of the tenant. These are scopes like Read and Write All User Profiles (User.ReadWrite.All)
* OpenID Connect
    * Based on OAuth 2.0, OpenID Connect (OIDC) is an extension to OAuth 2.0 for authentication. OAuth 2.0 was never intended for authentication, only authorisation.
* OAuth 2.0
    * Is concerned with authorisation, once a user has authenticated. It requests that the user consent to what is called a set of "claims", which are the specific permissions the app is requesting such as reading your basic profile information or reading your calendar.
    * A good intro I found for both OIDC and OAuth 2.0 is <a href="https://www.youtube.com/watch?v=996OiexHze0" target="_blank" rel="noreferrer">OAuth 2.0 and OpenID Connect (in plain English) from Nate Barbettini (on the Oktadev channel)</a> This talk helps to deal with some of the jargon that is in common use with OIDC and OAuth 2.0.
* Home tenant
    * The tenant to which an app is deployed to is called the home tenant. AAD in this tenant hosts the application object and also has a service principal.
* Appliction object
    * An AAD object that maps 1 to 1 with an application
* Service principal object
    * An object that is created in each tenant to which the app is shared (in the case of a multi-tenant app)
    * A service principal is also created in the home tenant.
    * This is the object to which users and groups are registered in. In the case of multi-tenant apps, it allows tenant admins to control their own user permissions.
* Guest account
* Authentication
    * Identifies who you are
    * Uses OIDC
* Authorisation
    * Determines what you can do
    * Occurs only after authentication
    * Uses OAuth 2.0
* Topology
    * relates to whether the application is a SPA, web app, web API, mobile or desktop app, or daemon app

## Resources
The <a href="https://docs.microsoft.com/en-us/learn/paths/m365-identity-associate/" target="_blank" rel="noreferrer">Microsoft Learn path for Identity</a> is a good starting point.
The <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/" target="_blank" rel="noreferrer">Azure Active Directory documentation</a> is also really important.
