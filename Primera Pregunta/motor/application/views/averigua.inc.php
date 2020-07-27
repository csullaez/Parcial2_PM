<?php
foreach ($proc->result() as $pr) {
    $proceso = $pr->codProceso;
    $procesosiguiente = $pr->codProcesoSiguiente;
}
?>
<input type="hidden" value=<?php echo $proceso; ?> name='proceso'>
<input type="hidden" value=<?php echo $procesosiguiente; ?> name='procsig'>
<h2 class="text-white">FECHAS DE INSCRIPCION</h2>
<p class="text-white">Inscripciones VIA INTERNET, mediante el SISTEMA ACADEMICO hasta el 30 de agosto en la siguiente direccion:</p>
