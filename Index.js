function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}
//Array of Question object
var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Javascript is an ___ language?", ["function", "Object-Oriented", "Object-Based", "Assembly-language"], "Object-Based"),
    new Question("Which one of the following also known as Conditional Expression:", ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"], "immediate if"),
    new Question("Which of the following type of a variable is volatile?", ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"], "Mutable variable"),
    new Question("Which of the following is not javascript data types?", ["Null type", "Undefined type", "Number type", "All of the mentioned"], "All of the mentioned"),
  ];
//we will be creating object of Quiz
function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.index=0;
}

//returns true if all questions of the quiz are covered
Quiz.prototype.isQuizOver=function(){
    
    return this.index===this.questions.length;
}

//prints the final score of the participant 
Quiz.prototype.printScore=function(){
    var percent=(this.score/this.questions.length)*100
        document.getElementById("quiz").innerHTML=`<h1> Marks scored : ${this.score} </h1><h2>Score Percentage = ${percent}%</h2>`
}

//loads the next questions
function loadNextQuestion(){
    if(quiz.isQuizOver()){
        
        quiz.printScore();
    }
    else{
        
        document.getElementById("question").innerText=quiz.questions[quiz.index].text;
        for(var x=0;x<quiz.questions[quiz.index].choices.length;x++){
            var choice="choice"+x
            var choice1=quiz.questions[quiz.index].choices[x]
            document.getElementById(choice).innerText=choice1
            checkAnswerOnClick("btn"+x,choice1)
            progress=quiz.index+1
            document.getElementById("progress").innerText=`Question ${progress} of ${quiz.questions.length}`
        }
    }
}


//once any option is marked
function checkAnswerOnClick(button,choice){
    document.getElementById(button).onclick=()=>{

        if(quiz.questions[quiz.index].answer===choice){
            quiz.score++;
        }
        quiz.index++
        loadNextQuestion();
        

    }
}

var quiz=new Quiz(questions)
loadNextQuestion();
