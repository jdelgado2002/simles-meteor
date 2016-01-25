Template.nav.events({
	'click .logout' : function(){
		Meteor.logout();
		Router.go('/');
	},
	"click .nav a" :function(event, template){
		template.$(".nav").find(".active").removeClass("active");
		template.$(this).parent().addClass("active");
	}
});

