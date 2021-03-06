function validDate(date) {

    todayDate = getTodaysDate();
    if (date > todayDate) {
        document.getElementById('dateInput').setAttribute('min', getTodaysDate());
        document.getElementById('dateInput').setAttribute('max', getTodaysDateThreeMonths());
    }
}

function getTodaysDate() {
    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    today = year + "-" + month + "-" + day;

    return today;
}

function getTodaysDateThreeMonths() {
    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 3;
    year = date.getFullYear();
    month += 1;

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    today = year + "-" + month + "-" + day;

    return today;
}

function formFunction() {
    //Getting the values from the form
    var attraction = document.getElementById("attractionSelect").value;
    var adults = document.getElementById("adultsSelect").value;
    var child = document.getElementById("childSelect").value;

    //Declaring variable for txt and total
    var txt = "";
    var total = 0;

    //Ticket Prices
    var USS = [79, 59];
    var SEA = [40, 29];
    var ACW = [38, 30];
    var MXM = [12, 28];

    //Checking which attraction it is, then refer to the array and calculate total price
    if (attraction == "uss") {
        total = ((adults * Number(USS[0])) + (child * Number(USS[1]))).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == "seaa") {
        total = ((adults * Number(SEA[0])) + (child * Number(SEA[1]))).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == "acw") {
        total = ((adults * Number(ACW[0])) + (child * Number(ACW[1]))).toFixed(2);
        txt = "Your total is: $" + total;
    }

    else if (attraction == "mxm") {
        total = ((adults * Number(MXM[0])) + (child * Number(MXM[1]))).toFixed(2);
        txt = "Your total is: $" + total;
    }

    if (txt == "") {
        txt = "Please select an attraction."
    }

    //Displaying output to webpage
    document.getElementById("result").innerHTML = txt;
}