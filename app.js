let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");

//computer choice
const gencomputerchoice=()=>
    {
        //roick paper scisssors
    const options=["rock","paper","scisssors"];
     const randIX=Math.floor(Math.random()*3);
     return options(randIX);
    };
    const Playgame=(userchoice)=>
        {
            console.log("user choice",userchoice);
            const compchoice=gencomputerchoice();
            console.log("computerchoice=", compchoice );      
    

choices.forEach((choice)=>
{
    
    choice.addEventListener("click",()=>
    {
        console.log("choice was clicked")
        const userchoice=choice.getAttribute("id");
        console.log( " choice was clicked",userchoice);
        Playgame(userchoice);
    });

});