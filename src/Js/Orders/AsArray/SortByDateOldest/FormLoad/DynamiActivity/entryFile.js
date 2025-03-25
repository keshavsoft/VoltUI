
const StartFunc = () => {
  let localData = [
              { Count: 20, Name: "AddOns",circleColor:"success" }, 
              { Count: 1, Name: "Customers",circleColor:"danger" },
              { Count: 1, Name: "ItemsNames",circleColor:"primary" }];
  
  let activityTemplate = document.getElementById("ActivityTemplate");  
  let activity = activityTemplate.content; 
  let container = document.getElementById("ActivityRight"); 

  localData.forEach((element, index) => {
    let clone = document.importNode(activity, true);
    let countElement = clone.querySelector('.countClass');
    let circle = clone.querySelector('.Circleadd');
    let nameElement = clone.querySelector('.ActivityNames'); 
  
    if (countElement) {
      countElement.textContent = element.Count;
      circle.classList.add(`text-${element.circleColor}`);
      nameElement.textContent = element.Name;
    }
    
      container.appendChild(clone);
  });
  
};

export { StartFunc };