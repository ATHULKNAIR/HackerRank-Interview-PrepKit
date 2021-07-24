function QuestionsMarks(str) { 

    // code goes here  
    var string = str.replace(/[^0-9?]/g,'');
    
    for(let i =0;i<string.length;i++){
        if(string[i+1] ==='?' && string[i+2] ==='?' && string[i+2] ==='?'){
            if(parseInt(string[i])+parseInt(string[i+4]) === 10){
                return true
            }
        }
    }
    return false; 
  
  }
  console.log(QuestionsMarks('arrb6???4xxbl5???eee5'));  