/*
We want to create modules because we want to keep pieces of code that are related to one another together inside seperate independent and organized units.

In each of these modules, we'll have variables and functions that are private which means that they're only accesible inside the module. We want it like this because so no other code can override our data. Hence it'll be safe. We're also going to have public methods which will be exposed to the public.

So that other functions and modules can use them. And this is called data encapsulation. Data encapsulation allows us to hide the implementation details of a specific module from the outside scope, so that we only exposed a public interface which is sometimes called an API.
*/

// Budget Controller
var budgetController = (function() {



})();

// UI Controller
var UIController = (function () {

  /* we'll write a fn that we want to use in the other controller = public. This code will execute immediately
     and then the obj will return and be assigned in the UI Controller and the var and functions defined will stay
     in the closre even after the fn returns. The object that returns from this will have access to these private methods,
     functions and variables.
  */
  return {
    getInput: function() {
        return {
          type: document.querySelector('.add__type').value, // will be either inc or expense
          description: document.querySelector('.add__description').value,
          value: document.querySelector('.add__value').value
        };
        // reading value of type. WE have the three input types stored in these three variables
        /* The controller is going to call this method and it wants receive all of these values.
        So we have to return something here. How do we return three values at the same time. The best thing to do is simply return an object
        containing these three as properties. Instead of having three seperate variables. We should return an objet with three properties which are these three.
        */


    }
  };


})();


// These modules are completely independent, meaning there will be no intereaction between ever. When it comes to building complex app such as this one. A concept to note is "seperation of concerns". A Seperation of Concerns basiicaly means each part of the application should only be interested in doing one thing independently. These two modules don't even each other exists. What we need to do now is create another module that acts a liason between these two. We need a way to read data from the User Interface and then add that information in the budgetController (eg. new expense).
/*
Event Listener for input button will be here. This is the central controller that will decide
where I want ot control for each event and delegate to each controller.
*/

// Global App Controller
var appController = (function(budgetCtrl, UICtrl){

  var ctrlAddItem = function() {

    // TO DO LIST:
    // When someone hits the button

      var input = UICtrl.getInput();
      console.log(input);
    // We want the field input Data
    // Add the item to the budget Controller
    // Add the new item to the User Interface
    // Calculate the budget
    // Then Display the budget on the UI


  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || even.which === 13) {
        ctrlAddItem();
      }
  });

})(budgetController, UIController);
