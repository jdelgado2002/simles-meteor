Router.configure({
  layoutTemplate: 'ApplicationLayout'
});


Router.route('/', function () {
	if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('splash');
  } else {  
  	this.render('home');
  }
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/login', function(){
	this.render('login');
});

Router.route('/join', function(){
	this.render('join');
});