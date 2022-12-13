## Devices list
The Devices list in the Devices tab shows you all the devices with the Flow app installed that link to your Flow space. The list is organised by last connection, so you can easily see which devices have actively been in use recently and easily distribute surveys to your enumerators capturing data in the field. 




In the Devices list you can see a lot of information about your devices: 

IMEI - an identifying number unique to each device that helps to identify it in our database
Device ID - a name you set on the device to help you identify each device
Device Group - the device group to which the device belongs; optional
Last Contact - the last time the device connected with the online space
Version - the version of the Flow app the device is running
The most important items are the Device ID, Last contact and version. If your device is without an ID, ask the enumerator to update her Flow app to the latests version. 



Managing device groups
Device groups allow you to organise the all devices attached to your Flow online space into smaller groups, so that when you create Assignments you can select a device group instead of having to select the devices individually. Each device can belong to only one device group. You do not have to put a device in a group. 



To create, change or delete a device group
Click the Manage Device Groups button. It will display a pop-up that gives you three choices: change the name of an existing group, create a new device group, and delete an existing device group. Fill out the form as appropriate and click Save to save changes, or Cancel to discard changes.

Change, create or delete a device group and click Save
To add a device or change the device group
Find the device(s) in the Devices List and tick the box next to each device in the first column in the table. Click 'Add to device group' in the upper right of the Device List. From the pop-up window that appears, select a device group from the dropdown and click OK to save changes, or Cancel to discard changes. You will see the name of the Device Group you just selected in the device row(s) in the Devices List.

Tick the box next to a device in the list and then click Add to device group. Select the device group to which you’d like to add devices and click Save.



To remove a device from a device group
Find the device(s) in the Devices List and tick the box next to each device in the first column in the table. Click “Remove from device group” in the upper right of the Device List. The pop-up window that appears will ask you to confirm the removal. Click OK to remove the device, Cancel to keep the device in it’s current group. You will see the name of the Device Group you just removed disappear from the device row(s) in the Devices List.

Tick the box next to a device in the list that you’d like to remove and then click Remove from device group. Click OK to confirm that you’d like to remove the device from the group.


## Assignments
The second tab under Devices is the Assignments tab. With Akvo Flow's assignments you send published survey forms to the Akvo Flow app for data collection. In the Assignments tab you manage you data assignments. Apart from sending published survey forms to the Akvo Flow app, you can also choose to send all or just a subset of data points, that have been collected for a survey, to a device for monitoring. Note that this applies only to monitoring surveys. Read more about monitoring with Akvo Flow.



Assignments list 
All assignments are listed in this page. Each assignment has a Name, Start Date and End Date. Organise your list by clicking on the headers. This way you can see which assignments start now or which have already passed their expiration date. This is also where you can create, edit and delete your assignments. 




Create a new assignment
To push your published survey forms to devices for data collection you need to create an assignment. To do so: 

Go to the Devices tab. 
Go to the Assignments subtab. 
Click the Create new assignment button. 
Enter the assignment name. The assignment name will appear in the Assignments List once you save it. 
Define the start date and expiration date. The start date and expiration date will determine the period of time the survey forms are sent to the devices. If you republish the form in this time period, the devices will get the updates automatically (if connected to a network). Please note, that the assignment dates do not prevent the enumerators from submitting data.
Select the survey and forms you want to assign. Once you select your survey, you will see the published forms appear in a list. You can assign one or all forms.
In Devices, click on the ADD button and you will be taken to a list of device groups. You can select device(s) or entire device groups to which you want to send the published forms. After selecting devices and/or device groups click the Add to Assignment button. Devices that appear in the left column are now part of the assignment and will receive the selected survey forms. In the case of monitoring surveys, these devices are able to download all the data points that have been submitted to the dashboard for the survey or a subset of the data points. On how to assign specific data points, check the explanation below. 
Once you have made all your selections, click the Save button at the bottom to save the assignment.
Saving an assignment will trigger the survey forms you selected to download to the devices you selected. You must open the Akvo Flow app to trigger the download and be connected to a network.  In addition to downloading the survey forms, the assignment also enables devices to download data points that have already been submitted to the online working space in case you assigned a monitoring survey to the device.

To edit or to delete an assignment, simply click on the action buttons next to it in the list. 




Assign data points to an enumerator for monitoring
In addition to sending survey forms to an enumerator's device, an assignment also enables an enumerator to download all data points that have been gathered and submitted from other enumerator's devices with the same monitoring survey. Note that downloading data points only applies to monitoring surveys. 

You can follow these steps to assign data points to an enumerator:

After adding a device to an assignment, select the device of a specific enumerator by clicking on it in the left column. 
In the main window you will notice that all data points have been assigned to the device. If you do not want this device to download any data points or you want to specify which data points it can download, click on Undo. 
To assign specific data points, click on the Assign data points dropdown and select By data point name or ID. A small window pane will open up to the right of the screen with a search box. Here you can type the first few letters of the data point name or the data point identifier and press enter and the corresponding data points will be listed. Select the ones you want to assign and click on the Assign button. The next time the enumerator selects Download on their phone, the assigned data points will be downloaded.
If you make a mistake when assigning, its possible to select the Edit button above the data points list in the main window, select the datapoint and click Remove.
You can also restore the possibility to download all data points by clicking on the Assign data points dropdown and selecting Assign all data points.
Once done, Save the assignment. 
Existing assignments holding monitoring surveys automatically get all data points assigned to the devices. You can change these assignments simply by editing the assignments. 



## Manual survey transfer
Manual Survey Transfer (formerly known as bootstrap) allows you to generate a file of a Akvo Flow survey you’ve already published that you can email to yourself or your colleagues to install on devices manually, in situations with low or no connectivity to a wireless or mobile network.

To create a survey file



In 01. Select survey, select the survey group where you stored the survey for which you want to create a file. Once you make a selection in the dropdown, you’ll see all the published surveys from that group appear in the text box to the right.

Select a survey from the list by clicking to highlight and then click “+ add selected surveys” below the box. You’ll see the survey you selected appear to the right in “Preview Survey selection.”

In 02. Notification details, enter the email address to which you’d like to send the survey file. You can enter just one email address.

Once you are finished, click the Send File button. You’ll see a confirmation pop-up. Check your email for an email from “FLOW” with the subject line “FLOW bootstrap file.” The email will contain a link to download the bootstrap file. Click the link to download the file to your computer. Do NOT unzip the file.

Once you’ve done that, follow these steps:

Connect your device to a computer using a USB cable, so you can see the contents of the SD card.
Go to the folder akvoflow/inbox
Copy the survey zip file to the inbox folder
Disconnect the device, and start the FLOW app. The new form will automatically be found.