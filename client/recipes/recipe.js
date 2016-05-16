/**
 * Created by paul on 5/16/16.
 */
Template.recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  }
});