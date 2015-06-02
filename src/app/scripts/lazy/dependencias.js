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
	var diagnosticos = 
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

 	return diagnosticos;
}

function cieCupsDependencies(){
    var diagnosticos = 
    {
        name : "odontologiaApp",
        cache: true,
        files: 
        [            
            "app/scripts/controllers/Diagnosticos/services/CieCups.js"         
        ]
    }

    return diagnosticos;
}

function tratamientosDependencies(){
	var diagnosticos = 
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

 	return diagnosticos;
}

function procedimientosDependencies(){
	var diagnosticos = 
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

 	return diagnosticos;
}

function utilDependencies(){
	var diagnosticos = 
	{
        name : "Util",
        cache: true,
        files: 
        [
            "app/lib/hefesoft.standard/util/modal.js"
        ]
 	}

 	return diagnosticos;
}

function fileInputDependencies(){
	var diagnosticos = 
	{
        name : "Util",
        cache: true,
        serie : true,
        files: 
        [
            "../bower_components/bootstrap-fileinput/css/fileinput.min.css",
            "../bower_components/bootstrap-fileinput/js/fileinput.min.js",
             "../bower_components/bootstrap-fileinput/js/fileinput_locale_es.js",
            "app/lib/hefesoft.standard/Directivas/fileUpload/directivas/imageWidget.js"

        ]
 	}

 	return diagnosticos;
}

function odontogramaDependencies(){
	var diagnosticos = 
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
            "app/scripts/controllers/odontograma/directivas/superficies/filter/colorSuperficie.js"
        ]
 	}

 	return diagnosticos;
}

function pacienteDependencies(){
    var diagnosticos = 
    {
        name : "odontologiaApp",
        cache: true,
        files: 
        [            
            "app/scripts/controllers/pacientes/controllers/listado.js",
            "app/scripts/controllers/pacientes/services/inicializarListado.js",
            "app/lib/hefesoft.standard/Directivas/Date-Picker/Directiva/datePicker.js"      
        ]
    }

    return diagnosticos;
}

function formulaMedicaDependencies(){
    var diagnosticos = 
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

    return diagnosticos;
}

function azureDependencies(){
    var diagnosticos = 
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

    return diagnosticos;
}


function authDependencies(){
    var diagnosticos = 
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

    return diagnosticos;
}

function stripeDependencies(){
    var diagnosticos = 
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

    return diagnosticos;
}

function fontDependencies(){
    var diagnosticos = 
    {
        name : "odontologiaApp",
        cache: true,
        files: 
        [
            "app/styles/font.css"
        ]
    }

    return diagnosticos;
}