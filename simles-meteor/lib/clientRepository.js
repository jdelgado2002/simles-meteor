Meteor.methods({
	addClient: function(name){
		if (! Meteor.userId()) {
      		throw new Meteor.Error("not-authorized");
      	}

      	Clients.insert({
      		name:name,
      		createdAt:new Date(),
      		owner: Meteor.userId()
      	});
	}
});