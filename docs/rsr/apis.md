## Automatic entry using Write API
If you are working within an organisation that has a large project portfolio and would like to visualise this on Akvo RSR, this might seem like a tough job to enter all of these manually. The maintenance of a large collection of projects is also a task that could take up a lot of time.

To tackle this issue, we have developed the functionality to be able to work with outputs from Project Management Systems owned and maintained by the organisations themselves. This allows for project content to be created, maintained and updated from within the existing processes and practices of the organisation's staff. Taking an export from this system allows all the correct information to be transferred directly to the RSR database, making the task of adding many projects much simpler.

At the moment we are working with an XML format of file. Based on the IATI standard, this file needs to include the base set of information required to visualise a project in RSR, but can also include all the additional information used for IATI reporting. This allows organisations willing to utilise this feature to get double the benefit from exporting a file - adding projects to IATI as well as reporting their activities in IATI. Both of these help to improve the open and transparent practices of the organisation.

This process requires some discussion with the Akvo RSR team to ensure that agreements can be made on data requirements, common working and schedules. It can take some time to get all these items in place, but the overall process has a very beneficial effect on productivity and performance and can help to streamline internal activities and remove additional burdens of reporting in multiple places.

## Using the API to show RSR information in a custom format
By using the API you can basically extract all the information you want from your projects and show this in your own preferred style. 

## RSR read partner API
Background information
The RSR API can be found on this URL [http://rsr.akvo.org/rest/v1/](http://rsr.akvo.org/rest/v1/), which is based on the Django Rest Framework. In addition, an automatically generated page, by Swagger, shows all API endpoints and their fields: [http://rsr.akvo.org/rest/docs/](http://rsr.akvo.org/rest/docs/).

### API Access
In order to get read access to the API, an API key based on an RSR user is needed. This key can be provided by contacting Akvo staff. An 'Authorization' header should be set with the API key as follows:

```
Authorization: Token <API key>
```

### Dataset
The full RSR dataset, except for privacy sensitive data like password hashes, is exposed through the RSR API.

### Example resource
An example resource, taken from [http://rsr.akvo.org/rest/v1/project_update/4684/](http://rsr.akvo.org/rest/v1/project_update/4684/), will show the following JSON output:

```
{ <span class="pl-s"><span class="pl-pds">"</span>locations<span class="pl-pds">"</span></span>: [], <span class="pl-s"><span class="pl-pds">"</span>photo<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>/media/cache/8a/55/8a552db266c27df2239d783aae3b1997.jpg<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span>: <span class="pl-c1">4684</span>, <span class="pl-s"><span class="pl-pds">"</span>created_at<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2014-02-11T15:49:33<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>last_modified_at<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2014-02-11T15:49:33<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>project<span class="pl-pds">"</span></span>: <span class="pl-c1">2</span>, <span class="pl-s"><span class="pl-pds">"</span>user<span class="pl-pds">"</span></span>: <span class="pl-c1">661</span>, <span class="pl-s"><span class="pl-pds">"</span>title<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Weather Conditions<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>The heavy rains have come early in Nairobi. January and February are considered the hottest months giving way to rains in March.<span class="pl-cce">\n</span>Rain seems to bring out the worst - traffic, hiked fares, to mention a few.<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>language<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>en<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>primary_location<span class="pl-pds">"</span></span>: <span class="pl-c1">null</span>, <span class="pl-s"><span class="pl-pds">"</span>photo_caption<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>photo_credit<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>video<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>video_caption<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>video_credit<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>update_method<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>M<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>user_agent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>uuid<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>notes<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>absolute_url<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>/en/project/2/update/4684/<span class="pl-pds">"</span></span> }
```

Or the XML version (add format=xml as a parameter):

```
<<span class="pl-ent">root</span>> <<span class="pl-ent">locations</span>/> <<span class="pl-ent">photo</span>>/media/cache/8a/55/8a552db266c27df2239d783aae3b1997.jpg<!--<span class="pl-ent"-->photo> <<span class="pl-ent">id</span>>4684<!--<span class="pl-ent"-->id> <<span class="pl-ent">created_at</span>>2014-02-11T15:49:33<!--<span class="pl-ent"-->created_at> <<span class="pl-ent">last_modified_at</span>>2014-02-11T15:49:33<!--<span class="pl-ent"-->last_modified_at> <<span class="pl-ent">project</span>>2<!--<span class="pl-ent"-->project> <<span class="pl-ent">user</span>>661<!--<span class="pl-ent"-->user> <<span class="pl-ent">title</span>>Weather Conditions<!--<span class="pl-ent"-->title> <<span class="pl-ent">text</span>> The heavy rains have come early in Nairobi. January and February are considered the hottest months giving way to rains in March. Rain seems to bring out the worst - traffic, hiked fares, to mention a few. <!--<span class="pl-ent"-->text> <<span class="pl-ent">language</span>>en<!--<span class="pl-ent"-->language> <<span class="pl-ent">primary_location</span>/> <<span class="pl-ent">photo_caption</span>/> <<span class="pl-ent">photo_credit</span>/> <<span class="pl-ent">video</span>/> <<span class="pl-ent">video_caption</span>/> <<span class="pl-ent">video_credit</span>/> <<span class="pl-ent">update_method</span>>M<!--<span class="pl-ent"-->update_method> <<span class="pl-ent">user_agent</span>/> <<span class="pl-ent">uuid</span>/> <<span class="pl-ent">notes</span>/> <<span class="pl-ent">absolute_url</span>>/en/project/2/update/4684/<!--<span class="pl-ent"-->absolute_url> <!--<span class="pl-ent"-->root>
```

### Filters and parameters
It is possible for any resource to filter on several fields, such as project or partner, by adding a parameter with the id of the object. E.g. 
```
?project=2 
```
to filter on project id 2. In addition, there are several standard parameters that go for every resource:

- format: Either json or xml. Defaults to html.
- limit: The number of objects per page. Defaults to 30, with a max of 100.
- ordering: Order on any field. Prepend an '-' to reverse ordering.

### API code of conduct
When using the Akvo RSR API, please respect our [API Code of Conduct](https://akvo.org/policies/).

## RSR write API
Background information
For background information on the write API, see the read API documentation. It works in a similar manner.

Methods
The following methods are allowed:

 - GET (see read API)
 - POST for adding a new object to the database
 - PUT for updating all fields of an existing object
 - PATCH for updating a subset of the fields of an existing object
 - DELETE for deleting an object

### Access
Since not every API user should be able to just add, update or delete any object, we work with object level permissions based on the user's organisation and role. Please consult with the Akvo staff to see what level of access is needed for your account.

## Your API Key
You can find your organisation's API Key in My RSR section.

Just go to My Details tab and you will see it in the bottom right corner, below My Organisations.