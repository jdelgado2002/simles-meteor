Meteor.publish('clients', function(limit) {
  if (this.userId) {
    return Clients.find({owner: this.userId}, 
      {limit: limit});
  } else {
    this.ready();
  }
});

Meteor.publish('contacts', function(limit) {
  if (this.userId) {
    return Contacts.find({owner: this.userId}, 
      {limit: limit});
  } else {
    this.ready();
  }
});