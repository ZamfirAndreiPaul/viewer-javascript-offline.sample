
document.getElementById("fillpdf").onclick = function(){
    fillForm();
};
    async function fillForm() {
      const formUrl = 'test/test.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
    
      const pdfDoc = await PDFDocument.load(formPdfBytes)
    
      const form = pdfDoc.getForm()
    
      const lastnameField = form.getTextField('last_name')
      const firstnameField = form.getTextField('first_name')
      const locationField = form.getTextField('location')
      const footbalField = form.getCheckBox('fo0tball')
      const baseballField = form.getTextField('baseball')
    
      lastnameField.setText('Mario')
      firstnameField.setText('24 years')
      locationField.setText(`5' 1"`)
      baseballField.check()
    
      const pdfBytes = await pdfDoc.save()
    }

