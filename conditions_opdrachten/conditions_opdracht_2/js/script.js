//javascript code
var student= sofyan; 
 student = prompt("Hoeveel geld staat er op uw rekening?")

if (geld <25) {
    alert("sorry u heeft te weinig saldo");

} else{
    alert("Aanvraag geaccepteerd");

}

var student = {                
    firstName:"sofyan",        
    lastName:"ahalli",
    age:17,
    height:180,
    fullName : function() {
       return this.firstName + " " + this.lastName;

    }