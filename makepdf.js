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
    var textsanatateArray = [];
    var textapeleRoamneArray = [];
    var textisuArray = [];
    var line=10;
    doc.text("Aviz: ", 20, line);
    line+=30;
    var i=0;var j=0;var k=0; var l=0;var m=0;
    doc.setFont('times','normal');
    var check1=(cereretipArray && cereretipArray.length);
    var check2=(mediuArray && mediuArray.length);
    var check3=(sanatateArray && sanatateArray.length);
    var check4=(apeleRoamneArray && apeleRoamneArray.length);
    var check5=(isuArray && isuArray.length);
    var status=1;
    if(check1)
    {
        status=0;
        for (i in cereretipArray){
            textcereretipArray.push(cereretipArray[i].name + '  ' + cereretipArrayDescription[i])
        }
        doc.text("Probleme Aviz privind energia electrica: ", 20, line=line+10);
        doc.text(textcereretipArray, 20, line=line+10);
        line= line+i*10;
    }
    if(check2)
    {
        status=0;
        for (j in mediuArray){
            textmediuArray.push(mediuArray[j].name + '  ' + mediuArrayDescription[j])
        }
        doc.text("Probleme Aviz de mediu: ", 20, line=line+10);
        doc.text(textmediuArray, 20, line=line+10);
        line= line+j*10;
    }
    if(check3)
    {
        status=0;
        for (k in apeleRoamneArray){
            textapeleRoamneArray.push(apeleRoamneArray[k].name + '  ' + apeleRoamneDescription[k])
        }
        doc.text("Probleme Aviz de la apele romane: ", 20, line=line+10);
        doc.text(textapeleRoamneArray, 20, line=line+10);
        line= line+k*10;
    }
    if(check4)
    {
        status=0;
        for (l in sanatateArray){
            textsanatateArray.push(sanatateArray[l].name + '  ' + sanatateArray[l])
        }
        doc.text("Probleme Aviz sanatatea populatiei: ", 20, line=line+10);
        doc.text(textsanatateArray, 20, line=line+10);
        line= line+l*10;
    }
    if(check5)
    {
        status=0;
        for (m in isuArray){
            textisuArray.push(isuArray[m].name + '  ' + isuArrayDescription[m])
        }
        doc.text("Probleme Aviz ISU: ", 20, line=line+10);
        doc.text(textisuArray, 20, line=line+10);
        line= line+m*10;
    }
    if(status)
    {
        doc.text("Fara probleme", 20, line=line+10);
        doc.text('Status: ', 20, line=line+10);
        doc.setTextColor(0,255,0);
        doc.text('Aprobat ', 20, line=line+10);
        doc.setTextColor(255,255,255);
    }
    else{
        doc.text('Status: ', 20, line=line+10);
        doc.setTextColor(255,0,0);
        doc.text('Dezaprobat ', 20, line=line+10);
        doc.setTextColor(255,255,255);
    }
    doc.save('a4.pdf');
    console.log("PDF Creat");
};