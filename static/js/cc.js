<<<<<<< HEAD
var i = 1;
function person1()
{
    document.getElementById('pref').textContent = document.getElementById('pref').textContent+'Person 1';
    document.getElementById('person1').disabled = true;
    document.getElementById('person1').style.backgroundColor = 'black';
    i=i+1;
    remo();
}
function person2()
{
    document.getElementById('pref').textContent = document.getElementById('pref').textContent+'Person 2';
    document.getElementById('person2').disabled = true;
    document.getElementById('person2').style.backgroundColor = 'black';
    i=i+1;
    remo();
}
function person3()
{
    document.getElementById('pref').textContent = document.getElementById('pref').textContent+'Person 3';
    document.getElementById('person3').disabled = true;
    document.getElementById('person3').style.backgroundColor = 'black';
    i=i+1;
    remo();
}
function remo()
{
    if(i<=3){
        document.getElementById('Welcome').textContent = "Lock your pref : "+i;
    }
    else {
        document.getElementById('Welcome').textContent = 'Locked everything...!';
        document.getElementById('locks').textContent = 'Done';
    }
    if(i>1){document.getElementById('haa').style.display = 'grid';}
}
function lock()
{
    if(i>3)
    {
        document.getElementById('last').style.display='flex';
        document.getElementById('last').style.flexDirection='column';

        
        document.getElementById('haa').style.display='none';

        document.getElementById('person1').disabled = true;
        document.getElementById('person1').style.backgroundColor = 'black';
        
        document.getElementById('person2').disabled = true;
        document.getElementById('person2').style.backgroundColor = 'black';

        document.getElementById('person3').disabled = true;
        document.getElementById('person3').style.backgroundColor = 'black';
    }
    else
    {
        alert('lock all your preferences')
    }
    
}
function final()
{
    if(document.getElementById('finalcc').checked)
    {
        document.getElementById('Welcome').textContent = 'Successspulll...!';
    }
    else
    {
        alert('please tick the check box');
    }

=======
var i = 1;
function person1()
{
    document.getElementById('pref').textContent = document.getElementById('pref').textContent+'Person 1';
    document.getElementById('person1').disabled = true;
    document.getElementById('person1').style.backgroundColor = 'black';
    i=i+1;
    remo();
}
function person2()
{
    document.getElementById('pref').textContent = document.getElementById('pref').textContent+'Person 2';
    document.getElementById('person2').disabled = true;
    document.getElementById('person2').style.backgroundColor = 'black';
    i=i+1;
    remo();
}
function person3()
{
    document.getElementById('pref').textContent = document.getElementById('pref').textContent+'Person 3';
    document.getElementById('person3').disabled = true;
    document.getElementById('person3').style.backgroundColor = 'black';
    i=i+1;
    remo();
}
function remo()
{
    if(i<=3){
        document.getElementById('Welcome').textContent = "Lock your pref : "+i;
    }
    else {
        document.getElementById('Welcome').textContent = 'Locked everything...!';
        document.getElementById('locks').textContent = 'Done';
    }
    if(i>1){document.getElementById('haa').style.display = 'grid';}
}
function lock()
{
    if(i>3)
    {
        document.getElementById('last').style.display='flex';
        document.getElementById('last').style.flexDirection='column';

        
        document.getElementById('haa').style.display='none';

        document.getElementById('person1').disabled = true;
        document.getElementById('person1').style.backgroundColor = 'black';
        
        document.getElementById('person2').disabled = true;
        document.getElementById('person2').style.backgroundColor = 'black';

        document.getElementById('person3').disabled = true;
        document.getElementById('person3').style.backgroundColor = 'black';
    }
    else
    {
        alert('lock all your preferences')
    }
    
}
function final()
{
    if(document.getElementById('finalcc').checked)
    {
        document.getElementById('Welcome').textContent = 'Successspulll...!';
    }
    else
    {
        alert('please tick the check box');
    }

>>>>>>> 84c84359cba9925775d9a7ae2e96bfd0cbeb6d59
}