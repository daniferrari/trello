import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  storyId: DS.belongsTo('story')
});
