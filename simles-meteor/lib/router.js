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

//authentication routes
Router.route('/login', function(){
	this.render('login');
});

Router.route('/join', function(){
	this.render('join');
});

//Lists
Router.route('/contacts', function(){
  this.render('contacts');
});

Router.route('/clients', function(){
  this.render('clients');
});

//details

Router.route('clientShow', {
  path: '/clients/:_id',
  data: function(){    return Clients.findOne(this.params._id);  },
  action: function() {    this.render('clientShow');  }
});

//dashboard

Router.route('/dashboard', function(){
  this.render('dashboard');
});