<?php
class Focal extends API {

    public function __construct($config = 'rest') {
       
        parent::__construct($config);
        
      $this->load->model('focal_model');

}  
function index_post(){

        $contact_person=$this->input->post('contact_person',true);
        $password=$this->input->post('password',true);
        $focal=$this->focal_model->select_focal($contact_person,$password);
        if(!$focal){
            $result = array('success' => false);
        }
        else{
            $this->session->set_userdata('center_code',$focal['center_code']);
            $this->session->set_userdata('center_name',$focal['center_name']);
            $this->session->set_userdata('contact_person',$focal['contact_person']);
            $result = array('success' => true);
           
        }
   
    $this->response($result, API::HTTP_OK);
}

}



?>
