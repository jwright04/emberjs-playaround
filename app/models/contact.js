import DS from 'ember-data';

export default DS.Model.extend({
  InputName: DS.attr('string'),
  InputEmailFirst: DS.attr('string'),
  InputMessage: DS.attr('string')
});
