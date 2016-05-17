/**
 * Created by paul on 5/16/16.
 */

Template.newRecipe.events({
  'click .fa-close': function() {
    Session.set('newRecipe', false);
  }
});