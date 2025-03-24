let div=document.querySelector('div');
//! create 
//! 1 setProperty('property-name','value')
div.style.setProperty('height','200px');
div.style.setProperty('width','300px');
div.style.setProperty('background-color','blue');
//! 2 element.style.propertName="value"
div.style.border="5px solid black"
div.style.borderRadius="50%"

//update
//! 1 setProperty('property-name','value')
div.style.setProperty('height','400px');
div.style.setProperty('width','300px');
div.style.setProperty('background-color','teAL');
//! 2 element.style.propertName="value"
div.style.border="5px solid black"
div.style.borderRadius="60%"
//! 3 cssText="value"
div.style.cssText="background-color:green; height=200px";
div.style.cssText+="width:300px";
div.style.cssText+="height:60px"

//read
//! 1 getPropertyValue('property-name')
console.log(div.style.getPropertyValue('background-color'));

//remove
//! 1 removeProperty()
console.log(div.style.removeProperty('height'));