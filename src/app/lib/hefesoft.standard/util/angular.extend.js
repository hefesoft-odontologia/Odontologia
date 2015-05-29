angular.aListado = function(listado){
  	 var esString = (!angular.isUndefined(listado) && listado !== null && typeof listado === 'string');

  	 if(esString){
  	 	listado = JSON.parse(listado);
  	 }

  	 return listado;
  }

  angular.convertirListasAString = function(item){
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

    angular.convertirstringAListas = function (item){
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


    angular.procesarList = function (data){
        var esObjeto = (!angular.isUndefined(data) && data !== null && typeof data === 'object');

        if(esObjeto){
            var esArray = (Array.isArray(data));
            if(esArray){
                for (x in data) {
                    var data = data[x];
                    data[x] = angular.convertirstringAListas(data);
                }               
            }
            else{
                data = angular.convertirstringAListas(data);
            }
        }

        return data;
    }