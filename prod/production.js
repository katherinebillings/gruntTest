var myApp = {
  mainMessage : "welcome to the app!",

  mainGreeting() {
    console.log('hey! welcome to my app. hope you love it!');
  }
};

myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, 'I am a module');
  },

  doSomething() {
    console.log('called doSomething from module1');
  }
};

myApp.module1 = {
  doSomethingElse() {
    console.log('called doSomethingElse from module2');
  }
};

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('oh hello');

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }

  myFunc();
})();
