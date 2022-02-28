# Meteorite Explorer App 

## Next JS app that fetches data from Nasa API to display a table with content based on meteorites that landed on earth.

### Overview
This project was created as a submission piece for Voyage 38 with Chingu. The goal of this project is to demonstrate my skills as a developer by connecting front end with backend development by fetching data from a NASA API and display that data on to the front end, through the use of a table. The project makes primary use of a search filter to search for specific data needed. There are no limits to the search filter, the user can find anything such as the mass, geolocation, name, id etc of a particular meteorite. 

### Features 
The project's two main features includes: 
  - Search Filter 
      - The search filter allows users to filter through the data that was fetched. Inputs put into the search bar will only be rendered after clicking the search button.
      - If "" is entered into the search filter the results will show all data. It will show all 1000 results when "" string is entered.
      - If search button is pressed again after submitting an empty string, the results will reset to the original home page, with pagination enabled. (100 on each row)
  - Pagination
      - defaulted only to when all data is displayed, when the search button is pressed the pagination will dissapear and all results will be displayed on page

### Running the Project 
Locally: 
Simple download the project from github repository, and then use "npm i " to install all dependencies, then run the command "npm run dev" to start the development server on localhost:3000.
Live: 
Click the link [here]. This will direct you the live link available. 

### Dependencies 
  - Next JS
  - React JS