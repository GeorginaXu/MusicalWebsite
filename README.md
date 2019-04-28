# Georgia's Musical Website

created: 04/14/2019

updated: 04/27/2019

## Required Module

   This project is using node.js module, express.js module, and sqlite3 module. In order to run the project on your local machine, you need to have all three modules installed. To install, use terminal commands: 
   ```npm install <module name>```




## Run the Project

   To run the project, using the cd command in your terminal to go to the folder that contains all the files (including images). To start the node.js server, simply run ```node node.js```
   
   After starting the server, open one of your web browsers (i.e. Chrome) and go to ```127.0.0.1:8080```. You will see the front page of my website displayed.
   
   

## Website Structure

### Home Page

### Matching Quiz

### Musical Profile Page

### Browse Page

### Tickets Page
 

## Database Structure
 
   The database was built using SQLite and SQLite Studio. The database file is stored as a file called **Musicals.db**. It contains THREE tables:
   
   - Date 
   
   ![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo/date_table.png)

   - Musicals
   
   ![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo/musicals_table.png)
   
   - Price 
   
   ![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo/price_table.png)
   
   The **Date** table contains the time period that a musical is going to be in theater; it has THREE columns: 
   - Name : represents the name of the musical
   - Start Date : represents the time of the musical's debut (in format YY-MM-DD)
   - End Date : represents the last day the musical is going to be in theater (in format YY-MM-DD)
   
   The **Muscials** table contains the information for all musicals that are stored in the database; it has SEVEN columns: 
   - Title : represents the name of the musical
   - City : represents the city where the musical is showed （Values: New York City, London, Other Cities in the US）
   - Type of Musical : represents the genre of the musical  （Values: Romance, Disney, Teen, History, Horror, Magic, Crime, Comedy）
   - Description : represents a full description of the musical, including background context and content
   - Duration : represents how long the musical is (in hours)
   - minAge : represents the age appropriate for the musical 
   - On Tour : a boolean value representing if the musical is on tour
   
   The **Price** table contains the price range for all musicals; it has FOUR columns: 
   - Name : represents the name of the musical
   - Lowest Price : represents the lowest ticket price for the musical 
   - Highest Price : represents the highest ticket price for the musical 
   - Link : a link to ticketmaster.com for booking the tickets of the musical
   

### Demo

![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo1_04:14.gif)


![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo2_04:14.gif)



## Future Direction

   One major area that needs future work is to link the front-end webpage with the backend database. In the Matching Quiz section, quiz result needs to be queried from the database using user's answer for the quiz questions. In the Browse section, all information of musicals needs to be queried from the database and displayed dynamically on the webpage. Filter also needs to be added so that users can filter musicals based on their perferences. In the Ticket section, booking link for all musicals also need to be queried from the database.
