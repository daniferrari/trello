import Ember from 'ember';

export default Ember.Controller.extend({
  story: null,
  actions:
  {
    listStories(story){
      this.set('story', story);
    }
  }
});
