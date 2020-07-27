<?php
    foreach($proc -> result() as $pr){
        $ps=$pr->codProcesoSiguiente;
        $p=$pr->codProceso;
    }
?>
<input type="hidden" value=<?php echo $p;?> name='proceso'>
<input type="hidden" value=<?php echo $ps;?> name='procsig'>
<h1 class="text-white">LAS INSCRIPCIONES SE LLEVAN ACTUALMENTE</h1>
    <h2 class="text-white">Lista de los documentos que se requiren para la inscripcion:</h2>
    <ul >
        <li class="text-white">Certificado de aprobacion(notas)</li>
        <li class="text-white">Titulo de Bachiller</li>
        <li class="text-white">Boleta de deposito</li>
    </ul>
