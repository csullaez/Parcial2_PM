<?php
foreach ($proc->result() as $pr) {
    $p = $pr->codProceso;
    $ps = $pr->codProcesoSiguiente;
}
?>
<input type="hidden" value=<?php echo $p; ?> name='proceso'>
<input type="hidden" value=<?php echo $ps; ?> name='procsig'>
<h1 class="text-white">MENSAJE DE BIENVENIDA</h1>
<h2 class="text-white">USTED ACABA DE INSCRIBIRSE SIN NINGUN INCONVENIENTE</h2>
<h3 class="text-white">
    Felicidades!!!
</h3>