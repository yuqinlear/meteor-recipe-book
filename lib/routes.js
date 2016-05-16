/**
 * Created by paul on 5/15/16.
 */

if (Meteor.isClient) {
  Accounts.onLogin(function(){ // by package gwendall:auth-client-callbacks
    FlowRouter.go('recipe-book');
  });

  Accounts.onLogout(function(){ // can only be ran at client
    FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect){
  if (!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('recipe-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
  GAnalytics.pageview();
  BlazeLayout.render('mainLayout', {main: 'recipes'});
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipeSingle',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {main: 'recipeSingle'});
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    BlazeLayout.render('mainLayout', {main: 'menu'});
  }
});

FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action() {
    BlazeLayout.render('mainLayout', {main: 'shoppingList'});
  }
});