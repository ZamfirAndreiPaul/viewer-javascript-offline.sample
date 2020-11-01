const { jsPDF } = window.jspdf;


var test1='testare var';
document.getElementById("makepdftest").onclick = function(){
    
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts:true 
    });
    var textcereretipArray = [];
    var textmediuArray = [];
    var textcereretipArray = [];
    var textcereretipArray = [];
    var line=10;
    doc.text("Aviz: ", 20, line);
    line+=30;
    var i=0;
    doc.setFont('times','normal');
    if(cereretipArray && cereretipArray.length){
        for (i in cereretipArray){
            textcereretipArray.push(cereretipArray[i].name + '  ' + cereretipArrayDescription[i])
        }
        for (j in mediuArray){
            textmediuArray.push(mediuArrayy[j].name + '  ' + mediuArrayDescription[j])
        }
        for (k in cereretipArray){
            textcereretipArray.push(cereretipArray[k].name + '  ' + cereretipArrayDescription[k])
        }
        for (l in cereretipArray){
            textcereretipArray.push(cereretipArray[l].name + '  ' + cereretipArrayDescription[l])
        }
        for (m in cereretipArray){
            textcereretipArray.push(cereretipArray[m].name + '  ' + cereretipArrayDescription[m])
        }
        
        doc.text("Probleme Aviz privind energia electrica: ", 20, line);
        doc.text(textcereretipArray, 20, line=line+10);
        doc.text("Probleme Aviz privind energia electrica: ", 20, line);
        doc.text(text, 20, line=line+10);
        doc.text("Probleme Aviz privind energia electrica: ", 20, line);
        doc.text(text, 20, line=line+10);
        doc.text("Probleme Aviz privind energia electrica: ", 20, line);
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
    
  
