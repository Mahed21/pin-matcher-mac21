//get random pin
function getpin()
{
    const random=(Math.round(Math.random()*10000));
    const stringRandom=random+'';
    if(stringRandom.length==4)
    {
        const formValue=document.getElementById('form-value');
        formValue.value=stringRandom;
    }
    else
    {
      
        getpin();
    }
}
function generate()
{
  getpin();
}
// pin checker
document.getElementById('btn-parent').addEventListener('click',function(event)
{
    const pinValue=event.target.innerText;
    if(!isNaN(pinValue))
    {
        
        var pinScreen=document.getElementById('pin-screen');
        const prevPin=pinScreen.value;
        const newPin=prevPin+pinValue;
        pinScreen.value=newPin;
    }
    if(pinValue=='C')
    {
      document.getElementById('pin-screen').value='';
    }
   
   
    
})

//submit button
document.getElementById('submit-button').addEventListener('click',function()
{
    const valueFromGenerate=document.getElementById('form-value')
    //console.log(valueFromGenerate.value);
    const valuFromScreen=document.getElementById('pin-screen');
    //console.log(valuFromScreen.value);
    if(valueFromGenerate.value==valuFromScreen.value)
    {
       // console.log("yes");
       const sucessMessage=document.getElementById('success');
       sucessMessage.style.display='block';
       const failMessage=document.getElementById('fail')
       failMessage.style.display='none';

    }
    else
    {
        const failMessage=document.getElementById('fail')
        failMessage.style.display='block';
        const sucessMessage=document.getElementById('success');
        sucessMessage.style.display='none';
        
    }

})