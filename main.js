


function getQuote() {
    var name = ["― Oscar Wilde " , "― Marilyn Monroe " , "― Frank Zappa" , "― Albert Einstein" , "― Marcus Tullius Cicero " , 
        " ― Bernard M. Baruch " , " ― William W. Purkey " , " ― Dr. Seuss " , " ― Mae West " , " ― Mahatma Gandhi " , " ― Robert Frost " , 
        "― J.K. Rowling" , "― Albert Camus" , " ― Mark Twain " , " ― Maya Angelou " , "― Elbert Hubbard " , "― Oscar Wilde " , " ― Mahatma Gandhi "

    ]


    var Quotes = ["“Be yourself; everyone else is already taken.”" , "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” " , 
        "“So many books, so little time.”" , "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” " , "“A room without books is like a body without a soul.” " , " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” " , 
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” " , " “You only live once, but if you do it right, once is enough.” " , 
        " “Be the change th you wish to see in the world.” " , " “In three words I can sum up everything I've learned about life: it goes on.” " , " “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” " , 
        " “If you tell the truth, you don't have to remember anything.” " , "“A friend is someone who knows all about you and still loves you.” " , " “To live is the rarest thing in the world. Most people exist, that is all.” " , " “Always forgive your enemies; nothing annoys them so much.” " , 
        " “Live as if you were to die tomorrow. Learn as if you were to live forever.” " , " “We accept the love we think we deserve.” " , " “Without music, life would be a mistake.” "
    ]

    var num = Math.floor( Math.random() * Quotes.length ) 
 
    

     document.getElementById("demo").innerHTML =Quotes[num] ;
     document.getElementById("demoN").innerHTML =name[num] ;

}





// var quotes = [
//     {quote:'“Be yourself; everyone else is already taken.”',author: '― Oscar Wilde '},
//     {quote:'“So many books, so little time.”',author: '― Bernard M. Baruch'},
//     {quote:'“In three words I can sum up everything I ve learned about life: it goes on.”',author: '― Elbert Hubbard'},
//     {quote:'“Live as if you were to die tomorrow. Learn as if you were to live forever.” ',author: '― Maya Angelou'},
//     {quote:' “Be the change th you wish to see in the world.” ',author: '― Albert Einstein'},
//   ];
  
//   function getQuote(){
//     var randomIndex = Math.floor(Math.random()*quotes.length);
//     document.getElementById("demo").innerHTML = quotes[randomIndex].quote;
//     document.getElementById("demoN").innerHTML = quotes[randomIndex].author;
//   }
  