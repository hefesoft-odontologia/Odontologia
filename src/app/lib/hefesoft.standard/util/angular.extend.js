window.Hefesot = {};
var Hefesoft  = window.Hefesot;

Hefesot.aListado = function(listado){
  	 var esString = (!angular.isUndefined(listado) && listado !== null && typeof listado === 'string');

  	 if(esString){
  	 	listado = JSON.parse(listado);
  	 }

  	 return listado;
  }

Hefesot.convertirListasAString = function(item){
    for (var i in item)
    {
        var n = i.indexOf("array");
        var m = i.indexOf("object");

        if(n >=0 || m >=0){
            item[i] = JSON.stringify(item[i]);
        }          
    }

    return item;
}

Hefesot.convertirstringAListas = function (item){
    for (var i in item)
    {
        var n = i.indexOf("array");
        var m = i.indexOf("object");

        if(n >=0 || m >=0){
            item[i] = JSON.parse(item[i]);
        }          
    }

    return item;
}


Hefesot.procesarList = function (data){
    var esObjeto = (!angular.isUndefined(data) && data !== null && typeof data === 'object');

    if(esObjeto){
        var esArray = (Array.isArray(data));
        if(esArray){
            for (x in data) {
                var item = data[x];
                data[x] = Hefesoft.convertirstringAListas(item);
            }               
        }
        else{
            data = Hefesoft.convertirstringAListas(data);
        }
    }

    return data;
}

Hefesot.listTostring = function(elemento, method){
     var aplicarTransformarObjetos = (!angular.isUndefined(elemento) && method === "POST");

     if(aplicarTransformarObjetos){
        var esArray = (Array.isArray(elemento));
        if(esArray){
            for (x in elemento) {
                var data = elemento[x];
                elemento[x] = Hefesot.convertirListasAString(data);
            }               
        }
        else{
            elemento = Hefesot.convertirListasAString(elemento);
        }
    }

    return elemento; 
}