const { jsPDF } = window.jspdf;


var test1='testare var';
document.getElementById("makepdftest").onclick = function(){
    
    var doc = new jsPDF("p", "mm", "a4");
    var text = [];
    for (var i in cereretipArray){
        text.push(cereretipArray[i].name + '  ' + cereretipArrayDescription[i])
    }
    doc.text(text, 10, 10);

    doc.text('This is '+test1+'the default font.',20,20);
    doc.setFont('courier','normal');
    doc.text('This is courier normal.',20, 30);
    doc.setFont('times','italic');
    doc.text( 'This is times italic.',20, 40);
    doc.setFont('helvetica','bold');
    doc.text( 'This is helvetica bold.',20, 50);
    doc.setFont('courier','bolditalic');
    doc.text('This is courier bolditalic.',20, 60) ;   
    doc.save('a4.pdf');
    console.log("PDF Creat");
};
    
  
