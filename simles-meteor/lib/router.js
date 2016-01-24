Router.configure({
  layoutTemplate: 'ApplicationLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
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
Router.route('/login', {
	name : "login"
});

Router.route('/join', {
	name : "join"
});

//Lists
Router.route('/contacts', {
  name : "contacts"
});

Router.route('/clients', {
  name : "clients"
});

Router.route('/tasks', {
  name : "tasks"
});
//details

Router.route('clientShow', {
  path: '/clients/:_id',
  data: function(){    return Clients.findOne(this.params._id);  },
  action: function() {    this.render('clientShow');  }
});

//dashboard

Router.route('/dashboard', {
  name : "dashboard"
});