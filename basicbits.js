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
  
  document.getElementById("test1").onclick = function(){
    console.log(currentItem);
  };

  Autodesk.Viewing.theExtensionManager.registerExtension('MyAwesomeExtension', MyAwesomeExtension);
