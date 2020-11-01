const { PDFDocument, StandardFonts, rgb } = PDFLib

document.getElementById("fillpdf").onclick = function(){
    fillForm();
};
async function createPdf() {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    // Embed the Times Roman font
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Add a blank page to the document
    const page = pdfDoc.addPage()

    // Get the width and height of the page
    const { width, height } = page.getSize()

    // Draw a string of text toward the top of the page
    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

          // Trigger the browser to download the PDF document
    download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
  }
    async function fillForm() {
      const formUrl = './test/test.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
    
      const pdfDoc = await PDFDocument.load(formPdfBytes)
    
      const form = pdfDoc.getForm()
    
      const lastnameField = form.getTextField('last_name')
      const firstnameField = form.getTextField('first_name')
      const locationField = form.getTextField('location')
      const footbalField = form.getCheckBox('football')
      const baseballField = form.getCheckBox('baseball')
    
      lastnameField.setText('Dinu')
      firstnameField.setText('Alexandru')
      locationField.setText('Australia')
      baseballField.check()
    
      const pdfBytes = await pdfDoc.save()
      download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
    }

