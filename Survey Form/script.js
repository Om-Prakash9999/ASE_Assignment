let Fname;
let Lname;
let Gender;
let Email;
let Number; 
let Date;
let profession;
let count=0

function formValidate(){

    
    Fname = document.getElementById("fname").value;
    Lname = document.getElementById("lname").value;
    Date = document.getElementById("date").value;
    Email = document.getElementById("email").value;
    Number = document.getElementById("number").value;
    profession= document.getElementById("profession").value;
    Gender = document.querySelector( 'input[name="gender"]:checked'); 



    if(count==0){
        if(Fname ==""){
            let showError = document.getElementById('showError_fname')
                showError.style.display= 'block'
            return
        }
        else{
            let showError = document.getElementById('showError_fname')
            showError.style.display= 'none'
        
        }
        if(Lname ==""){
            let showError = document.getElementById('showError_lname')
                showError.style.display= 'block'
            return
        }
        else{
            let showError = document.getElementById('showError_lname')
            showError.style.display= 'none'
        
        }
        if(Date==""){
            // debugger
                let showError = document.getElementById('showError_date')
                showError.style.display= 'block'
                return
        }
        else{
            let showError = document.getElementById('showError_date')
                showError.style.display= 'none'
        }
        if(Email==""){
            let showError = document.getElementById('showError_email')
                showError.style.display= 'block'
                return
        }
        else{
            let showError = document.getElementById('showError_email')
                showError.style.display= 'none'
        }
        if(Number==""){
            let showError = document.getElementById('showError_number')
                showError.style.display= 'block'
                return
        }
        else{
            let showError = document.getElementById('showError_number')
            showError.style.display= 'none'
        }
        if(profession ==""){
            let showError = document.getElementById('showError_professon')
                showError.style.display= 'block'
            return
        }
        else{
            let showError = document.getElementById('showError_profession')
            showError.style.display= 'none'
        
        }
        if(Gender == null) {
            let showError = document.getElementById('showError_gender')
            showError.style.display= 'block'
            return
        } else {  
            let showError = document.getElementById('showError_gender')
            showError.style.display= 'none'
        }
    }

    let inputFields = document.querySelectorAll('.inputClass');
    let errorFields = document.querySelectorAll('.errorHandle_two');
    
    return true
    
} 

