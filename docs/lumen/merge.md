## Merging external datasets
The datasets you wish to merge should have at least one column in common, for instance, an **‘Identifier’** or a **‘Country code’**. Based on this common column, Lumen will be able to piece those datasets together.  


![Merging external datasets](media/merge_external_datasets.gif)

To start the merge transformation, open a dataset you want to merge data into  and click on the +Transform button. You’ll see ‘Merge datasets’ option in the dropdown. Clicking on it will open up a new window, where you need to make a few choices for the merge to happen.  

- In Dataset 1 pick a merge column.
- Choose a Dataset 2 you want to merge data from and pick a merge column here too
- If Dataset 2 contains repetitive data and Dataset 1 – unique data, you need to choose which data from monitoring form should be selectively pulled into the registration form. This is what we call **'aggregation strategy'**. The most common strategy is to join the most recent values. To do that, pick a column containing a date, for instance **‘Submittted at’**. Then pick **‘latest’**. If Dataset 2 doesn’t contain repetitive data, you don’t need to pick anything in **‘aggregation strategy’** column.
- Choose columns you want to merge from Dataset 2 
- Click on the ‘Merge’ button
 

The history on merge transformation will be recorded in the transformation log, showing a list of columns that were merged.


## Merging Akvo Flow datasets
When merging datasets in Lumen the main requirement is that the datasets you wish to merge have at least one column in common, for instance, an **‘Identifier’** or a ‘Country code’. Based on this common column, Lumen will be able to piece those datasets together.    

In case of Flow, datasets coming from one monitoring survey, have the **'Identifier'** column in common. This column holds the data point ID that connects registration form data with monitoring forms data. Lumen automatically marks this column as unique to make it easier for you to merge the datasets. 

When handling Flow monitoring data you have two possibilities to  merge registration form data into a monitoring form dataset, or to merge monitoring form data into a registration form dataset. When new data comes in, you can update a merged dataset the same way as with other Akvo Flow datasets. In the case of merged datasets you need to update both datasets. This will trigger automatic updates in all associated visualisations and dashboards.  

### Merge registration form data into a  monitoring form dataset
If you want to see the change over time for a specific data point or for all data points, you merge the registration information into a monitoring from dataset. This way you add information that defines the datapoint that you can use in your analysis. Because your monitoring dataset may hold multiple submissions per data point (one data point has data on more rows), the registration form data you merge in will be copied to each row point to the data point.

![Merge registration form data](media/merge_registration_form_data.gif)


To start the merge transformation, open the dataset containing monitoring data and click on the +Transform button. You’ll see ‘Merge datasets’ option in the dropdown. Clicking on it will open up a new window, where you need to make a few choices for the merge to happen.  

- In Dataset 1 Make sure the common **‘Merge column’** is correct. In Akvo Flow datasets, Lumen automatically defaults it to ‘Identifier’
- Choose Dataset 2 you want to merge data from (this is your registration form). **‘Merge column’** will be defaulted to ‘Identifier’ here as well
- Choose columns you want to merge from Dataset 
- Click on the **‘Merge’** button
 
The history on merge transformation will be recorded in the transformation log, showing a list of columns that were merged.


### Merge monitoring form data into the registration form 
If you want to see the latest status of your datapoint, or the status of the datapoint when you started your data project, you merge the data from the monitoring form into the registration form. In this case, in the registration form dataset one row is one data point and you will be adding, for example, the latest value for each data point to the rows.  

To start the merge transformation, open the dataset containing registration data and click on the +Transform button. You’ll see **‘Merge datasets’** option in the dropdown. Clicking on it will open up a new window, where you need to make a few choices for the merge to happen.  

- In Dataset 1 Make sure the common **‘Merge column’** is correct. In Akvo Flow datasets, Lumen automatically defaults it to ‘Identifier’
- Choose a Dataset 2 you want to merge data from (this is your monitoring form). **‘Merge column’** will be defaulted to ‘Identifier’ here as well
- Choose the aggregation strategy. Since monitoring form contains repetitive data and registration form – unique data, you need to choose which data from monitoring form should be selectively pulled into the registration form. The most common strategy is to join the latest monitoring values. To do that, choose a date column in ‘Aggregation strategy’, for instance ‘Submittted at’. Then pick ‘latest'
- Choose columns you want to merge from Dataset 2 
- Click on the **‘Merge’** button

The history on merge transformation will be recorded in the transformation log, showing a list of columns that were merged.