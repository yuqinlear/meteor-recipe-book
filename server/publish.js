/**
 * Created by paul on 5/15/16.
 */
Meteor.publish('recipes', function(){
  return Recipes.find({author: this.userId});
});

Meteor.publish('singleRecipe', function(id){
  check(id, String);
  return Recipes.find({_id: id});
});