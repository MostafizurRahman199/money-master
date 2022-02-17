

let calculate = document.getElementById('calculate').addEventListener('click',function(){

let income = document.getElementById('income').value;
let food = document.getElementById('food').value;
let rent = document.getElementById('rent').value;
let clothes = document.getElementById('clothes').value;

if(food == '')
{
  food = 0;
  document.getElementById('food').value = 0;
}
if(rent == '')
{
  rent= 0;
  document.getElementById('rent').value=0;
}
if(clothes == '')
{
  clothes= 0;
  document.getElementById('clothes').value = 0;
}
if(income == '')
{
  income = 0;
  document.getElementById('income').value=0;
}

calculateBalance(income , food, rent , clothes);

})

 document.getElementById('save-button').addEventListener('click',function(){
   let saveInput = document.getElementById('save-input').value;
   calculateSavings(saveInput);
});

//calculate savings

function calculateSavings(saveInput)
{
    document.getElementById('error-3').style.display = 'none';
    const income = parseFloat(document.getElementById('income').value);
    const balance = parseFloat(document.getElementById('balance').innerText);
    let savingAmount=0;
    let remainingAmount = 0;


    if(isNaN(saveInput))
    {
        document.getElementById('error-3').style.display = 'block';
    }
    else
    {
       
         savingAmount = (parseFloat(saveInput) * income) / 100;
         remainingAmount = balance -savingAmount;

        console.log(savingAmount);
        console.log(remainingAmount);

        if(remainingAmount<0)
        {
            document.getElementById('error-4').style.display = 'block';

        }
        else
        {
             document.getElementById('error-4').style.display = 'none';
             document.getElementById('saving-amount').innerText = savingAmount;
             document.getElementById('remaining-balance').innerText = remainingAmount;
        }

    
    }
    
}

//calculate total expenses and balance

  function calculateBalance(income, food, rent , clothes)
    {
        const TotalExpenses = document.getElementById('total-expenses');
        const balance = document.getElementById('balance');
        const error1 = document.getElementById('error-1');
        const error2 = document.getElementById('error-2');
        let cost =0;
       
        if( isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes))
        {
            
            document.getElementById('error-1').style.display = 'block';
            
        }
         else{
            

            document.getElementById('error-1').style.display = 'none';

            cost = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
            balanceAfterCost = parseFloat(income) - cost ;

            if(balanceAfterCost<0)
            {
                document.getElementById('error-2').style.display = 'block';
            }
            else{
                document.getElementById('error-2').style.display = 'none';
                TotalExpenses.innerText = cost;
                balance.innerText = balanceAfterCost;
            }

        }
        
    }

