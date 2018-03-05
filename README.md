# Summary
 A full-stack Node.js/Express app that tracks carbon emissions based on logged user trips via different modes of transport

# Overview
Carbon Commute is intended to display and compare the carbon footprint of a given trip traveled with the same trip via a different mode of transport. Users select a mode of transport (such as car, truck, bicycle, bus, etc) and the start and end points of their trip. Passing user input through the Google Maps API, the user is returned information on trip distance and estimated time based on the mode of tranport selected. Using carbon emissions data from the EPA to, the user is provided the carbon footprint of each trip based on the distance multiplied by the kg of carbon dioxide per mile for each respective transport mode. Using the charts.js JavaScript library to create visuals of user data, the user can see the carbon footprint of their selected trip compared to the would-be carbon footprint of other modes. Users can also choose to save a give trip to the database to see the ratio of selected modes overtime as well as their total carbon footprint for all saved trips. Again, users are able to compare the actual carbon footprint of their logged trips with what the footprint would have been via other modes of transport. 

# Demo

TBD

# Technologies Used
* Node.js
* Express
* CSS Animate
* Charts.js
* Google Maps API
* Postgres
* Sequelize

# Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /modes/post | Passes user data through Google Maps API and sends data to front-end
POST | trips/post | Adds trips data to the database
GET | trips/get | sends data from database to the front-end 


# Next Steps

