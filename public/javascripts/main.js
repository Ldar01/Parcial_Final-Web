window.onload = ()=>{
    app.init();
};

let app = {
     init: function(){
         this.addEvents();
         this.loadContent();
     },
     addEvents: function(events){
        events.preventDefault();
     }
};