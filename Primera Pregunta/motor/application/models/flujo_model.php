<?php
if(!defined('BASEPATH')) exit('no se permite acceso directo al script');
    class flujo_model extends CI_Model{
        function __construct(){
            $this->load->database();
        }
        function obtProcesos(){
            $query=$this->db->get('proceso');
            if ($query->num_rows() > 0) return $query;
            else return false;
        }
        function obtProceso($pq){
            $this->db->where('codProceso', $pq);
            $query=$this->db->get('proceso');
            if ($query->num_rows() > 0) return $query;
            else return false;
        }
        function ProcesoAnterior($pq){
            $this->db->where('codProcesoSiguiente', $pq);
            $query=$this->db->get('proceso');
            if ($query->num_rows() > 0) return $query;
            else return false;
        }
        function ProcesoCondicional($pq){
            $this->db->where('codProceso', $pq);
            $query=$this->db->get('procesocondicion');
            if ($query->num_rows() > 0) return $query;
            else return false;
        }
        function insertarDatosDocumento($data){
            $this->db->insert('flujo.documento', array(
                'carnet'=>$data['carnet'], 
                'notas'=>$data['notas'], 
                'titulo'=>$data['titulo'], 
                'boleta'=>$data['boleta']));
        }
    }
?>