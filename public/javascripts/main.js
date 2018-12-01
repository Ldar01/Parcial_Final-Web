window.onload = ()=>{
    app.init();
};

let app = {
     init: function(){
         this.addEvents();
        // this.loadContent();
     },
     addEvents: function(events){
        //console.log(form);
        var cont = 0;
        var guardar = document.getElementById("guardar");
        guardar.addEventListener("click", (events)=>{
            
            var nomb = document.getElementById("nombre").value;
            var especial = document.getElementById("especialidad").value;
            var casos = document.getElementById("casos").value;
            events.preventDefault();
            var row = "<tr><td class='indice'>"+cont+1+"</td><td class='name'>"+nomb+"</td><td class='special'>"+especial+"</td><td class='cases'>"+casos+"</td><td class='options'><a><i class='fas fa-trash-alt'></i> </a><a><i class='fas fa-pencil-alt'></i></a></td></tr>";
            //alert("funciona :v");
            var tabla = document.getElementsByTagName('tbody');
            var crear = document.createElement("tr");
            crear.innerHTML = row;
            document.getElementById("tabla2").appendChild(crear);
            console.log(nomb,especial,casos);
        });
     }
};