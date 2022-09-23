
function copyText() 
    {

        var inputText = document.getElementById("inputText").value;
       
        let div = document.querySelector("#one");
        let p = document.createElement('p');

        p.innerHTML = inputText;
        
        div.appendChild(p);
    
    }

function summing(inputNumber) 
    {

        let total = 0;
        iNumber = Number(inputNumber);
        for(iNumber; iNumber > 0; iNumber--) {
            total += iNumber;
        }

        let div = document.querySelector("#two");
        let p = document.createElement('p');

        p.innerHTML = total;
        
        div.appendChild(p);
    
    }
// function declaration
function adding() 
    {
        var Number1 = document.getElementById("inputNumber1").value;
        var Number2 = document.getElementById("inputNumber2").value;
        let total = 0;
        Number1 = Number(Number1);
        Number2 = Number(Number2);
        total = Number1 + Number2;

        let div = document.querySelector("#three");
        let p = document.createElement('p');

        p.innerHTML = total;
        
        div.appendChild(p);
    
    }

//Arrow function
const subtract = () =>
    {
        var Number1 = document.getElementById("Num1").value;
        var Number2 = document.getElementById("Num2").value;
        let total = 0;
        Number1 = Number(Number1);
        Number2 = Number(Number2);
        total = Number1 - Number2;

        let div = document.querySelector("#oneB");
        let p = document.createElement('p');

        p.innerHTML = total;

        div.appendChild(p);
    }
//function expression
    const multiply = function () {
    
        var Number1 = document.getElementById("Num1").value;
        var Number2 = document.getElementById("Num2").value;
        let total = 0;
        Number1 = Number(Number1);
        Number2 = Number(Number2);
        total = Number1 * Number2;

        let div = document.querySelector("#oneB");
        let p = document.createElement('p');

        p.innerHTML = total;

        div.appendChild(p);
    };
// function declaration
function division() 
{
    var Number1 = document.getElementById("Num1").value;
    var Number2 = document.getElementById("Num2").value;
    let total = 0;
    Number1 = Number(Number1);
    Number2 = Number(Number2);
    total = Number1 / Number2;

    let div = document.querySelector("#oneB");
    let p = document.createElement('p');

    p.innerHTML = total;
    
    div.appendChild(p);

}
