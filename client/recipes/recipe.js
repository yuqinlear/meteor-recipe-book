/**
 * Created by paul on 5/16/16.
 */
Template.recipe.onCreated(function() {
  this.editMode = new ReactiveVar(false);
});

Template.recipe.helpers({
  updateRecipeId: function() {
    return  this._id;
  },
  editMode: function() {
    // unlike binding to the session, here you get the variable of this specific instance of the template
    return Template.instance().editMode.get();
  }
});

Template.recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash' : function() {
    Meteor.call('deleteRecipe',  this._id);
  },
  'click .fa-pencil' : function(event, template) {
    template.editMode.set(!template.editMode.get());
  }

});