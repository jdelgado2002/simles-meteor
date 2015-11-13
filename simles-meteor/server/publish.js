Meteor.publish('clients', function() {
  if (this.userId) {
    return Clients.find({owner: this.userId});
  } else {
    this.ready();
  }
});

Meteor.publish('contacts', function() {
  if (this.userId) {
    return Contacts.find({owner: this.userId});
  } else {
    this.ready();
  }
});