/*
We want to create modules because we want to keep pieces of code that are related to one another together inside seperate independent and organized units.

In each of these modules, we'll have variables and functions that are private which means that they're only accesible inside the module. We want it like this because so no other code can override our data. Hence it'll be safe. We're also going to have public methods which will be exposed to the public.

So that other functions and modules can use them. And this is called data encapsulation. Data encapsulation allows us to hide the implementation details of a specific module from the outside scope, so that we only exposed a public interface which is sometimes called an API.
*/

var budgetController = (function() {
    


})();

var UIController = (function () {

    //Some code


})();


// These modules are completely independent, meaning there will be no intereaction between ever. When it comes to building complex app such as this one. A concept to note is "seperation of concerns". A Seperation of Concerns basiicaly means each part of the application should only be interested in doing one thing independently. These two modules don't even each other exists. What we need to do now is create another module that acts a liason between these two. We need a way to read data from the User Interface and then add that information in the budgetController (eg. new expense).

var appController = (function(budgetCtrl, UICtrl){



})(budgetController, UIController);
