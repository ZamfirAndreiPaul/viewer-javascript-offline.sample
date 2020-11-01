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
        var thePromise = viewer.model.getPropertyDb().executeUserFunction( userFunction, currSelection);
        thePromise.then(function(retValue){
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

                let node = document.createElement("li");
                node.className = "listObiecteliObj";
                let textnode = currentItem.name;
                node.innerHTML = textnode;
                document.getElementById("listaEnergie").appendChild(node);

                node = document.createElement("li");
                node.className = "listObiecteliDescriere";
                textnode = "Descriere: " + document.getElementById("descriptionInput").value;
                node.innerHTML = textnode;
                document.getElementById("listaEnergie").appendChild(node);
                document.getElementById("descriptionInput").value = "";

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

                let node = document.createElement("li");
                node.className = "listObiecteliObj";
                let textnode = currentItem.name;
                node.innerHTML = textnode;
                document.getElementById("listaApe").appendChild(node);

                node = document.createElement("li");
                node.className = "listObiecteliDescriere";
                textnode = "Descriere: " + document.getElementById("descriptionInputApeleRoamne").value;
                node.innerHTML = textnode;
                document.getElementById("listaApe").appendChild(node);
                document.getElementById("descriptionInputApeleRoamne").value = "";

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
                let node = document.createElement("li");
                node.className = "listObiecteliObj";
                let textnode = currentItem.name;
                node.innerHTML = textnode;
                document.getElementById("listaMediu").appendChild(node);

                node = document.createElement("li");
                node.className = "listObiecteliDescriere";
                textnode = "Descriere: " + document.getElementById("descriptionInputMediu").value;
                node.innerHTML = textnode;
                document.getElementById("listaMediu").appendChild(node);
                document.getElementById("descriptionInputMediu").value = "";

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
                sanatateArrayDescription.push(document.getElementById("descriptionInputSanatate").value);

                let node = document.createElement("li");
                node.className = "listObiecteliObj";
                let textnode = currentItem.name;
                node.innerHTML = textnode;
                document.getElementById("listaSanatate").appendChild(node);

                node = document.createElement("li");
                node.className = "listObiecteliDescriere";
                textnode = "Descriere: " + document.getElementById("descriptionInputSanatate").value;
                node.innerHTML = textnode;
                document.getElementById("listaSanatate").appendChild(node);
                document.getElementById("descriptionInputSanatate").value = "";

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
            if(document.getElementById("descriptionInputISU").value !== "")
            {
                a.style.display = "none";
                b.style.display = "none";
                isuArray.push(currentItem);
                isuArrayDescription.push(document.getElementById("descriptionInputISU").value);

                let node = document.createElement("li");
                node.className = "listObiecteliObj";
                let textnode = currentItem.name;
                node.innerHTML = textnode;
                document.getElementById("listaISU").appendChild(node);

                node = document.createElement("li");
                node.className = "listObiecteliDescriere";
                textnode = "Descriere: " + document.getElementById("descriptionInputISU").value;
                node.innerHTML = textnode;
                document.getElementById("listaISU").appendChild(node);
                document.getElementById("descriptionInputISU").value = "";
            }
            else{
                b.style.display = "block";
            }
    };

    Autodesk.Viewing.theExtensionManager.registerExtension('MyAwesomeExtension', MyAwesomeExtension);
