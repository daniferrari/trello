import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    return this.store.findRecord('storie', params.storie_id);
  },

  actions: {
    saveStorie(storie){
      storie.save().then(() => this.transitionTo('storie'));
    }
  }
});
