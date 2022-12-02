function generatePolygon(){
    var polygonNumber = prompt("Hi, I am the xenoistic cat. Sounds funny right. Well I would like you to choose a number between 1 and 10 to match the polygon.")
    validateEntry(polygonNumber);
}

function validateEntry(number){
    if(isNaN(number))
    {
        alert("Invalid selection!! Again, please choose a number between 1 and 10 match the polygon.");
        generatePolygon();
    }
     else
     {
        polygonSides = math.trunc(number);
        if(polygonSides < 1 || polygonSides > 10)
        {
            alert("Invalid selection!! Again, please choose a number between 1 and 10 match the polygon.");
            generatePolygon();
        }
        else
        {
            shapeOfPolygon(polygonSides);
        }
     }

     function shapeOfPolygon(sides){
            var typeOfPolygons = new Array ("Monogon", "Bigon", "Triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon");
            var output = "The polygon that you have chosen has " + sides + " sides and the name of the polygon you've chosen is" + typeOfPolygons[sides - 1] + " ! ";
            document.getElementById("arealPolygon").innerHTML = output;
     }
}