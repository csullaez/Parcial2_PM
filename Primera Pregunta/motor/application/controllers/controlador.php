<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Controlador extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->helper('form');
        $this->load->model('flujo_model');
    }
    public function index()
    {
        if (!isset($_GET['flujo'])) {
            $p = 'P1';
            $pantalla = 'averigua.inc.php';
        } else {
            $p = $_GET['proceso'];
            $pantalla = $_GET['pantalla'];
        }
        $data['estado'] = $this->input->get('estado');
        $data['m'] = $this->input->get('mensaje');
        $data['proc'] = $this->flujo_model->obtProceso($p);
        $this->load->view('cabecera');
        $this->load->view($pantalla, $data);
        $this->load->view('motor');
    }
    public function recorrido()
    {
        if ($_GET['btnEnviar'] == 'Siguiente') {
            if (isset($_GET['ci'])) {
                if ($_GET['notas'] == 'no_presento' || $_GET['titulo'] == 'no_presento' || $_GET['boleta'] == 'no_presento' || $_GET['matricula'] == 'no_presento')
                    $data['sw'] = '0';
                else {
                    $data = array(
                        'carnet' => $this->input->get('ci'),
                        'notas' => $this->input->get('notas'),
                        'titulo' => $this->input->get('titulo'),
                        'boleta' => $this->input->get('boleta')
                    );
                    $this->flujo_model->insertarDatosDocumento($data);
                    $data['sw'] = '1';
                }
            }
            if (isset($_GET['estado'])) {
                $p = $_GET['proceso'];
                $data['condicional'] = $this->flujo_model->ProcesoCondicional($p);
                $data['estado'] = $this->input->get('estado');
                $this->load->view('condicional', $data);
            } else {
                $p = $_GET['procsig'];
                $data['abc'] = $this->flujo_model->obtProceso($p);
                $this->load->view('falta_documentos', $data);
            }
        } else {
            $p = $_GET['proceso'];
            if ($data['abc'] = $this->flujo_model->ProcesoAnterior($p)) {
                $this->load->view('falta_documentos', $data);
            } else
                header("Location:http://localhost:8080/motor/index.php/controlador/");
        }
    }
}
