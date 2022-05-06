document.addEventListener("DOMContentLoaded",_=>{
    let tabsItems = Array.from(document.querySelectorAll(".utabs"));


    tabsItems.forEach(tab=>{
        let lengthElement = Array.from(tab.querySelectorAll(".utab-item"));
        let arrayTabsContent = Array.from(tab.querySelector(".utabs-content").children);


        for(let j=0;j<lengthElement.length;j++){
            lengthElement[j].addEventListener("click",(e)=>{
                    lengthElement[j].classList.add("active-item")
                    active(j)



            });
        }
        function active(position){
            if (position<arrayTabsContent.length){
                for(let i=0; i<arrayTabsContent.length;i++){
                    if(i !== position){
                        lengthElement[i].classList.remove("active-item")
                        arrayTabsContent[i].classList.remove("active-tab")
                    }else{
                        let element = window.getComputedStyle(lengthElement[i],':before');
                    console.log(element.getPropertyValue("left"))
                        arrayTabsContent[i].classList.add("active-tab")
                    }
                }
            }

        }

    });
})

