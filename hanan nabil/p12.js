function idCard() {
    var FristName = document.getElementById('fristName');
    var LastName = document.getElementById('lastName');
    document.getElementById('PostFullName').innerHTML= FristName.value + "  " +LastName.value;

    var Address = document.getElementById('address');
    document.getElementById('postAddress').innerHTML=Address.value;


    var Age= document.getElementById('age').value;
    var PhoneNumber= document.getElementById('phoneNumber').value;

    for (var i=0; i < numberArray.length;){
        if (numberArray[i] <= 100){
            document.getElementById('postAge').innerHTML="Age: " + Age;
        }
    else if (numberArray[i] > 100) {
        document.getElementById('postPhoneNumber').innerHTML="Phone Number: " + PhoneNumber; 
    }
          }  

    }

    

