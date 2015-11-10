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