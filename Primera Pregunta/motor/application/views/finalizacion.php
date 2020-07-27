<?php
foreach ($proc->result() as $pr) {
    $p = $pr->codProceso;
    $ps = $pr->codProcesoSiguiente;
}
?>
<input type="hidden" value=<?php echo $p; ?> name='proceso'>
<input type="hidden" value=<?php echo $ps; ?> name='procsig'>
<h1 class="text-white">LA INSCRIPCION FINALIZÓ</h1>