# NFA-to-DFA-converter

<p align="center">
  <a href="" rel="noopener">
<!--  <img width=200px src="client\src\components\Naviga/tionBar\image3.png" background='white' alt="Project logo" style='background-color: white'></a> -->
 <img width=200px src="client\src\components\NavigationBar\image.png" background='white' alt="Project logo" style='background-color: white'></a>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-table-of-contents)

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment (AWS INFO)](#deployment)
- [Built Using](#built_using)
- [Packages](#packages)
- [Remaining Task](#remainingtasks)
<!-- - [Authors](#authors)
- [Acknowledgments](#acknowledgement) -->


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-about-a-name--abouta)

## 🧐 About <a name = "about"></a>

Operator of a film festival submissions platform intended for filmmakers and festival organizers. 
The company helps clients discover, submit and get tickets to film festivals and creative contests
<br> 


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-getting-started-a-name--getting_starteda)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [NodeJs](https://nodejs.org/en/)


### Installing

A step by step series of examples that tell you how to get a development env running.

- Clone this repository
- Open command line in the cloned folder,
  
  - To install dependencies, run `npm install`
  
  - To run the application for development,
    - run `npm start` in the root folder to start the backend app
    
    - then run `npm start` in the client folder to start the frontend app

- Open [localhost:3000](localhost:3000) in the browser


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-running-the-tests-a-name--testsa)

## 🚀 Deployment <a name = "deployment"></a>

#### Creds for AWS Account: ####
- Email: <b >allfilmfestival0@gmail.com</b><br>
- Password: <b>Shrikant@6789</b>

#### Important info for the AWS EC2 instance ####

<div>
- Steps to start/update the EC2 instance.<br>
<b>(i)</b> Complete the SSH authentication from the terminal on UNIX OS or with PUTTY on Windows OS.</br>
<b>(ii)</b> After SSH auth completion, run command to change to the root user.</br>

```bash
sudo su -
``` 
<b>(iii)</b> run cd all_film_festival to got to the project folder</br>
<b>(iv)</b> the project folders can be updated as required.</br>
<b>(v)</b> After updation, run the command to restart the backend server</br>

```bash
pm2 restart server.js
``` 
<b>(vi)</b> Finally run the command to restart the nginx server.</br>

```bash
sudo systemctl restart nginx
``` 
</div>
</br>
  
  Extras:
- <p>to access/edit the nginx config file, run the command <b>
```bash
sudo nano /etc/nginx/sites-available/default
``` 
- </b> in the root folder.</p>
- <p>If any error occurs, always check the <b>nginx config file, server.js file</b> and the <b>axios setup file</b> first.</p>



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-built-using-a-name--built_usinga)

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJs](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-authors-a-name--authorsa)

## 📦 Packages Used <a name = "packages"></a>

<details>
<summary>npm packages</summary>
<br/>

| Frontend | Backend |
|:--------|:------|
| `aws-sdk`@`2.939.0` | `@hookform/resolvers`@`2.6.0` |
| `bcryptjs`@`2.4.3` | `@material-ui/core`@`4.12.2` |
| `cookie-parser`@`1.4.5` | `@material-ui/icons`@`4.11.2` |
| `cors`@`2.8.5` | `@material-ui/lab`@`4.0.0-alpha.60` |
| `dotenv`@`10.0.0` | `@reduxjs/toolkit`@`1.6.0` |
| `express`@`4.17.1` | `@testing-library/jest-dom`@`5.14.1` |
| `generate-password`@`1.6.1` | `@testing-library/react`@`11.2.7` |
| `joi`@`17.4.0` | `@testing-library/user-event`@`12.8.3` |
| `jsonwebtoken@`8.5.1` | `axios`@`0.21.1` |
| `mongoose-slug-generator`@`1.0.4` | `bootstrap`@`4.6.0` |
| `mongoose-slug-updater`@`3.3.0` | `create-react-class`@`15.7.0` |
| `mongoose-type-phone`@`1.0.1` | `dateformat`@`4.6.3` |
| `mongoose`@`5.13.2` | `fetch`@`1.1.0` |
| `multer-s3-transform`@`2.10.3` | `jquery`@`3.6.0` |
| `multer-s3`@`2.9.0` | `react-bootstrap-date-picker`@`5.1.0` |
| `multer`@`1.4.2` | `react-bootstrap`@`1.6.1` |
| `nodemailer`@`6.6.3` | `react-chartjs-2`@`3.0.4` |
| `nodemon`@`2.0.9` | `react-datepicker`@`4.2.0` |
| `passport-jwt`@`4.0.0` | `react-dom`@`17.0.2` |
| `passport`@`0.4.1` | `react-hook-form`@`7.9.0` |
| `razorpay`@`2.0.6` | `react-icons`@`4.2.0` |
| `react-phone-input-2`@`2.14.0` | `react-phone-input-2`@`2.7.1` |
| `react-rating-stars-component`@`2.2.0` | `react-phone-number-input`@`3.1.25` |
| `sharp`@`0.28.3` | `react-rating-stars-component`@`2.2.0` |
| `shortid`@`2.2.16` | `react-redux-loading-bar`@`5.0.0` |
| | `react-redux`@`7.2.4`
| | `react-router-dom`@`5.2.0`
| | `react-scripts`@`4.0.3`
| | `react-top-loading-bar`@`2.0.1`
| | `react`@`17.0.2`
| | `redux-devtools-extension`@`2.13.9`
| | `redux`@`4.1.0`
| | `web-vitals`@`1.1.2`
| | `xlsx`@`0.17.0`
| | `yup`@`0.32.9`

</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-authors-a-name--authorsa)
<!-- 

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-acknowledgements-a-name--acknowledgementa)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
 -->

## 🛠️ REMAINING TASKS <a name = "remainingtasks"></a>
  - ADMIN:
    - Frontend
    - Backend
        - Creating modifiable percentage cut on ticket sale
        - Payment processing and record keeping for mailing service and ticket sales
  - SUBMITTER:
    - Frontend
      - Film submission criteria page
    - Backend
      - logo upload
      - payment module

  - ORGANIZER:
    - Frontend
      - date validation
    - Backend
      - profile cover image
      - logo upload
      - payment module
      - In app event result sending(currently results are sent only using email)

