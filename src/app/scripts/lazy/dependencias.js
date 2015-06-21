function wizardDependencies(){
	var wizard = 
	{
        name : "mgo-angular-wizard",
        cache: true,
        files: 
        [
            "../bower_components/angular-wizard/dist/angular-wizard.min.js", 
            "../bower_components/angular-wizard/dist/angular-wizard.min.css",
            "app/scripts/controllers/tratamientos/directivas/wizardSimbolo/controller/simbolo.js",
            "app/scripts/controllers/tratamientos/directivas/wizardSimbolo/controller/wizardSimbolo.js",
            "app/scripts/controllers/tratamientos/directivas/wizardSimbolo/directiva/simbolo.js",
            "app/scripts/controllers/tratamientos/directivas/wizardSimbolo/directiva/wizardSimbolo.js"
        ]
 	}

 	return wizard;
}

function diagnosticosDependencies(){
	var dependencias = 
	{
        name : "odontologiaApp",
        cache: true,
        files: 
        [
            "app/scripts/controllers/Diagnosticos/controllers/listado.js",
            "app/scripts/controllers/Diagnosticos/controllers/addDiagnostico.js",
            "app/scripts/controllers/Diagnosticos/directivas/directivas/list.js",
            "app/Template/vendors/farbtastic/farbtastic.css",
            "app/Template/vendors/farbtastic/farbtastic.min.js",
            "app/lib/hefesoft.standard/Directivas/colorPicker/directiva/colorPicker.js",            
            "app/scripts/controllers/tratamientos/directivas/wizardSimbolo/services/pasoVariables.js"
        ]
 	}

 	return dependencias;
}

function cieCupsDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,
        files: 
        [            
            "app/scripts/controllers/Diagnosticos/services/CieCups.js"         
        ]
    }

    return dependencias;
}

function tratamientosDependencies(){
	var dependencias = 
	{
        name : "odontologiaApp",
        cache: true,
        files: 
        [
            "app/scripts/controllers/tratamientos/controllers/listadoTratamientos.js", 
            "app/scripts/controllers/tratamientos/controllers/addTratamiento.js",
            "app/scripts/controllers/tratamientos/directivas/listado.js",
            "app/scripts/controllers/tratamientos/services/extraerTratamientos.js"
        ]
 	}

 	return dependencias;
}

function procedimientosDependencies(){
	var dependencias = 
	{
        name : "odontologiaApp",
        cache: true,
        files: 
        [
            "app/scripts/controllers/procedimientos/controllers/addProcedimiento.js", 
            "app/scripts/controllers/procedimientos/controllers/listado.js",
            "app/scripts/controllers/procedimientos/directivas/listadoProcedimientos.js",
            "app/scripts/controllers/tratamientos/controllers/listadoTratamientosProcedimientos.js"
        ]
 	}

 	return dependencias;
}

function utilDependencies(){
	var dependencias = 
	{
        name : "Util",
        cache: true,
        files: 
        [
            "app/lib/hefesoft.standard/util/modal.js"
        ]
 	}

 	return dependencias;
}

function fileInputDependencies(){
	var dependencias = 
	{
        name : "Util",
        cache: true,
        serie : true,
        files: 
        [
            "../bower_components/bootstrap-fileinput/css/fileinput.min.css",
            "../bower_components/bootstrap-fileinput/js/fileinput.min.js",
             "../bower_components/bootstrap-fileinput/js/fileinput_locale_es.js",
            "app/lib/hefesoft.standard/Directivas/fileUpload/directivas/imageWidget.js",
            "app/lib/hefesoft.standard/Directivas/fileUpload/directivas/imageMultipleWidget.js"
        ]
 	}

 	return dependencias;
}

function odontogramaDependencies(){
	var dependencias = 
	{
        name : "odontologiaApp",
        cache: true,
        files: 
        [
            "app/scripts/controllers/odontograma/directivas/piezasDentales/filters/pezaDentalImage.js",
            "app/scripts/controllers/odontograma/services/diagnosticos/diagnosticos.js",
            "app/scripts/controllers/odontograma/directivas/piezaDental/directiva/directiva.js",
            "app/scripts/controllers/odontograma/directivas/piezasDentales/directiva/directiva.js",
            "app/scripts/controllers/odontograma/services/json/odontogramaBase.js",
            "app/scripts/controllers/odontograma/controllers/piezasDentales.js",
            "app/scripts/controllers/odontograma/controllers/odontograma.js",
            "app/scripts/controllers/odontograma/filter/textoDientePermanenteTemporal.js",
            "app/scripts/controllers/odontograma/directivas/superficies/directiva/superficie.js",
            "app/scripts/controllers/odontograma/directivas/superficies/filter/simbolo.js",
            "app/scripts/controllers/odontograma/directivas/superficies/filter/colorSuperficie.js",
            "app/scripts/controllers/odontograma/directivas/superficies/controller/superficie.js",
            "app/scripts/controllers/odontograma/directivas/odontograma/directiva/odontograma.js",
            "app/scripts/controllers/odontograma/controllers/piezaDentalSeleccionada.js"

        ]
 	}

 	return dependencias;
}

function pacienteDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,
        files: 
        [            
            "app/scripts/controllers/pacientes/controllers/listado.js",
            "app/scripts/controllers/pacientes/services/inicializarListado.js",            
            "app/scripts/controllers/pacientes/controllers/listado.js",
            "app/lib/hefesoft.standard/Fixes/fixes.js"     
        ]
    }

    return dependencias;
}

function dateDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,
        serie: true,
        files: 
        [            
            "app/Template/vendors/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js",
            "app/lib/hefesoft.standard/Directivas/Date-Picker/Directiva/datePicker.js",
            "app/lib/hefesoft.standard/Directivas/Time-Picker/directiva/timePicker.js"
        ]
    }

    return dependencias;
}

function formulaMedicaDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,
        files: 
        [
            "app/scripts/controllers/formulaMedica/controllers/listado.js", 
            "app/scripts/controllers/formulaMedica/controllers/addFormulaMedica.js",
            "app/scripts/controllers/formulaMedica/directivas/listado.js"            
        ]
    }

    return dependencias;
}

function azureDependencies(){
    var dependencias = 
    {
        name : "azure",
        cache: true,
        files: 
        [
            "app/lib/hefesoft.standard/Azure/tableStorage.js",
            "app/lib/hefesoft.standard/Azure/imagesStorage.js",
            "app/lib/hefesoft.standard/Azure/push.js",
            "app/lib/hefesoft.standard/Azure/email.js",
            "app/lib/hefesoft.standard/Azure/blobStorage.js"             
        ]
    }

    return dependencias;
}


function authDependencies(){
    var dependencias = 
    {
        name : "azure",
        cache: true,
        serie: true,
        files: 
        [
            "app/lib/hefesoft.standard/Auth/External/Services/authService.js",
            "app/lib/hefesoft.standard/constants/External.js/constant.js",
            "app/Template/vendors/local-storage/angular-local-storage.min.js",
            "app/lib/hefesoft.standard/Auth/usuario.js",
            "app/lib/hefesoft.standard/Auth/Controllers/signIn.js",
            "app/lib/hefesoft.standard/Auth/Controllers/signUp.js",
            "app/lib/hefesoft.standard/Auth/Controllers/logOut.js",
            "app/lib/hefesoft.standard/Auth/sign.js",
            "app/lib/hefesoft.standard/Auth/inicializarServicios.js",
            "app/lib/hefesoft.standard/Auth/token.js",
            "app/lib/hefesoft.standard/Auth/transformPost.js",
            "https://apis.google.com/js/platform.js",
            "app/lib/hefesoft.standard/google/directivas/signUp/directive/directive.js",
            "app/lib/hefesoft.standard/fb/directivas/signUp/directive/directive.js",
            "app/lib/hefesoft.standard/Directivas/social-login/directiva/directiva.js",
            "app/lib/hefesoft.standard/Directivas/external-login/directive/directive.js",
            "app/lib/hefesoft.standard/Directivas/external-login/controller/externalLogin.js",
            "app/lib/hefesoft.standard/Directivas/external-login/controller/associateController.js",
            "app/lib/hefesoft.standard/Auth/Controllers/logOut.js"
        ]
    }

    return dependencias;
}

function stripeDependencies(){
    var dependencias = 
    {
        name : "Stripe",
        cache: true,
        files: 
        [
            "app/lib/hefesoft.standard/Stripe/Controllers/misSuscripciones.js",
            "app/lib/hefesoft.standard/Stripe/Controllers/misTarjetas.js",
            "app/lib/hefesoft.standard/Stripe/Controllers/Register.js",
            "app/lib/hefesoft.standard/Stripe/Factory/stripeService.js",
            "app/lib/hefesoft.standard/Stripe/Validaciones/stripe.js",
            "app/lib/hefesoft.standard/Stripe/Controllers/Register.js"
        ]
    }

    return dependencias;
}

function fontDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,
        files: 
        [
            "app/styles/font.css"
        ]
    }

    return dependencias;
}

function galleryDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,
        serie : true,
        files: 
        [
            "../bower_components/angular-touch/angular-touch.min.js",
            "../bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.css",
            "../bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js",
            "app/lib/hefesoft.standard/Directivas/gallery/controller/list.js",
            "app/lib/hefesoft.standard/Directivas/gallery/controller/add.js"
        ]
    }

    return dependencias;
}

function importIoDependencies(){
    var dependencias = 
    {
        name : "importIo",
        cache: true,        
        files: 
        [
            "app/lib/hefesoft.standard/import.io/services/read.js"            
        ]
    }

    return dependencias;
}


function newsDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,        
        files: 
        [
            "app/scripts/controllers/Noticias/Controllers/odontologos.com.co.js",
            "app/scripts/controllers/Noticias/Directivas/directive/odontologos.com.co.js",
            "app/lib/hefesoft.standard/Directivas/nhRef/nhref.js"
            
        ]
    }

    return dependencias;
}

function drillDownDependencies(){
    var dependencias = 
    {
        name : "directivas",
        cache: true,        
        files: 
        [
            "app/lib/hefesoft.standard/Directivas/drillDown/controller/drillDownCtrl.js",
            "app/lib/hefesoft.standard/Directivas/drillDown/directive/directive.js"            
        ]
    }

    return dependencias;
}

function historiaDependencies(){
    var dependencias = 
    {
        name : "Historia",
        cache: true,        
        files: 
        [
            "app/scripts/controllers/historia/Odontologia/realizarOdontograma/controllers/realizarOdontograma.js"            
        ]
    }

    return dependencias;
}

function clinicaDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,        
        files: 
        [
            "app/scripts/controllers/Clinica/Controller/datosClinica.js"
        ]
    }

    return dependencias;
}

function pdfDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,
        serie: true,
        files: 
        [
            "../bower_components/jspdf/dist/jspdf.debug.js",
            "../bower_components/jspdf-autotable/jspdf.plugin.autotable.js"
        ]
    }

    return dependencias;
}

function imageDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,        
        files: 
        [
            "app/lib/hefesoft.standard/services/convertToImage64.js"            
        ]
    }

    return dependencias;
}

function periodontogramaDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,        
        files: 
        [
            "app/scripts/controllers/historia/Odontologia/realizarPeriodontograma/controller/realizarPeriodontograma.js",
            "app/scripts/controllers/periodontograma/piezaDental/controller/periodontogramaPiezaDentalCtrl.js",
            "app/scripts/controllers/periodontograma/piezaDental/directive/piezaDental.js",
            "app/scripts/controllers/periodontograma/piezasDentales/controller/piezasDentales.js",
            "app/scripts/controllers/periodontograma/piezasDentales/directive/piezas_dentales.js",
            "app/scripts/controllers/periodontograma/piezasDentales/filters/implante.js",
            "app/scripts/controllers/periodontograma/piezaDental/directive/ngpoint.js"
        ]
    }

    return dependencias;
}

function noUiSliderDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,
        serie: true,        
        files: 
        [            
            "app/Template/vendors/noUiSlider/jquery.nouislider.all.min.js",
            "../bower_components/angular-nouislider/src/nouislider.min.js", 
        ]
    }

    return dependencias;
}

function calendarDependencies(){
    var dependencias = 
    {
        name : "hefesoft.google",
        cache: true,
        serie: true,
        files: 
        [   
            "app/Template/vendors/fullcalendar/fullcalendar.css",
            "app/Template/vendors/fullcalendar/fullcalendar.min.js",
            "app/Template/vendors/fullcalendar/lang-all.js",
            "app/Template/vendors/fullcalendar/gcal.js",
            "app/lib/hefesoft.standard/google/services/calendar.js",
            "app/lib/hefesoft.standard/Directivas/fullCalendar/directiva/calendar.js"
        ]
    }

    return dependencias;
}

function pickerDependencies(){
    var dependencias = 
    {
        name : "hefesoft.google",
        cache: true,        
        files: 
        [   
            "app/lib/hefesoft.standard/google/services/drive.js",
            "app/lib/hefesoft.standard/google/directivas/picker/directiva/directiva.js",
            "app/lib/hefesoft.standard/google/directivas/picker/controller/picker.js",
            "app/lib/hefesoft.standard/google/services/picker.js"
        ]
    }

    return dependencias;
}



function agendaDependencies(){
    var dependencias = 
    {
        name : "odontologiaApp",
        cache: true,        
        files: 
        [            
            "app/scripts/controllers/Agenda/controller/agenda.js",
            "app/scripts/controllers/Agenda/services/agenta.helpers.js"
        ]
    }

    return dependencias;
}

