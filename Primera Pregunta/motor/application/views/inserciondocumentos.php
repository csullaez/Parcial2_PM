<?php
foreach ($proc->result() as $pr) {
    $procesosiguiente = $pr->codProcesoSiguiente;
    $p = $pr->codProceso;
}
?>
<h1 class="text-white">LAS INSCRIPCIONES SE LLEVAN ACTUALMENTE</h1>
<input type="hidden" value=<?php echo $p; ?> name='proceso'>
<input type="hidden" value=<?php echo $procesosiguiente; ?> name='procsig'>
<table class="table table-striped table-dark">
    <tr>
        <td><label>Cedula de Identidad: </label></td>
        <td>
            <input type="number" name='ci' placeholder="Ingrese el numero de carnet" class="form-control" required></td>
    </tr>
    <tr>
        <td><label>Certificado de notas</label></td>
        <td>
            <input type="radio" name="notas" value="no_presento" checked>
            <label>No tengo este documento</label>
            <input type="radio" name="notas" value="presento" checked>
            <label>Tengo este documento</label>
        </td>
    </tr>
    <tr>
        <td><label>Titulo de Bachiller</label></td>
        <td>
            <input type="radio" name="titulo" value="no_presento" checked>
            <label>No tengo este documento</label>
            <input type="radio" name="titulo" value="presento" checked>
            <label>Tengo este documento</label>
        </td>
    </tr>
    <tr>
        <td><label>Deposito Bancario</label></td>
        <td>
            <input type="radio" name="boleta" value="no_presento" checked>
            <label for="huey">No tengo este documento</label>
            <input type="radio" name="boleta" value="presento" checked>
            <label for="huey">Tengo este documento</label>
        </td>
    </tr>
</table>