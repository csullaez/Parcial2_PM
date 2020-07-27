<?php
$msg = "Debe presentar todos sus documentos para continuar con su inscripcion!!!";
if (isset($sw))
    if ($sw == 1)
        $msg = "La presentacion de los documentos fue exitosa!!";
foreach ($abc->result() as $proc) {
?>
    <ul>
        <li><?php $flujo = $proc->codFlujo;
            $proceso = $proc->codProceso;
            $ps = $proc->codProcesoSiguiente;
            $pantalla = $proc->pantalla;
            ?>
        </li>
    </ul>
<?php
}
header("Location:http://localhost:8080/motor/index.php/controlador/?flujo=$flujo&proceso=$proceso&procsig=$ps&pantalla=$pantalla&mensaje=$msg&estado=$sw");
?>