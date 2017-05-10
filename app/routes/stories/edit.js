import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    return this.store.findRecord('story', params.story_id);
  },

  actions: {
    saveStory(story) {
      let dueDate = new Date(story.get('dueDate'));
      story.set('dueDate', dueDate);
      story.save().then(() => this.transitionTo('story'));
    }
  }
});
