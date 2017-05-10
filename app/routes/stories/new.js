import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('storie');
  },

  actions: {
    saveStorie(storie){
      storie.save().then(() => this.transitionTo('stories/new'));
    }
  }
});
