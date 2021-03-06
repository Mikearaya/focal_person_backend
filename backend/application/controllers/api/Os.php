<?php

 class OS extends API {

    public function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->model('os_model');
    }
//get occupation for candidate registration
function occupation_get($id = NULL){
    $decoded_url = urldecode($id);
    $result = $this->os_model->get_occupation($decoded_url);
    $this->response($result,API::HTTP_OK);
}

//get unit of competency for candidate registration
function unit_of_competency_get($id = NULL) {
    $decoded_url = urldecode($id);
    $result = $this->os_model->get_unit_of_competency($decoded_url);
    $this->response($result,API::HTTP_OK);

}
//get assessment price for candidate registration
function assessment_price_get($id = NULL) {
  
    $decoded_url = urldecode($id);


    $result = $this->os_model->get_assessment_price($decoded_url);
    $this->response($result,API::HTTP_OK);
}

//get sector for candidate registration
function sector_get($id = NULL) {
    $decoded_url = urldecode($id);
    $result = $this->os_model->get_sector($id);
    $this->response($result, API::HTTP_OK);
}

}
