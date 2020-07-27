<?php
foreach ($proc->result() as $pr) {
    $procesosiguiente = $pr->codProcesoSiguiente;
    $proceso = $pr->codProceso;
}
?>
<input type="hidden" value=<?php echo $proceso; ?> name='proceso'>
<input type="hidden" value=<?php echo $procesosiguiente; ?> name='procsig'>
<input type="hidden" value=<?php echo $estado; ?> name='estado'>
<h1 class="text-white"><?= $m ?></h1>