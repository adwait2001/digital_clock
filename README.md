# digital_clock
Digital stopwatch using MERN stack

# How To Start
*First Run npm install to install all dependencies </br>
*Start Backend server :: cd backend && node index.js  </br>
*Start Database :: Ran on local mongodb using mongoose  </br>
                 /Users/mongodb/bin/mongod.exe --dbpath=/Users/MongoDB-data </br>
*Start Frontend server:: cd frontend && npm start </br>

![Screenshot (50)](https://user-images.githubusercontent.com/61514605/94598565-be950600-02ac-11eb-85f7-8c562ec50015.png)

# Project in Brief

*Project is implemented using MERN stack (MONGODB,EXPRESS.JS,REACT.JS,NODE.JS) </br>
*Clock Design is implemented using basic CSS </br>
*To increase timer we use set interval function in react js along with use effect in React hooks </br>
*Remeber least count is 10ms and not 1ms so 10ms is considered as 1ms due to minimum counter in browser (Does not hamper accuracy)  </br>
*The buttons are activated using clear interval and when user clicks Reset data is POST using API created in backend </br>
*Time in milli-sec is stored in Database using time model </br>
*Using react-router user can redirect to history where table is displayed </br>
*In table time is displayed using axios by using GET api created in backend </br>
*Basic Calculations are used to convert Ms into sec,min and hours 

![Screenshot (52)](https://user-images.githubusercontent.com/61514605/94598594-cc4a8b80-02ac-11eb-8700-7470dbcbee38.png)
