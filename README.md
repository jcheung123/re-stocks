# Re-Stocks: A Stocks Watchlist Portfolio made with React 📈
Many users, including myself have trouble staying organized with the different stocks they want for different investing purposes. Now, with Re-Stocks, users have the creativity to keep track of different stocks in a personal portfolio; and have the ability to save company profiles, real-time market data, and preview historical trends.


## User Stories

General Users - Allowed to view and search different stocks with real time information.

Authenticated Users - In additional to general user functionality, users are allowed to create portfolio, add to portfolio and delete stocks.


## App Screenshots

### Landing Page

<img src = "/public/appImages/landing.png">

### Portfolio Page

<img src = "/public/appImages/portfolio.png">


## Relationship Modelling - ERD

<img src = "/public/appImages/relationships.png">


## Technologies Used
- React
- NodeJS
- ExpressJS
- MongoDB
- JWT Authentication
- Finnub API


## Next Steps/Icebox Items
1. Allow logged in users to add the number of shares they wish to have in their porfolio (percentage of different stocks in various sectors)
2. Generate stats page based what users have in their portfolio 
3. Allow users to create different portfolios for different investing purposes (have to update models)
4. Styling of the app
  
## Accessing the App/Contributions 

- Clone this repo and register for an API key from https://finnhub.io/
- Create a `.env` file and add the following keys: `DATABASE_URL`, `REACT_APP_API_KEY`, and `SECRET`
- Run `npm i`, then `npm run build`
- Start the app in separate terminals by running `npm run start` and `nodemon server`, respectively
