Meteor.subscribe('clients');


Template.clients.helpers({
	clients: function(){
		return Clients.find({});
	}	
});

Template.clients.events({
	"submit .new-client": function(event, template){
    event.preventDefault();

    var name = template.$('[name=clientName]').val();

    Meteor.call("addClient", name);

    template.$('[name=clientName]').val("");
    }
});
