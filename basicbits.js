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
  var currSelection;
  MyAwesomeExtension.prototype.onSelectionEvent = function(event) {
    currSelection = this.viewer.getSelection();
    console.log(currSelection);
    var thePromise = viewer.model.getPropertyDb().executeUserFunction( userFunction );
    thePromise.then(function(retValue){
        console.log('retValue is: ', retValue); // prints 'retValue is: 42'
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

    function userFunction(pdb) {
        
        //return 42;

    var attrIdMass = -1;

    // Iterate over all attributes and find the index to the one we are interested in
    pdb.enumAttributes(function(i, attrDef, attrRaw){

        var name = attrDef.name;

        if (name === 'Mass') {
            attrIdMass = i;
            return true; // to stop iterating over the remaining attributes.
        }
    });

    // Early return is the model doesn't contain data for "Mass".

    // Now iterate over all parts to find out which one is the largest.
    var maxValue = 0;
    var maxValId = -1;
    
    //pdb.enumObjects(function(dbId){

        // For each part, iterate over their properties.
        pdb.enumObjectProperties(2834, function(attrId, valId){
            console.log(attrId+valId);

            // Only process 'Mass' property.
            // The word "Property" and "Attribute" are used interchangeably

            var value = pdb.getAttrValue(attrId, valId);
            console.log(value);
            // Stop iterating over additional properties when "Mass" is found.
        });
    //});

    // Return results
    return {
      id: maxValId,
      mass: maxValue
    }

    }
  
  document.getElementById("test1").onclick = function(){
    
  };

  Autodesk.Viewing.theExtensionManager.registerExtension('MyAwesomeExtension', MyAwesomeExtension);