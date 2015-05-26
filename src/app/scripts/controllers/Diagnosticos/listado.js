  angular.module('odontologiaApp')
  .controller('DxListadoCtrl', ['$scope', 'CieCupsServices', 
    function ($scope, CieCupsServices) {

    $scope.Diagnostico = {};
    $scope.listadoCie = [];  	

  	function inicializar(){
  		$("#data-table-command").bootgrid({
            css: {
                icon: 'md icon',
                iconColumns: 'md-view-module',
                iconDown: 'md-expand-more',
                iconRefresh: 'md-refresh',
                iconUp: 'md-expand-less'
            },
            formatters: {
                "commands": function(column, row) {
                    return "<button type=\"button\" class=\"btn btn-icon command-edit\" data-row-id=\"" + row.id + "\"><span class=\"md md-edit\"></span></button> " + 
                        "<button type=\"button\" class=\"btn btn-icon command-delete\" data-row-id=\"" + row.id + "\"><span class=\"md md-delete\"></span></button>";
                }
            }
      });

      CieCupsServices.listadoCie().then(cie, error);
  	}

    $scope.adicionar = function(){
      var data = $scope.Diagnostico;
    }

    function cie(data){
      $scope.listadoCie = data;
    }

    function error(err){
      console.log(err);
    }


  	inicializar();

  }])