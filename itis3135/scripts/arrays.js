window.onload = function(){
    document.getElementById("input_salary").onclick = addSalary;
    document.getElementById("show_results").onclick = displayResults;
    document.getElementById("show_salary").onclick = displaySalary;
    document.getElementById("individual").focus

}

var individual = [];
var salaryCount = [];

function addSalary(){
    var salaryInput = parseFloat(document.getElementById("salaryCount").value);
    var nameInput = parseFloat(document.getElementById("individual").value);

    salaryInput = parseFloat(salaryInput);
    individual.push(nameInput);
    salaryCount.push(salaryInput);

    document.getElementById("salaryCount").value = "";
    document.getElementById("individual").focus();
}

function displayResults(){
    var average = 0;

    var totalSum = 0;

   var salary = "";

   var individualSalary = 0;

   for(i = 0; i < salaryCount.length; i++)
   {
    totalSum += salaryCount[i];
   }
   average = (totalSum / salaryCount.length);

   for(i = 0; i < salaryCount.length; i++)
   {
    if(salaryCount[i]> individualSalary)
    {
        individualSalary = salaryCount[i];
        salary = individual[i];
    }
   }

    document.getElementById("results").innerHTML = "The average salary is $ " + average.toFixed(2) + ". " + salary + " had a max salary at $" + individualSalary.toFixed(2);
}

function displaySalary(){

    var tableDisplay;
    tableDisplay = "<table><tr><th>Employee</th><th>Salary</th></tr>"

    for(i = 0; i < salaryCount.length; i++){
        tableDisplay += "<tr><td>" + individual[i] + "</td><td>" + salaryCount[i] + "</td></tr>";
    }

    tableDisplay += "</table>";

    document.getElementById("result_table").innerHTML = tableDisplay;

}