
import { jsPDF } from "jspdf";


document.getElementById("makepdftest").onclick = function(){
    
var doc = new jsPDF()

doc.text('Hello world!', 10, 10)
doc.save('a4.pdf')
    console.log("PDF Creat");
};
  
  
  
  //};
