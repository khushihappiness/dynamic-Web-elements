var player1_name= localStorage.getItem("player1_name");   
var player2_name= localStorage.getItem("player2_name");
var player1_score= 0;
var player2_score= 0;

document.getElementById("player1_name").innerHTML= player1_name  + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question turn : " + player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn : " + player2_name;

function send()
{

    var get_word= document.getElementById("word").value;
    var new_word= get_word.toLowerCase();
    console.log("The new word in lower case="+ new_word);

    var charAt1= new_word.charAt(1);
    console.log(charAt1);

    var length= Math.floor(get_word.length/2)
     var charAt2= new_word.charAt(length);
console.log(charAt2);

var length_minus_1= new_word.length - 1; 
charAt3 = new_word.charAt(length_minus_1); 
console.log(charAt3);

remove_charAt1 = new_word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_word + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in the lower case"+ answer)

    if(answer==word)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTMl=player1_score;
        }
        else{

            player2_score==player2_score+1
            document.getElementById("player2_score").innerHTMl=player2_score;
        }
    }

    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn : "+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn : "+player1_name;

    }

    if(answer_turn=="player2")
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn :"+player1_name;

    }
    else{
        answer_turn="player2";
        document.getElementById("player_answer").innerHTMl="Answer turn :"+player2_name;
    }

    document.getElementById("output").innerHtml="";
}

















