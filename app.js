const express = require('express');
// const angular = require('angular');
// angular.module('myApp', [require('angular-route')]);
// const angularRoute = require('angular-route');
const queries = require('./database/db')
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});
const Twitter = require('twitter')
const twitter = new Twitter({
	consumer_key:  '1i4xBaLcDKnTEWhAzfy766PbV',
	consumer_secret: 'uX2H99NbktmVX4cGFKl7UVknOWCvAeBtnCQWErx6pEv54F1mSR',
	access_token_key: '722194500743868416-9zJUwW1prIqNJxtop4IO8cgDKfRnmbJ',
	access_token_secret: 'WxaysZ65LW3ggnzQBUSjOela29SQ612J0gVKuf6gSzRyo'
});

const count = 0;
const util = require('util');
// var ckStaticsPath = require('node-ckeditor');
// //... 
 
// app.use(express.statics(ckStaticsPath));	


app.use(express.static(__dirname + '/public'));
// set up template
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// twitter routes
app.get('/tweets', (req, res) => {
	var params = {screen_name: 'stdg_developer'};
	twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (error) {
  		  res.json({error: error.message});
    }
    else{
      let post = []
      for (let tweet of tweets){
        post.push(tweet)
      console.log("we're in the else box, boi!!", post)
      }
      res.render('tweets', {tweets: post});
    }
  });
})



app.get('/', (req, res) => {
	console.log('check in from login')
	res.render('index');
	})
app.get('/captains-log', (req, res) => {
  console.log('check in from captains-log')
  res.render('captains-log');
  })
app.get('/blog', (req, res) => {
  console.log('check in from blog')
  res.render('blog');
  })
app.get('/edit', (req, res) => {
  console.log('check in from edit')
  res.render('edit');
  })
app.get('/posts', (req, res) => {
  queries.getAll()
    .then( blogs => {
      console.log("this is the postsssss", req.body)
      res.render('posts', { blogs: blogs });   
    })
    .catch( error => {
      console.log('this is th error: ', error)
    })
  console.log('check in from posts')
})
app.post('/send', (req, res) =>{
  console.log('req.body heree!!!!!!', req.body)
  console.log('i guess, my post is working, huh?')
  queries.create(req.body)
  .then(post => {
    res.redirect('posts')
  })
  .catch( error => {
    res.send(`error ${error.message} ${error.stack}`)
  })
});
app.get('/edit/:id', (req, res) => {
  queries.getOnepost(req.params.id)
  .then( blog => {
  res.render('edit', { blog })  
  })
})
app.get('/posts/:id', (req, res) => {
  queries.getOnepost(req.params.id)
  .then( blog => {
    console.log('this is my g1p', req.body)
  res.render('show', { blog })  
  })
})

app.get('/', (req, res) => {
  console.log('check in from login')
  res.render('index');
  })


app.post('/delete/:id', (req, res) => {
  const yadi = req.params
  console.log(yadi)
  queries.delete(req.params.id)
  .then(edits => {
  res.redirect('/posts');  
  }).catch( error => {
  console.log('this is the error: ', error)
  })
})

app.post('/posts/:id', (req, res) => {
  console.log('this is req.body!!!!:', req.params)
  queries.edited(req.body.body, req.body.title, req.params.id, req.body.location, req.body.email)
  .then(blogs => {
  res.render('posts', {blogs});  
  }).catch( error => {
  console.log('this is the error: ', error)
  })
})
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('the server is now running on port: ' + port);
});

module.exports = app;