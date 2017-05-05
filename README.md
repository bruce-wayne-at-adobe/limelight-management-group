# Wayne's World
***
## Welcome to Wayne's World; it's party time. Excellent!
###### I am an aspiring technical-product guy.
## I am not from a traditional CS background, but that's a good thing!
#### My economics background provide me many of the tools an effective product manager will need.
#### In addition to my experience with analysis and product management, I have spent nearly a year and a half learning how to build full-stack ruby-on-rails and javascript apps. 
##### Welcome to Wayne's World; it's party time!
***
# Motivation
### This project is a portfolio project which helps to answer the question of what I can do and why you may want to work with me; this is a type of fluid resume which showcases me and my creative sense of humor. 
## I decided to build my own technical blog, instead of going to a blogger or wordpress. I thought this would be a fun and appropriate for me to design my own as a project.
***
# Technology Used
## Built with:
+ NodeJS
+ ExpressJS
+ PostgreSQL
+ BootStrap
## APIs:
+ TwitterAPI

***
# Immediate Access via Heroku (Demo)
  [Link to Wayne's World project](https://waynes-world.heroku.com/)
***
# Installation Instructions
### To run this app successfully, you must have PostgreSQL installed. You can run the brew installation command:
    $ brew install postgresql
### If this is your first time installing Postgres with Homebrew, you'll need to create a database with the following command in your terminal/ commandline:
    $ initdb /usr/local/var/postgres -E utf8
### If you're in your project directory, you can run postgres and create the project database:
    $ psql
### You will then see your username set equal to the poundsign. It should look like the following:
    waynebanks=#
### You, then need to run the following to create your 'taskr' database:
    CREATE DATABASE dbname;
### At this point, you should have already done a pull from the master branch and done and NPM install.
    $ git pull
### then...
    $ npm install
### You can now run your server with:
#### If you have nodemon installed you can:
    $ nodemon app 
#### If you do not, you can install or just use our start script
    $ npm start  
### If this worked correctly, you should see:
    [nodemon] 1.11.0
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching: *.*
    [nodemon] starting `node app app.js`
    taskr is listening on port 3001!
### Navigate to localhost:3001 and take a look around!
    http://localhost:3001/
***




