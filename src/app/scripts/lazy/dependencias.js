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
            "app/scripts/controllers/tratamientos/directivas/listado.js"            
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
            "app/scripts/controllers/odontograma/directivas/piezaDental/directiva/directiva.js",
            "app/scripts/controllers/odontograma/directivas/piezasDentales/directiva/directiva.js",
            "app/scripts/controllers/odontograma/services/json/odontogramaBase.js",
            "app/scripts/controllers/odontograma/controllers/piezasDentales.js",
            "app/scripts/controllers/odontograma/controllers/odontograma.js",
            "app/scripts/controllers/odontograma/filter/textoDientePermanenteTemporal.js",
            "app/scripts/controllers/odontograma/directivas/superficies/directiva/superficie.js",
            "app/scripts/controllers/odontograma/directivas/superficies/filter/simbolo.js",
            "app/scripts/controllers/odontograma/directivas/superficies/filter/colorSuperficie.js",
            "app/scripts/controllers/odontograma/directivas/superficies/controller/superficie.js"
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
            "app/lib/hefesoft.standard/Directivas/Date-Picker/Directiva/datePicker.js",
            "app/scripts/controllers/pacientes/controllers/listado.js",
            "app/lib/hefesoft.standard/Fixes/fixes.js"     
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
        files: 
        [
            "app/lib/hefesoft.standard/Auth/usuario.js",
            "app/lib/hefesoft.standard/Auth/Controllers/signIn.js",
            "app/lib/hefesoft.standard/Auth/Controllers/signUp.js",
            "app/lib/hefesoft.standard/Auth/sign.js",
            "app/lib/hefesoft.standard/Auth/inicializarServicios.js",
            "app/lib/hefesoft.standard/Auth/token.js",
            "app/lib/hefesoft.standard/Auth/transformPost.js"
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