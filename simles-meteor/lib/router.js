Router.configure({
  layoutTemplate: 'ApplicationLayout'
});


Router.route('/', function () {
	if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('splash');
  } else {  
  	this.render('dashboard');
  }
});


Router.route('/login', function(){
	this.render('login');
});

Router.route('/join', function(){
	this.render('join');
});

Router.route('/contacts', function(){
  this.render('contacts');
});

Router.route('/clients', function(){
  this.render('clients');
});

Router.route('/dashboard', function(){
  this.render('dashboard');
});