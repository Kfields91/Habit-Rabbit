# Habit-Rabbit

---

<a href="https://img.shields.io/badge/License-MIT-brightgreen"><img src="https://img.shields.io/badge/License-MIT-brightgreen"></a>

## Table of Contents

- [Description](#description)
- [User Story](#User-Story)
- [Requirements](#Requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Contact Information](#contact-information)
- [Future Developments](#future-developments)
- [Technology Used](#Technology-Used)

### Description

Habit-Rabbit is a habit tracking app that offers the ability to add and track daily habits in order to promote self awareness. Our goal is to provide details that enable the user to adjust their habits according to their life goals.

### User Story

AS A USER who wants to change bad habits

I WANT an app where I can track each habit

SO THAT I can stay consistent and accountable

### Requirements

- Use Node and Express server
- Use Handlebars template engine
- Must be backed by MYSQL database and include sequelize ORM
- Utilize GET and POST routes
- Must be deployed through Heroku with data
- Include one new technology, package or library
- Polished UI
- Proper MVC paradigm folder structure
- Quality code
- Must protect API keys with environmental variables

### Installation

###### ATTENTION: Node.js and MySQL installation is required prior to use

- Open terminal
- Clone the repo: https://github.com/Kfields91/Habit-Rabbit.git
- cd into new directory
- add a `.env` file into your directory (outside of folders)

- In `.env` create variable `DBPASSWORD=` equal to your specific MySQL database password
- Npm i all the required dependancies in the package.json file
- Run server.js
- open localhost:8080 in your browser

### Usage

- Run server.js
- open localhost:8080 in your browser

<b> or </b>

go directly to this Heroku link where the app is deployed

- https://powerful-inlet-28196.herokuapp.com/

### Contribution

If you would like to contribute to this project reach out to our contributors. Contact Information can be found below in [Contact Information](#contact-information)

### Contact-Information

<b>Repository</b>

https://github.com/Kfields91/Habit-Rabbit

##### Contributors:

[Lexi's Github Profile](https://github.com/puakehaulani)

[Daoyuan's Github Profile](https://github.com/lincguo93)

[Kelsea's Github Profile](https://github.com/KFields91)

[Joesph's Github Profile](https://github.com/JoeyFlygare)

### Future Developments

- Creating a dynamic globol page where all users can choose to share their habit's progress and goals with others

- Inspirational messaging for those in need of encouragment
- Ability to chat with other users
- a longer record of data (currently a week)

### Technology Used

- Node.js
- express
- express-handlebars
- MySQL & Sequilize
- mysql2
- Passport
- Nodemon
- bcryptjs
- dotenv
- express-session
