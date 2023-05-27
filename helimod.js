var css = "text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em red; font-size: 20px;"
console.log("%cWARNING: DO NOT USE ANY OTHER SCRIPTS OR MODS! MIXING SCRIPTS MAY CAUSE BUGS OR CRASHES!", css);
if (geofs.aircraft.instance.id == 9){
geofs.aircraft.instance.parts.strobe.lightBillboard._billboard._billboard._color.blue=0
geofs.aircraft.instance.parts.strobe.lightBillboard._billboard._billboard._color.green=0
geofs.aircraft.instance.parts.strobe.lightBillboard._billboard._billboard._color.red=1
geofs.aircraft.instance.parts.strobe2.lightBillboard._billboard._billboard._color.blue=0
geofs.aircraft.instance.parts.strobe2.lightBillboard._billboard._billboard._color.green=0
geofs.aircraft.instance.parts.strobe2.lightBillboard._billboard._billboard._color.red=1
geofs.aircraft.instance.parts.strobe3.lightBillboard._billboard._billboard._color.blue=0
geofs.aircraft.instance.parts.strobe3.lightBillboard._billboard._billboard._color.green=0
geofs.aircraft.instance.parts.strobe3.lightBillboard._billboard._billboard._color.red=1
geofs.aircraft.instance.definition.zeroRPMAltitude=1E100
geofs.aircraft.instance.definition.optionalAnimatedPartTravelTime=0.7
geofs.aircraft.instance.definition.engineInertia=1
geofs.preferences.camera.headMotion=true
var css = "text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; font-size: 40px;"
console.log("%cEC-135 Script Injected", css);
var css = "text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; font-size: 20px;"
console.log("%cAttention: Less experienced pilots are advised to start with the R22 helicopter due to the challenging nature of the EC-135. Have a nice flight!", css);
}