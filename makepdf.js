const { jsPDF } = window.jspdf;

document.getElementById("makepdftest").onclick = function(){
    
    var doc = new jsPDF()

    doc.text(20, 20, 'This is the default font.')
    doc.setFont('courier','normal')
    doc.text(20, 30, 'This is courier normal.')
    doc.setFont('times','italic')
    doc.text(20, 40, 'This is times italic.')
    doc.setFont('helvetica','bold')
    doc.text(20, 50, 'This is helvetica bold.')
    doc.setFont('courier','bolditalic')
    doc.text(20, 60, 'This is courier bolditalic.')    
    doc.save('a4.pdf')
    console.log("PDF Creat");
};
    
  
