# Georgia's Musical Website

created: 04/14/2019

updated: 04/27/2019

## Project Motivation

Broadway musicals are getting more popular nowadays, including not only the ones in the US, but also those worldwide. I am a huge fan of broadway musicals, and I had lots of experience booking tickets online. However, none of the websites I have used are very efficient and user-friendly. Most of the time, nothing but the names of the musicals are displayed on the home page, which is not helpful at all for people to decide which show they are interested in. In order to check if the type of the musicals fits my preference and if the ticket price is affordable, I have to go down the entire list and click on each musical one by one. This whole process is very time-consuming and it is not a good user experience for people who are new to broadway musicals. As a solution to this problem, this project aims to design a new website that can filter out musicals quickly and provide users with automatic smart suggestions that better fit the users’ preferences.


## Required Module

   This project is using node.js module, express.js module, and sqlite3 module. In order to run the project on your local machine, you need to have all three modules installed. To install, use terminal commands: 
   ```npm install <module name>```




## Run the Project

   To run the project, using the cd command in your terminal to go to the folder that contains all the files (including images). To start the node.js server, simply run ```node node.js```
   
   After starting the server, open one of your web browsers (i.e. Chrome) and go to ```127.0.0.1:8080```. You will see the front page of my website displayed.
   
   

## Website Structure

### Home Page

![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo/front-page.gif)

The Home Page contains a top navigation bar with five tabs --- HOME, ABOUT, MATCH, BROWSE, TICKET. It has a website header, a slide show with 6 musical images, an About section, and a button to the Matching Quiz.


### Matching Quiz

![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo/quiz-page.gif)

The Matching Quiz has five questions, each with different number of options. The user can select the answers that match with their own interests. After clicking the Submit button, the website will provide the user a smart suggestion about what musical to watch, based on their quiz answers.

### Musical Profile Page

![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo/quiz-result.gif)

By clicking the title of a musical, the website will take the user to a profile page for the musical they clicked. The profile page contains an image of the musical, the name, its opening/closing date, duration, and a detailed description. In addition, the profile page also contains a Ticket Booking button which takes the user to the ticketmaster website.


### Browse Page

![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo/browse.gif)

The Browse page can be accessed from any other pages in this website, by clicking on the tab in the navigation bar. It shows the entire list of musicals that are stored in the database. There is a filtering bar on the top of the page, with four filtering conditions, which enables the user to filter out musicals based on Location, Type, Age Range, and Price. 


### Tickets Page
 
![](https://github.com/GeorginaXu/MusicalWebsite/blob/master/demo/ticket-page.gif)

The Ticket page can be accessed from any other pages in this website, by clicking on the tab in the navigation bar. It shows the entire list of musicals that are stored in the database, and also includes a booking link for each musical. There is a selection bar on the top of the page, where the user can quickly select the musical they wanna watch, rather than scrolling down the entire list.



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

