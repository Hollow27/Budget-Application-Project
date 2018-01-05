/*
We want to create modules because we want to keep pieces of code that are related to one another together inside seperate independent and organized
units. In each of these modules, we'll have variables and functions that are private which means that they're only accesible inside the module.
We want it like this because so no other code can override our data. Hence it'll be safe. We're also going to have public methods which will
be exposed to the public. So that other functions and modules can use them. And this is called data encapsulation.
Data encapsulation allows us to hide the implementation details of a specific module from the outside scope, so that we only exposed a
public interface which is sometimes called an API.
*/

// Budget Controller
var budgetController = (function() {

    // We will now work on storing our income and expense data using function constructors.
    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };

    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };

    /* We need a data structure to keep track of the budget itself and the percentages
       We should always aim to aggregate large amounts of information into one data strcuture.
    */
    var data = {
        allItems: {
          exp: [],
          inc: []
        },
        totals: {
          exp = 0,
          inc = 0
        }
    };

    return {
        addItem: function(type, des, val) {
          var newItem, ID;

          // [1, 2, 3, 4, 5,], next ID = 6
          // We want the ID = last ID + 1. No redundancy
          // Create new ID
          ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

          // Create new item based on 'inc' or 'exp' type
          if (type === 'exp') {
            newItem new Expense(ID, des, val);
          } else if (type === 'inc') {
            newItem new Income(ID, des, val);
          }

          // Push it into our data structure
          data.allItems[type].push(newItem);

          // Return the new element
          return newItem;
        }
    };



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

        // reading value of type. We have the three input types stored in these three variables

        /* The controller is going to call this method and it wants receive all of these values.
        So we have to return something here. How do we return three values at the same time.
        The best thing to do is simply return an object containing these three as properties.
        Instead of having three seperate variables. We should return an objet with three properties
        which are these three.
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


/* These modules are completely independent, meaning there will be no interaction between ever.
   When it comes to building complex app such as this one. A concept to note is "seperation of concerns".
   A Seperation of Concerns basiicaly means each part of the application should only be interested in
   doing one thing independently. These two modules don't even each other exists. What we need to do now is
   create another module that acts a liason between these two. We need a way to read data from the User Interface
   and then add that information in the budgetController (eg. new expense).
*/

/*
Event Listener for input button will be here. This is the central controller that will decide
where I want ot control for each event and delegate to each controller.
*/


// Global App Controller
var appController = (function(budgetCtrl, UICtrl){

  // We can now come down here into our global app controller and have appController gain access to the DOMstrings.

  // Created a function to store all of our Event Listeners
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings(); // need the DOM elements for event listeners
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || even.which === 13) {
          ctrlAddItem();
        }
    });

  };


  // function when we want to add a new item
  var ctrlAddItem = function() {

    // TO DO LIST:
    // When someone hits the button

      var input = UICtrl.getInput();

    // We want the field input Data
    // Add the item to the budget Controller
    // Add the new item to the User Interface
    // Calculate the budget
    // Then Display the budget on the UI
  };

/* The problem we're now going to solve is that
   before we created a function to organize our event listeners.
   They were always going to be called because they were embedded within
   the immediately invoked function expression (IIFE). However, now that they're
   encompassed within a function, we're going to create a public intialization function to call those
   event listeners.
*/
      // since we want it public, we need to return it into an object.
      return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners()
        }
      }; // event listeners will only setup as soon as we call the init function and we do that outside the controller


})(budgetController, UIController);

appController.init(); // without this line of code, nothing will ever happen. Event listeners wont get called and without them
                      // them there will be no data.
