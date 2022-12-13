## Creating and editing a survey
Each survey in Akvo Flow is created to capture data on a different subject. A survey can consist of one or multiple forms, which hold your questions that are organised into question groups. This chapter will show you how to create and edit a survey. 



Creating and editing a survey
First, make sure you are in the right folder in which you want to create the survey. Then, click the ‘Create new survey’ button in the upper right corner. This creates a new survey, which will be shown in the folder. If you have any subfolders, it will be shown below these.

To start editing the survey, click ‘edit’. This will display the survey editor, as shown below.




Survey settings
In the survey editor you can customise your survey by changing its settings. You can give it a tile or decide if your survey is meant for monitoring, and more. 



A lot is happening here, so we have numbered the areas of interest. Let’s go over them one by one:

Indicates the number of forms in the survey. A new survey has zero forms.
Indicates if this is a monitoring survey or not.
The title of the survey. A short title to describe the survey. On the device, this will be shown as the title of the survey as well.
Language: the master language of the survey. In addition to this, any number of translations can be added later. The default master language is English. Note: You can type your forms in any language you want. You do not need to change this setting in that case. This setting is used when you translate your forms to another language. 
Button to add a form to the survey.


After changing the various settings, click ‘Save’.



Next step 
The next step you want to do is to create a form. Read more here.

## Deleting a survey
To delete a survey, click on the ‘delete’ icon on the survey. You will be asked to confirm whether you want to delete the survey.





Note: You cannot delete a survey for which data has already been collected. If you are sure you want to delete the survey anyway, please contact Akvo Flow support staff, who can assist you with this.

## Setting up a monitoring survey
Taking a survey of something, be it a water point, a tree, or a school, is usually a one-time event. You collect data, analyse the data, take action, and that’s it. But in many cases, you also want to go back at a later date, and do a follow-up: is this pump still working? Has the tree grown? Has that schools’ latrine been repaired? This is what we call monitoring: observing facts about something, some ‘entity’ (machine, pump, person, etc.), which has an identity and can be tracked over time. An identity is a set of attributes (id, serial number, name, etc.) that uniquely identify an entity.

The core idea of monitoring is to create ‘data points’, to which information about a data point can be added. Multiple forms can be added to a single survey, which together capture different aspects of a data point. One form is used to create a new data point, and the other forms are used to add additional information to an existing data point. Also see Monitoring - tracking things over time for the whole story on how to use monitoring.

Creating a monitoring survey
A monitoring survey consists of a single survey, which has multiple forms inside. To create a monitoring survey, follow these steps:

To add multiple forms to a survey, you first need to enable monitoring on the survey. Check the checkbox ‘Enable monitoring features’. When this has been enabled, you can create multiple forms, as shown below. In addition, you need to select the form, which will be used to create new data points. By default, this is the first form that can be filled in. Other forms will just be able to update existing data points.




Create the forms you need. In the form that will be used to create new data points, there are two checkboxes, which are important.

The first one is Use as data point name, which is shown on free text questions. When this is checked, the answer to this question will become part of the ‘name’ of the data point. This will be shown in lists on the device, and can be used to search data points. By default, this is off. This should only be enabled for one or two questions, which will help to identify the data point, such as an id, or a name. Multiple values will be added together separated by a dash ‘-‘.

The second one is Use as data point location, which is shown on geolocation questions. When this is checked, the location captured by this question will be used as the main location of the data point. By default, this is turned on.

Be sure that the right form has been selected as registration form, in the settings of your survey.  

## Moving surveys
You can move a survey from one folder to another by clicking on the ‘move’ icon. The selected survey turns green, after which you can navigate to a different folder and select ‘Move here’. This will move the survey to the new location.


Select a survey for moving

The survey is selected and can be moved

Select the new folder and then click on "Move here"

The survey is now in its new location

## Copying a survey
To copy a survey, click ‘Copy’ on the survey in the list. The survey will turn green, which means it is ready to be copied. You can now navigate to another folder, or stay in the same folder, and click the ‘Copy here’ button in the top. You will get a popup screen informing that the copy has started, and that you can go to the Messages tab to see the progress. The survey does not appear immediately. When go to a different tab and go back to the survey tab and go the folder again, the survey will appear. The word ‘copy’ has been added to the survey name.


## Template surveys and locked questions
More and more organisations are putting effort into understanding how their different projects contribute to their overall goals and impact. In practice, this means, that projects now also collect indicator data relevant to the organisation as a whole. Such data must be collected in a consistent way to allow for aggregation and disaggregation on the organisational level.

This has implications for how you design your surveys. For the organisational indicators, these questions need to be asked in a consistent way, with the same question definitions (the text, variable names, limitations, dependencies, etc) in order to be consistent on the organisational level. However, projects still need to have the flexibility to collect data they need as well.

In collaboration with a few of our partners, we have developed a prototype feature to support this need. 

What is it? 
A survey is set to act as a template. This means, that questions in this surveys can be locked. When creating a new survey, you can choose to use a blank survey or to use a template. Once the new survey is created from a template, the locked questions cannot be edited. All unlocked questions can be changed. New questions and question groups can be added. Entire question groups can be deleted, even if all the questions in this group are locked. You can lock one question, or lock them all depending on your needs.



How does it work? 
A survey is designed in Flow – as usual.
If you want to use this survey as a template, in the survey settings click to mark as a template. 
Now you can see the setting Make this question locked when copied on each question of the survey form. Once this survey template is used to create a new survey, the locked questions cannot be edited.
Go to create a new survey and select From template. Select the template you want to use and the new survey will be created for you. Make sure to check in the Messages tab that is survey creation is completed.

