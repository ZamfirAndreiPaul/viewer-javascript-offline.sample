function MyAwesomeExtension(viewer, options) {
    Autodesk.Viewing.Extension.call(this, viewer, options);
  }
  
  MyAwesomeExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
  MyAwesomeExtension.prototype.constructor = MyAwesomeExtension;
  
  MyAwesomeExtension.prototype.load = function() {
    
    alert('MyAwesomeExtension is loaded!');
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
    if (attrIdMass === -1)
      return null;

    // Now iterate over all parts to find out which one is the largest.
    var maxValue = 0;
    var maxValId = -1;
    pdb.enumObjects(function(dbId){

        // For each part, iterate over their properties.
        pdb.enumObjectProperties(dbId, function(attrId, valId){

            // Only process 'Mass' property.
            // The word "Property" and "Attribute" are used interchangeably.
            if (attrId === attrIdMass) {

                var value = pdb.getAttrValue(attrId, valId);

                if (value > maxValue) {
                    maxValue = value;
                    maxValId = dbId;
                }

                // Stop iterating over additional properties when "Mass" is found.
                return true;
            }
        });
    });

    // Return results
    return {
      id: maxValId,
      mass: maxValue
    }
  }
  var thePromise = viewer.model.getPropertyDb().executeUserFunction( userFunction );
thePromise.then(function(retValue){

    //if (retValue === 42) {
    //  console.log('We got the expected value back.');
    //}

    if (!retValue) {
      console.log("Model doesn't contain property 'Mass'.");
      return;
    }

    var mostMassiveId = retValue.id;
    viewer.select(mostMassiveId);
    viewer.fitToView([mostMassiveId]);
    console.log('Most massive part is', mostMassiveId, 'with Mass:', retValue.mass);
});
  /*this.eventTool = new EventTool(this.viewer)

    this.eventTool.on('singleclick', (event) => {
      const hitTest = this.viewer.clientToWorld(
        event.canvasX, event.canvasY, true)

      if (hitTest) {
        const it = this.viewer.model.getData().instanceTree

        const nodeName = it.getNodeName(hitTest.dbId)

        if ((/^.*(floor).*$/gi).test(nodeName)) {
          this.faderCore.hitTest = hitTest

          this.update()
        }
      }
    })*/
  MyAwesomeExtension.prototype.unload = function() {
    alert('MyAwesomeExtension is now unloaded!');
    return true;
  };
  
  Autodesk.Viewing.theExtensionManager.registerExtension('BasicBits', MyAwesomeExtension);
  