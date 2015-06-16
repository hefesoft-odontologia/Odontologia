angular.module('odontologiaApp')
.controller('AgendaCtrl', 
	['$scope', 'calendarGetData', function ($scope, calendarGetData) {
	 
	$scope.mostrarBotonAutorizar = false;
	$scope.listadoEventos = [];
	var listadoGoogleCalendar = [];

	var event = {
	  'summary': 'Google I/O 2015',
	  'location': '800 Howard St., San Francisco, CA 94103',
	  'description': 'A chance to hear more about Google\'s developer products.',
	  'start': {
	    'dateTime': '2015-05-28T09:00:00-07:00',
	    'timeZone': 'America/Los_Angeles'
	  },
	  'end': {
	    'dateTime': '2015-05-28T17:00:00-07:00',
	    'timeZone': 'America/Los_Angeles'
	  },
	  'recurrence': [
	    'RRULE:FREQ=DAILY;COUNT=2'
	  ],
	  'attendees': [
	    {'email': 'lpage@example.com'},
	    {'email': 'sbrin@example.com'}
	  ],
	  'reminders': {
	    'useDefault': false,
	    'overrides': [
	      {'method': 'email', 'minutes': 24 * 60},
	      {'method': 'sms', 'minutes': 10}
	    ]
	  }
	};

	$scope.auth = function(){
		calendarGetData.auth().then(autorizado, noAutorizado);
	}

	$scope.adicionado = function(item){
		//calendarGetData.insert(event);
	}

	$scope.modificado = function(item){

	}

	$scope.eliminado = function(item){
		
	}

	function inicializar(){
		calendarGetData.getAuth().then(autorizado, noAutorizado);
	}

	function noAutorizado(data){
		$scope.mostrarBotonAutorizar = true;
	}
	
	function autorizado(data){		
		calendarGetData.loadEventApi().then(eventApiCargada);
	}

	function eventApiCargada(){
		calendarGetData.getCalendar().then(eventosCargados);
	}

	function eventosCargados(data){
		listadoGoogleCalendar = data;
		procesarDatos(data);
		$scope.listadoEventos = data;		
		
		//calendarGetData.deleteEvent('primary', eventoPrueba.id);
	}

	function procesarDatos(data){
		for (var i = data.length - 1; i >= 0; i--) {
			data[i]['title'] = data[i].summary;
			data[i].start = data[i].start.dateTime;
			data[i].end = data[i].end.dateTime;

			/*
			if(angular.isDefined(data[i].colorId)){
				var color = gapi.client.calendar.colors.get(data[i].colorId);
				data[i]['eventBackgroundColor'] = "red";
			}
			*/
		};
	}
    
	inicializar();

}])