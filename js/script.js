// Name: Sharath Mohan StudentID: C0894212


// Switch Currency in output section based on input selection
window.onload=function() { 
    document.getElementById("Inputcurrency").onchange=function() {
      document.getElementById("Outputcurrency").value=this.options[this.selectedIndex].getAttribute("data-sync"); 
    }

    document.getElementById("Outputcurrency").onchange=function() {
        document.getElementById("Inputcurrency").value=this.options[this.selectedIndex].getAttribute("data-sync"); 
    }

    document.getElementById("Outputcurrency").onchange(); // trigger when loading
  }

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
   }

   function convert() {
    console.log(document.getElementById('Inputcurrency'))
    if(document.getElementById('Inputcurrency').value == 'CAD') {
        convertCADtoUSD()
    } else{
        convertUSDtoCAD()
    }
   }
   
   function convertCADtoUSD() {
    const amount = document.getElementById('Inamount').value;
    if (!isNumeric(amount)) {
       alert('Please enter a valid number');
       return;
    }
   
    const rate = 0.75; // Hardcoded rate, can be replaced with live value if needed
    const result = amount * rate;
    document.getElementById('Outamount').value = `$${result.toFixed(3)}`;
   }
   
   function convertUSDtoCAD() {
    const amount = document.getElementById('Inamount').value;
    if (!isNumeric(amount)) {
       alert('Please enter a valid number');
       return;
    }
   
    const rate = 1 / 0.75; // Hardcoded rate, can be replaced with live value if needed
    const result = amount * rate;
    document.getElementById('Outamount').value = `$${result.toFixed(3)}`;
   }