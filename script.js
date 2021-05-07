const myForm = document.getElementById('myForm');
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('hey');
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var add = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var check = document.getElementById('check');
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    let inputs = document.querySelectorAll('input');

   let gender ;

     document.getElementsByName('gender')
    .forEach(radio=>{
        if(radio.checked){
            gender = radio.value;
        }
    });
   //document.getElementById('gen').innerHTML = gender;
   console.log(first,last,add,pincode,gender,state,country);
    
    //document.getElementById('mainshow').style.display = 'initial';
   let checks= document.getElementsByName('food');
   var str = '';
   console.log(checks.length);
   let checkFood = [];
   let count = 0;
   for(i=0;i<checks.length; i++){
       if(checks[i].checked === true){
           
           str += checks[i].value + ' ';
           count++;
       }
       
   }
   if(count<2){
       alert('Select at least 2 foods');
       preventDefault();

   }else{
    document.getElementById('mainshow').style.display = 'initial';
    var row = 1;
   let table = document.getElementById('show');
   var newRow = table.insertRow(row);
   var cell1 = newRow.insertCell(0);
   var cell2 = newRow.insertCell(1);
   var cell3 = newRow.insertCell(2);
   var cell4 = newRow.insertCell(3);
   var cell5 = newRow.insertCell(4);
   var cell6 = newRow.insertCell(5);
   var cell7 = newRow.insertCell(6);
   var cell8 = newRow.insertCell(7);

   cell1.innerHTML = first;
   cell2.innerHTML = last;
   cell3.innerHTML = add;
   cell4.innerHTML = pincode;
   cell5.innerHTML = gender;
   cell6.innerHTML = str;
   cell7.innerHTML = state;
   cell8.innerHTML = country;

   row++;
   }
   //console.log(checkFood);
   console.log(str);
   console.log(count);
   document.getElementById('myForm').reset();

})