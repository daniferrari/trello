import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('story');
  },

  actions: {
  deleteStories(story) {
    let confirmation = confirm('Are you sure?');
    if (confirmation) {
      story.destroyRecord();
    }
  }
}
});
