import SimpleSchema from 'simpl-schema';

console.log('Simpleschema demo is running');

new SimpleSchema({
  name: String,
}).validate({
  name: 2,
});

