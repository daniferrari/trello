import DS from 'ember-data';

export default DS.Model.extend({

  isValid: Ember.computed.notEmpty('name'),
  disabled: Ember.computed.not('isValid'),
  // storyIdValid: Ember.computed.notEmpty('storyId'),
  // isValidd: Ember.computed.and('nameValid', 'storyIdValid'),

  name: DS.attr('string'),
  storyId: DS.belongsTo('story')
});
