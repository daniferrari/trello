import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('story');
  },

  actions: {
    saveStory(newStory) {
      let dueDate = new Date(newStory.get('dueDate'));

      newStory.set('dueDate', dueDate);
      newStory.save().then(() => this.transitionTo('story'));
    },
  }
});
