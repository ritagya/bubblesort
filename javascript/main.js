function bubbleSort(array)
{
    var swapped;
    var temp;
    do {
        swapped = false;
        for (var i=0; i < array.length; i++) {
            if (parseFloat(array[i]) > parseFloat(array[i+1])) {
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


function validate(){
    var myArray =[];
    var n = document.getElementById('userInput').value
    var arr = n.split(",");
    myArray = arr;
    if(5 <= myArray.length && myArray.length <= 10){
        bubbleSort(myArray)
        document.getElementById("demo").innerHTML = "The sorted array is: " + myArray;
    }
    else{
        document.getElementById("demo").innerHTML = "Enter 5 to 10 numbers";
    }
}

