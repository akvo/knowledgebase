## What is Akvo Flow's API 
An API, Application Programming Interface, can be understood as a set of requirements that make it possible for one application to talk to another, to move information from one application to another. APIs do all this by “opening up” some of a program’s internal functions to the outside world in a limited fashion. In other words, an API is a messenger that allows applications to interact with each other.

The Akvo Flow REST API is a read-only API, and in version 2, that enables an organisation/user to use a third party application to request data gathered with Akvo Flow. Being a read-only API means that we currently only support GET requests. You can get data out of Flow but not use the API to put data in Flow. All requests to the API are sent over HTTPS and are accessed via the base URL. The Akvo Flow Sync API provides a way of getting changes that happened in the system. This is useful for synchronizing data changes out of Akvo Flow to an external system in near real-time fashion.



## Setting up your API user 
To be able to use both APIs you need to be a user on Akvo Flow. This means the Akvo Flow organisational admin needs to add you to the Akvo Flow online workspace and give you access to the folder and survey you need.

Secondly, you need to sign up to Akvo Flow and log in. When accessing Akvo Flow, you need to sign up and create a user account to log in. Logging in using the Google account log in is not sufficient to use the API. You need to sign up, create and verify your user account and then log in to Flow. 

## Documentation
All information regarding the Akvo Flow API can be found here in the GitHub repository and its Wiki page.



## Fair use policy 
We have a set of rules of conduct in place that guide how we wish our APIs to be used. We would like to ask you to respect the API servers and others who may be using them at the same time. The more calls you make to the API, the less resources are available for other developers (and yes, the more Akvo’s operating expenses go up). We would like to ask you to limit the calls to maximum one a day.

For more details on the API code of conduct please read this blog.

