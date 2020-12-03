var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;
const Btn = document.getElementById("Btn");
const timer = document.getElementById("timer");

var questions = [
    {
        question: "What does HTML stands for?",
        a: "Hypertext Machine language.",
        b: "Hypertext and links markup language.",
        c: "Hypertext Markup Language.",
        d: "Hightext machine language.",
        answer: "C"
      },
    {
        question: "Which of the following HTML Elements is used for making any text bold?",
        a: "p tag",
        b: "i tag",
        c: "li tag",
        d: "b tag",
        answer: "D"
      },
    {
        question: "What are variables used for in JavaScript Programs?",
        a: "Storing numbers, dates, or other values",
        b: "Varying randomly",  
        c: "Causing high-school algebra flashbacks",
        d: "None of the above",
         answer: "A"
      },
    {
        question: "What should appear at the very end of your JavaScript?",
        a: "The /script tag",
        b: "The script tag",
        c: "The END statement",
        d: "None of the above",
        answer: "A"
      },
      {
        question: "What's the correct way to specify padding for all 4 sides at once?",
        a: "padding: top bottom left right;",
        b: "padding: top left bottom right;",
        c: "padding: top right bottom left;",
        d: "padding: left right top bottom;",
        answer: "C"
      },
      {
        question: "Which of the following property is used to set the background color of an element?",
        a: "background-color",
        b: "background-image",
        c: "background-repeat",
        d: "background-position",
        answer: "A"
      },
      
    ];

    function get(x){
        return document.getElementById(x);
      }

// this function renders a question for display on the page
function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h3>You got "+correct+" of "+questions.length+" questions correct!!</h3>";
      get("test_status").innerHTML = "Test completed!!";
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    chD = questions[pos].d;
    // display the question
    test.innerHTML = "<h3>"+question+"</h3>";
    // display the answer options
    // the += appends to the data we started on the line above
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);



// set timer
var timeleft = 180
document.getElementById("btn").addEventListener("click", function(){
var downloadtimer = setInterval(function timer(){
    document.getElementById("counter").innerHTML = timeleft + "seconds remaining";

        timeleft-=1;
            if (timeleft <=0 ){
                clearInterval(downloadtimer);
                Document.getElementById("counter").innerHTML = "AWW time done!!"
            }
        }, 3000);

});