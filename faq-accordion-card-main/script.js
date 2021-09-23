

document.querySelectorAll('.accordian-question').forEach(item => {
   item.addEventListener('click', event => {
    let accCollapse = item.nextElementSibling;
    if(!item.classList.contains("collapsing")){
      if(!item.classList.contains("open")){
      
     
        //setTimeout function //
        accCollapse.style.display = "block";
           let accHeight = accCollapse.clientHeight;
           console.log(accHeight);
    
         setTimeout(() => {
           accCollapse.style.height = accHeight + "px";
           accCollapse.style.display = '';
         }, 1);   
   
          // accCollapse.style.height = accHeight + "px";
          // accCollapse.style.display = "";
   
           accCollapse.classList = "accordian-collapse collasing";
   
         setTimeout(() => {
          
   
           accCollapse.classList = "accordian-collapse collapse open";
            //accCollapse.style.height = ""
        }, 300);
   
            //setTimeout function//
         
         }
         else{ 
       
           accCollapse.classList = "accordian-collapse collasing";
   
   
           setTimeout(() => {
             accCollapse.style.height = '0px';
           }, 1);
          //setTimeout function//
          //setTimeout function 
           setTimeout(() => {
           accCollapse.classList = "accordian-collapse collapse";
            accCollapse.style.height = '';
          }, 180);
            
         
         }
        item.classList.toggle("open");
   // if else statment //
       
        //handle click
      };
    });   

});