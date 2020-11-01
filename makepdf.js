const { jsPDF } = window.jspdf;


var test1='testare var';
document.getElementById("makepdftest").onclick = function(){
    
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts:true 
    });
    var text = [];
    var line=10;
    doc.text("Aviz: ", 20, line);
    line+=30;
    var i=0;
    if(cereretipArray && cereretipArray.length){
        for (i in cereretipArray){
            text.push(cereretipArray[i].name + '  ' + cereretipArrayDescription[i])
        }
        doc.text("Probleme: ", 20, line);
        doc.setFont('times','normal');
        doc.text(text, 20, line=line+10);
        doc.text('Status: ', 20, line=line+10);
        doc.setTextColor(255,0,0);
        doc.text('Dezaprobat ', 20, line=line+10);
        doc.setTextColor(255,255,255);
    }else{
        doc.text("Fara probleme", 20, line=line+10);
        line= line+i*10;
        doc.text('Status: ', 20, line=line+10);
        doc.setTextColor(0,255,0);
        doc.text('Aprobat ', 20, line=line+10);
        doc.setTextColor(255,255,255);
    }
    
    doc.save('a4.pdf');
    console.log("PDF Creat");
};
    
  
