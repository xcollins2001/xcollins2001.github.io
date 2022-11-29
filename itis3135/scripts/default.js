function scriptTest()
{
    alert("My script is running!");
}


window.onload = function () {
    var date = new Date();
    var day = date.toDateString();
    var time = date.toLocaleString();
    document.getElementById("date").innerHTML = time + " , " + day;
}

function userSubmission(){
    const userName = document.getElementById("userName").value;
    const userFeeling = document.getElementById("userFeeling").value;
    console.log(userName);
    console.log(userFeeling);
    document.getElementById("user").innerHTML = "The Collins Design LLC welcomes you, " + userName + "! were glad you are doing  " + userFeeling + "!";
}

function customerWebsites() {
    var websiteNumber = prompt("How many websites would you like for us to make?");
    websiteNumber = parseFloat(websiteNumber);
    websitePages = prompt("How many pages would you like for each website to have?")
    websitePages = parseFloat(websitePages);
    var totalAmount = websiteNumber/websitePages;
    totalAmount = parseInt(totalAmount);
    alert("The pages per website will be is equal to" + totalAmount);
}

function totalCostWebsite(){
    var initialCost = 150;
    var page = 60;

    var pageCount = prompt("Hi there! The intitial cost of each website is $150 dollars and $60 dollars per page. How many pages do you want?");
    pageCount = parseInt(pageCount);
    var totalCost = initialCost + page + pageCount;
    alert("When everything is added up, the total cost of your website is" + totalCost);
}

function websiteTheme(){

    var theme = prompt(" What type of theme do you want your website to have?");
    alert("Ok so the type of them you've chosen is" + theme + "." + "Thank you for telling us your theme! ");
}

function completionDate(){
    var complete = prompt("How many days do you think the website should get done? Please give our team a sufficient amount of time to get the website done so it meet your requirements to the T. Planning takes one to two days as well.");
    complete = parseFloat(complete);
    var totalDays = complete;
    alert("The completion of the website will be done in " + totalDays + " days. ");
}

function userfeedback(){
    var feedback = prompt(" Is there anything that wasn't done properly on the website or something specific that wasn't done?");
    var mistake = prompt(" What mistake was seen on the website?");
    alert(" Thank you for giving us your feedback about the " + mistake + "." + " This will be taken care of shortly.");
}