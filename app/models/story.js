import DS from 'ember-data';

export default DS.Model.extend({

  titleValid: Ember.computed.notEmpty('title'),
  dueDateValid: Ember.computed.notEmpty('dueDate'),
  isValid: Ember.computed.and('titleValid', 'dueDateValid'),

  title: DS.attr('string'),
  dueDate: DS.attr('date'),
  tasks: DS.hasMany('task')
});
