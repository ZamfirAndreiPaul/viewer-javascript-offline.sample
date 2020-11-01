    var viewer;
    var options = {
        'env' : 'Local',
        'document' : './House/f0224dd3-8767-45c1-ff99-5c9c881b9fee/0.svf'
    };

    var config3d = {
        extensions: ['MyAwesomeExtension']
    };

    Autodesk.Viewing.Initializer(options, function() {

        var htmlDiv = document.getElementById('MyViewerDiv');
        viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv, config3d);
        var startedCode = viewer.start(options.document, options);
        if (startedCode > 0) {
            console.error('Failed to create a Viewer: WebGL not supported.');
            return;
        }

        console.log('Initialization complete, loading a model next...');

    });


    function MyAwesomeExtension(viewer, options) {
        Autodesk.Viewing.Extension.call(this, viewer, options);
    }
    
    MyAwesomeExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
    MyAwesomeExtension.prototype.constructor = MyAwesomeExtension;
    
    MyAwesomeExtension.prototype.load = function() {
        alert('MyAwesomeExtension is loaded!');
        this.onSelectionBinded = this.onSelectionEvent.bind(this);
        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this.onSelectionBinded);
        return true;
    };
    
    MyAwesomeExtension.prototype.unload = function() {
        alert('MyAwesomeExtension is now unloaded!');
        return true;
    };

    var currentItem;

    MyAwesomeExtension.prototype.onSelectionEvent = function(event) {
        currSelection = this.viewer.getSelection();
        console.log(currSelection);
        var thePromise = viewer.model.getPropertyDb().executeUserFunction( userFunction, currSelection);
        thePromise.then(function(retValue){
            console.log(retValue);
            currentItem = retValue;
        }).catch(function(err){
        console.log("Something didn't go right...")
        console.log(err);
        });
    };

    MyAwesomeExtension.prototype.load = function() {
        this.onSelectionBinded = this.onSelectionEvent.bind(this);
        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this.onSelectionBinded);
        return true;
    };
   function userFunction(pdb, userData) { 
        console.log(pdb.getObjectProperties(userData[0]));
        return pdb.getObjectProperties(userData[0]);
    }

    MyAwesomeExtension.prototype.onToolbarCreated = function(toolbar) {
        // alert('TODO: customize Viewer toolbar');
      
        var viewer = this.viewer;
      
        // Button 1
        var button1 = new Autodesk.Viewing.UI.Button('show-env-bg-button');
        button1.onClick = function(e) {
            viewer.setEnvMapBackground(true);
        };
        button1.addClass('show-env-bg-button');
        button1.setToolTip('Show Environment');
      
        // Button 2
        var button2 = new Autodesk.Viewing.UI.Button('hide-env-bg-button');
        button2.onClick = function(e) {
            viewer.setEnvMapBackground(false);
        };
        button2.addClass('hide-env-bg-button');
        button2.setToolTip('Hide Environment');
      
        // SubToolbar
        this.subToolbar = new Autodesk.Viewing.UI.ControlGroup('my-custom-toolbar');
        this.subToolbar.addControl(button1);
        this.subToolbar.addControl(button2);
      
        toolbar.addControl(this.subToolbar);
    };

    // BUTON ENERGIE ELECTRICA

    document.getElementById("cereretip").onclick = function(){
        let a = document.getElementById("objMenu");
        let b = document.getElementById("warningPhraseId");
        b.style.display = "none";
        if (a.style.display === "none") {
        a.style.display = "block";
        } else {
        a.style.display = "none";
        }
    };

    document.getElementById("addObj").onclick = function(){
        let a = document.getElementById("popupDiv");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    var cereretipArray = [];
    var cereretipArrayDescription = [];

    document.getElementById("addFinal").onclick = function(){
            let b = document.getElementById("warningPhraseId");
            let a = document.getElementById("popupDiv");
            if(document.getElementById("descriptionInput").value !== "")
            {
                a.style.display = "none";
                b.style.display = "none";
                cereretipArray.push(currentItem);
                cereretipArrayDescription.push(document.getElementById("descriptionInput").value);
                document.getElementById("descriptionInput").value = "";
                console.log(cereretipArray);
                console.log(cereretipArrayDescription);
            }
            else{
                b.style.display = "block";
            }
    };

    

    // BUTON APELE ROMANE

    document.getElementById("apeleroamane").onclick = function(){
        let a = document.getElementById("objMenuApeleRoamne");
        let b = document.getElementById("warningPhraseIdApeleRoamne");
        b.style.display = "none";
        if (a.style.display === "none") {
        a.style.display = "block";
        } else {
        a.style.display = "none";
        }
    };

    document.getElementById("addObjApeleRoamne").onclick = function(){
        let a = document.getElementById("popupDivApeleRoamne");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    var apeleRoamneArray = [];
    var apeleRoamneDescription = [];

    document.getElementById("addFinalApeleRoamne").onclick = function(){
            let b = document.getElementById("warningPhraseIdApeleRoamne");
            let a = document.getElementById("popupDivApeleRoamne");
            if(document.getElementById("descriptionInputApeleRoamne").value !== "")
            {
                a.style.display = "none";
                b.style.display = "none";
                apeleRoamneArray.push(currentItem);
                apeleRoamneDescription.push(document.getElementById("descriptionInputApeleRoamne").value);
                document.getElementById("descriptionInputApeleRoamne").value = "";
                console.log(apeleRoamneArray);
                console.log(apeleRoamneDescription);
            }
            else{
                b.style.display = "block";
            }
    };

    // BUTON MEDIU

    document.getElementById("mediuBtn").onclick = function(){
        let a = document.getElementById("objMenuMediu");
        let b = document.getElementById("warningPhraseIdMediu");
        b.style.display = "none";
        if (a.style.display === "none") {
        a.style.display = "block";
        } else {
        a.style.display = "none";
        }
    };

    document.getElementById("addObjMediu").onclick = function(){
        let a = document.getElementById("popupDivMediu");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    var mediuArray = [];
    var mediuArrayDescription = [];

    document.getElementById("addFinalMediu").onclick = function(){
            let b = document.getElementById("warningPhraseIdMediu");
            let a = document.getElementById("popupDivMediu");
            if(document.getElementById("descriptionInputMediu").value !== "")
            {
                a.style.display = "none";
                b.style.display = "none";
                mediuArray.push(currentItem);
                mediuArrayDescription.push(document.getElementById("descriptionInputMediu").value);
                document.getElementById("descriptionInputMediu").value = "";
                console.log(mediuArray);
                console.log(mediuArrayDescription);
            }
            else{
                b.style.display = "block";
            }
    };

    // BUTON SANATATE

    document.getElementById("sanatateBtn").onclick = function(){
        let a = document.getElementById("objMenuSanatate");
        let b = document.getElementById("warningPhraseIdSanatate");
        b.style.display = "none";
        if (a.style.display === "none") {
        a.style.display = "block";
        } else {
        a.style.display = "none";
        }
    };

    document.getElementById("addObjSanatate").onclick = function(){
        let a = document.getElementById("popupDivSanatate");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    var sanatateArray = [];
    var sanatateArrayDescription = [];

    document.getElementById("addFinalSanatate").onclick = function(){
            let b = document.getElementById("warningPhraseIdSanatate");
            let a = document.getElementById("popupDivSanatate");
            if(document.getElementById("descriptionInputSanatate").value !== "")
            {
                a.style.display = "none";
                b.style.display = "none";
                sanatateArray.push(currentItem);
                sanatateArrayDescription.push(document.getElementById("descriptionInput").value);
                document.getElementById("descriptionInputSanatate").value = "";
                console.log(sanatateArray);
                console.log(sanatateArrayDescription);
            }
            else{
                b.style.display = "block";
            }
    };

    // BUTON ISU

    document.getElementById("isuBtn").onclick = function(){
        let a = document.getElementById("objMenuISU");
        let b = document.getElementById("warningPhraseIdISU");
        b.style.display = "none";
        if (a.style.display === "none") {
        a.style.display = "block";
        } else {
        a.style.display = "none";
        }
    };

    document.getElementById("addObjISU").onclick = function(){
        let a = document.getElementById("popupDivISU");
        if (a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    };

    var isuArray = [];
    var isuArrayDescription = [];

    document.getElementById("addFinalISU").onclick = function(){
            let b = document.getElementById("warningPhraseIdISU");
            let a = document.getElementById("popupDivISU");
            if(document.getElementById("descriptionInput").value !== "")
            {
                a.style.display = "none";
                b.style.display = "none";
                isuArray.push(currentItem);
                isuArrayDescription.push(document.getElementById("descriptionInputISU").value);
                document.getElementById("descriptionInputISU").value = "";
                console.log(isuArray);
                console.log(isuArrayDescription);
            }
            else{
                b.style.display = "block";
            }
    };

    Autodesk.Viewing.theExtensionManager.registerExtension('MyAwesomeExtension', MyAwesomeExtension);
