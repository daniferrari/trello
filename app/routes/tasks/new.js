import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  return Ember.RSVP.hash({
    task: this.store.createRecord('task'),
    story: this.store.findAll('story')
    })
  },

  actions:
  {
    saveTask(newTask){
      let storyId = this.controller.get('story');
      let story = this.get('store').peekRecord('story', storyId);
      newTask.set('story', story);
      newTask.save().then(() => this.transitionTo('task'));
    }
  }
});
