App.OpportunitiesNewController = Ember.ObjectController.extend({

  actions: {
    createOpportunity: function(){
      // Get the title set by the "Title" text field
      var title = this.get('title');
      if (!title.trim()) { return; }

      // Save the new model
      this.get('model').save();

      // Clear the form
      this.set('model', this.store.createRecord('opportunity'));
      this.transitionTo('opportunities');
    }
  }

});

App.VolunteersSignupController = Ember.ObjectController.extend({

  actions: {
    registerVolunteer: function(){
      // Get the name set by the "Name" text field
      var name = this.get('name');
      if (!name.trim()) { return; }

      // Save the new model
      this.get('model').save();

      // Clear the form
      this.set('model', this.store.createRecord('volunteer'));
      this.transitionTo('volunteers');
    }
  }

});

