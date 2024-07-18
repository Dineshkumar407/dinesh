/*public class IntArrayToStrintArray{

    public static String[]
  convertToStringArray(int[] intArray){
    if (intArray==null){
        return null;
    }
    String strArray=new
  String[intArray.length];
  
    for(int i=0;i,i<intArray.length;i++){
        strArray[i]=String.valueOf(intArray[i]);
    }
    return strArray;
    }
    public static void main(String[]args){
        int[] intArray={1,2,3,4,5};
        String[] strArray=convertToStringArray(intArray);

             for(String str:strArray){
                System.out.println(str);
            
             }
    }
  
}
*/

//document.getElementById("myH1").textContent="Hello";
//document.getElementById("myP").textContent="I like pizza";


//console.log('Hello');
//console.log('i like bating');

//window.alert('This is fack alert');
//let Age=20;
//let price=100;
//console.log('your are ${Age} years old'); 
 //console.log('The price is  $${price}'); 
 //let result=1+2*3+(4**2);

 //console.log(result);
 //let username=window.prompt("what's your username? ");

 
 //console.log(username);
 
//let username;

//document.getElementById("mySubmit").click = function(){
  //username = document.getElementById("myText").value;
  //document.getElementById("myH1").textContent=`Hello ${usernamr}` 

//let age = window.prompt("How old aer you");
//age = Number(age);

//console.log(age,typeof age);54
//const PI = 3.14159;
//let radius;
//let circumference;
//document.getElementById("mysubmit").onclick = function(){
  //radius = document.getElementById("myText").value;
  //circumference = 2*PI*radius;
  //document.getElementById("myH3").textContent = circumference + "cm";
  /*const decreaseBtn = document.getElementById("decreaseBtn");
  const resetBtn = document.getElementById("resetBtn");
  const increaseBtn = document.getElementById("increaseBtn");
  const CountLabel = document.getElementById("CountLabel");
  let count = 0;
  increaseBtn.onclick = function(){
    count++;
    CountLabel.textContent = count;  
  }
  decreaseBtn.onclick = function(){
    count--;
    CountLabel.textContent = count;
  }
  resetBtn.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
  }*/

 /* const myButton = document.getElementById("myButton");
  const Label1 = document.getElementById("Label1");
  const Label2 = document.getElementById("Label2");
  const Label3 = document.getElementById("Label3");
  const min = 1;
  const max = 6;
  let randomNum1;
  let randomNum2;
  let randomNum3;

  myButton.onclick = function(){
    
    randomNum1 = Math.floor(Math.random()*max)+min;
    randomNum2 = Math.floor(Math.random()*max)+min;
    randomNum3 = Math.floor(Math.random()*max)+min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
  }*/
/*const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
  age = myText.value;
  age = Number(age);
  if(age >= 100)
  {
    resultElement.textContent = "you are too old";
  }
    elseif(age >= 18)
    {
      resultElement.textContent = "you are elegibel to vote";
    }
      else{
        resultElement.textContent = `you are not elegibel to vote `;
      }
    
  
}*/

//Temperature convertion
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
  if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent  = temp.toFixed(1) + "°F";
        

  }
  else if(toCelsius.checked){
    temp = Number(textBox.value);
    temp = (temp + 32) * (5/9);
    result.textContent  = temp.toFixed(1) + "°F";

  }
  else{
    result.textContent = "select a unit";
  }

}