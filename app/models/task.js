import DS from 'ember-data';

export default DS.Model.extend({

  isValid: Ember.computed.notEmpty('name'),
  disabled: Ember.computed.not('isValid'),

  name: DS.attr('string'),
  story: DS.belongsTo('story')
});
