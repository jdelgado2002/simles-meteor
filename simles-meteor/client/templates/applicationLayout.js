Template.ApplicationLayout.events({
	'click .logout' : function(){
		Meteor.logout();
		Router.go('/');
	}
});