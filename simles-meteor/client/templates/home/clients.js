var ITEMS_INCREMENT = 20;
Session.setDefault('clientsLimit', ITEMS_INCREMENT);

Deps.autorun(function() {
  Meteor.subscribe('clients', Session.get('clientsLimit'));
});

Template.clients.helpers({
	clients: function(){
		return Clients.find({});
	},
	moreResults: function() {
		return !(Clients.find().count() < Session.get("clientsLimit"));
	}
});

Template.clients.events({
	"submit .new-client": function(event, template){
    event.preventDefault();

    var name = template.$('[name=clientName]').val();

    Meteor.call("addClient", name);

    template.$('[name=clientName]').val("");
    },
    "click .more-clients": function(event, template){
    	event.preventDefault();
    	Session.set('clientsLimit', Session.get('clientsLimit') + ITEMS_INCREMENT);
    }
}
	
);
