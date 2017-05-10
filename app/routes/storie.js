import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('storie');
  },

  actions: {
  deleteStories(storie) {
    let confirmation = confirm('Are you sure?');
    if (confirmation) {
      storie.destroyRecord();
    }
  }
}
});
