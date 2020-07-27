<?php
$procsig = 'P1';
if ($estado == '1')
    foreach ($condicional->result() as $proc)
        $proceso = $proc->codProcesoSI;
else
    foreach ($condicional->result() as $proc)
        $proceso = $proc->codProcesoNO;


header("Location:http://localhost:8080/motor/index.php/controlador/recorrido?procsig=$proceso&btnEnviar=Siguiente");