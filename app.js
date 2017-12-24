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

  /* We're starting to have a lot of strings with the querySelector which is a problem.
     Imagine we make changes to the class names in the UI, then we would have to change the
     strings manually which could be expensive. Lets create an object where we store all of
     that data and since we're talking about the UI, it should be done in the UI Controller.
  */

var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'

};


  /* we'll write a fn that we want to use in the other controller = public. This code will execute immediately
     and then the obj will return and be assigned in the UI Controller and the var and functions defined will stay
     in the closre even after the fn returns. The object that returns from this will have access to these private methods,
     functions and variables.
  */
  return {
    getInput: function() {
        return {
          type: document.querySelector(DOMstrings.inputType).value, // will be either inc or expense
          description: document.querySelector(DOMstrings. inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
        };
        // reading value of type. WE have the three input types stored in these three variables
        /* The controller is going to call this method and it wants receive all of these values.
        So we have to return something here. How do we return three values at the same time. The best thing to do is simply return an object
        containing these three as properties. Instead of having three seperate variables. We should return an objet with three properties which are these three.
        */
    },

    /* Since we have a string in the global app controller, we need to change that as well. However
       However, the DOMstrings object we created is in the UI controller. What we can do is pass that
       object (DOMstrings) from the module to this one. We'll create something like the getInput method and create
       getDOMstrings. All we need in this function in this method here is to return our private DOMstrings into
       public scope.
    */
    getDOMstrings: function() {
        return DOMstrings;
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

  // We can now come down here into our global app controller and have appController gain access to the DOMstrings.

  var DOM = UICtrl.getDOMstrings();

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

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || even.which === 13) {
        ctrlAddItem();
      }
  });

})(budgetController, UIController);
