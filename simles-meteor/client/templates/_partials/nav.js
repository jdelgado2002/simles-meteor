Template.nav.events({
	'click .logout' : function(){
		Meteor.logout();
		Router.go('/');
	}
});