// 1. Sort() array methods;
function sort(){
    let text = String(document.getElementById("num1").value);
    let text1 = text.split(",");
    let a= text1.sort();
    document.getElementById("demo").innerHTML="The Sort Element is:"+" "+text;
    document.getElementById("d1").innerHTML ="Array afterSort Method:"+" "+a;;
   
    /*document.getElementById("demo").innerHTML = 
    "The Sort Element is:"+" "+text+ "<br>"+
     "Array after Sort Method is:"+" "+a;*/
}
// 2. Revers() array methods;
function reverse(){
    let text = String(document.getElementById("num1").value);
    let text1 = text.split(",");
    let a= text1.reverse();
    document.getElementById("demo").innerHTML="The Reverse Element is:"+" "+text;
    document.getElementById("d1").innerHTML ="Array afterSort Method:"+" "+a;;
   
    /*document.getElementById("demo").innerHTML = 
    "The Reverse Element is:"+" "+text+ "<br>"+
     "Array after Reverse Method is:"+" "+a;*/
}
// 3. ascending highvalue() array methods;
function ascending()
{
    let text = String(document.getElementById("num1").value); 
    const array = text.split(",");
    let result = array.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML =
    "The Ascending Order Array is:"+" "+ result;
    document.getElementById("d1").innerHTML =
    "Min value:"+" "+array[0]+"<br>"+
    "Max value:"+" "+array[array.length - 1];
}
// 4. decending lowvalue() array methods;
function decending()
{
    let text = String(document.getElementById("num1").value); 
    const array = text.split(",");
    let result = array.sort(function(a, b){return b - a});
    document.getElementById("demo").innerHTML =
    "The Ascending Order Array is:"+" "+ result;
    document.getElementById("d1").innerHTML =
    "Min value:"+" "+array[0]+"<br>"+
    "Max value:"+" "+array[array.length - 1];
}
// 5. random() array methods;
function random()
{
    let text = String(document.getElementById("num1").value); 
    const array = text.split(",");
    result = array.sort(function(){return 0.5 - Math.random()});
    document.getElementById("demo").innerHTML = result;"<br>"+"Min value:"+" "+array[0]+"<br>"+"Max value:"+" "+array[array.length - 1];
    document.getElementById("d1").innerHTML = "Min value:"+" "+array[0]+"<br>"+"Max value:"+" "+array[array.length - 1];
}

// 6. fisher() array methods;
function fisher()
{
    let text = String(document.getElementById("num1").value); 
    const points = text.split(",");
    for (let i = points.length -1; i > 0; i--) 
    {
        let j = Math.floor(Math.random() * (i+1));
        let k = points[i];
        points[i] = points[j];
        points[j] = k;
    } 
    document.getElementById("demo").innerHTML = points;
   document.getElementById("d1").innerHTML = 
    "Min value:"+" "+points[0]+"<br>"+"Max value:"+" "+points[points.length - 1];
}
// 7. mathmax() array methods;
function mathmax()
{
    let text = String(document.getElementById("num1").value); 
    const array = text.split(",");
    let a = Math.max.apply(null,array)
    document.getElementById("demo").innerHTML = a;
}
// 8. mathmin() array methods;
function mathmin()
{
    let text = String(document.getElementById("num1").value); 
    const array = text.split(",");
    let a = Math.min.apply(null,array)
    document.getElementById("demo").innerHTML = a;
}
