## Automatic entry using Write API
If you are working within an organisation that has a large project portfolio and would like to visualise this on Akvo RSR, this might seem like a tough job to enter all of these manually. The maintenance of a large collection of projects is also a task that could take up a lot of time.

To tackle this issue, we have developed the functionality to be able to work with outputs from Project Management Systems owned and maintained by the organisations themselves. This allows for project content to be created, maintained and updated from within the existing processes and practices of the organisation's staff. Taking an export from this system allows all the correct information to be transferred directly to the RSR database, making the task of adding many projects much simpler.

At the moment we are working with an XML format of file. Based on the IATI standard, this file needs to include the base set of information required to visualise a project in RSR, but can also include all the additional information used for IATI reporting. This allows organisations willing to utilise this feature to get double the benefit from exporting a file - adding projects to IATI as well as reporting their activities in IATI. Both of these help to improve the open and transparent practices of the organisation.

This process requires some discussion with the Akvo RSR team to ensure that agreements can be made on data requirements, common working and schedules. It can take some time to get all these items in place, but the overall process has a very beneficial effect on productivity and performance and can help to streamline internal activities and remove additional burdens of reporting in multiple places.

## Using the API to show RSR information in a custom format
By using the API you can basically extract all the information you want from your projects and show this in your own preferred style. 

## RSR read partner API
Background information
The RSR API can be found on this URL http://rsr.akvo.org/rest/v1/, which is based on the Django Rest Framework. In addition, an automatically generated page, by Swagger, shows all API endpoints and their fields: http://rsr.akvo.org/rest/docs/.

API Access
In order to get read access to the API, an API key based on an RSR user is needed. This key can be provided by contacting Akvo staff. An 'Authorization' header should be set with the API key as follows:

Authorization: Token <API key>

Dataset
The full RSR dataset, except for privacy sensitive data like password hashes, is exposed through the RSR API.

Example resource
An example resource, taken from http://rsr.akvo.org/rest/v1/project_update/4684/, will show the following JSON output:


Filters and parameters
It is possible for any resource to filter on several fields, such as project or partner, by adding a parameter with the id of the object. E.g. ?project=2 to filter on project id 2. In addition, there are several standard parameters that go for every resource:

 - format: Either json or xml. Defaults to html.</li><li><code>limit: The number of objects per page. Defaults to 30, with a max of 100.
- ordering: Order on any field. Prepend an '-' to reverse ordering.

API code of conduct
When using the Akvo RSR API, please respect our API Code of Conduct.

## RSR write API
Background information
For background information on the write API, see the read API documentation. It works in a similar manner.

Methods
The following methods are allowed:

GET (see read API)</li><li><code>POST for adding a new object to the database</li><li><code>PUT for updating all fields of an existing object</li><li><code>PATCH for updating a subset of the fields of an existing object
DELETE for deleting an object
Access
Since not every API user should be able to just add, update or delete any object, we work with object level permissions based on the user's organisation and role. Please consult with the Akvo staff to see what level of access is needed for your account.

## Your API Key
You can find your organisation's API Key in My RSR section.

Just go to My Details tab and you will see it in the bottom right corner, below My Organisations.