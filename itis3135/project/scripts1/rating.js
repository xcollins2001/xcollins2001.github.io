function getRate(){
    var getUserInput = parseInt(prompt(" Before you look at our menu, for our first guest you get a free slice of cheesecake for free! Please choose from one of the follwoing numbers. 1, 2, or 3? "));
    var cheeseCakeType = ["Thats not a valid choice", "strawberry", "classic", "chocolate"];


    if(isNaN(getUserInput))
    {
        alert("Please choose 1, 2, 3!")
    }else{
        getUserInput = Math.abs(getUserInput);
        getUserInput = Math.round(getUserInput);
        alert("You've chosen a " + cheeseCakeType[getUserInput] + " cheesecake!");
    }
}