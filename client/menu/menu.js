/**
 * Created by paul on 5/16/16.
 */

Template.menu.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes');
  });
});

Template.menu.helpers({
  recipes: ()=> {
    return Recipes.find({inMenu: true});
  }
});