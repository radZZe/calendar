<?php
if($parent_value["ads_filters_type"] == "select" || $parent_value["ads_filters_type"] == "select_multi"){

      $findParent = findOne("uni_ads_filters", "ads_filters_id_parent=?", [$parent_value["ads_filters_id"]]);

      if($findParent){

         if(count($getItems) > 0){

             foreach ($getItems as $item_key => $item_value) {

                $active = "";
                $checked = "";

                if($this->checkSelected($parent_value["ads_filters_id"],$item_value["ads_filters_items_id"],$param) == true){
                  $checked = 'checked=""';
                  $active = 'class="uni-select-item-active"';
                }

                $items .= ' 
                   <label '.$active.' > <input type="radio" '.$checked.' name="filter['.$parent_value["ads_filters_id"].'][]" value="'.$item_value["ads_filters_items_id"].'" > <span>'.$ULang->t( $item_value["ads_filters_items_value"] , [ "table" => "uni_ads_filters", "field" => "ads_filters_items_value" ] ).'</span> <i class="la la-check"></i> </label>                       
                ';

             }
         }

         $return .= ' 

            <div class="filter-items filter-items-spacing" id-filter="'.$parent_value["ads_filters_id"].'" main-id-filter="'.$id_filter.'" data-ids="'.$this->idsBuild($parent_value["ads_filters_id"],$getFilters).'" >

              <div class="row" >

                  <div class="col-lg-4" >
                     <label>'.$ULang->t( $parent_value["ads_filters_name"] , [ "table" => "uni_ads_filters", "field" => "ads_filters_name" ] ).'</label>
                  </div>
                  <div class="col-lg-5" >

                      <div class="uni-select" data-status="0" >

                         <div class="uni-select-name" data-name="'.$ULang->t("Не выбрано").'" > <span>'.$ULang->t("Не выбрано").'</span> <i class="la la-angle-down"></i> </div>
                         <div class="uni-select-list" >
                             <label> <input type="radio" value="null" > <span>'.$ULang->t("Не выбрано").'</span> <i class="la la-check"></i> </label>
                             '.$items.'
                         </div>
                        
                      </div>

                  </div>

              </div>
                                    
            </div>

            '.$this->load_podfilters_catalog($parent_value["ads_filters_id"],$param["filter"][$parent_value["ads_filters_id"]][0],$param,$tpl).'

         ';

      }else{

         if(count($getItems) > 0){

             foreach ($getItems as $item_key => $item_value) {

                $active = "";
                $checked = "";

                if($this->checkSelected($parent_value["ads_filters_id"],$item_value["ads_filters_items_id"],$param) == true){
                  $checked = 'checked=""';
                  $active = 'class="uni-select-item-active"';
                }

                $items .= '       
                  <label '.$active.' > <input type="checkbox" '.$checked.' name="filter['.$parent_value["ads_filters_id"].'][]" value="'.$item_value["ads_filters_items_id"].'" > <span>'.$ULang->t( $item_value["ads_filters_items_value"] , [ "table" => "uni_ads_filters", "field" => "ads_filters_items_value" ] ).'</span> <i class="la la-check"></i> </label>                
                ';

             }
         }

         $return .= ' 

            <div class="filter-items filter-items-spacing" id-filter="'.$parent_value["ads_filters_id"].'" main-id-filter="'.$id_filter.'" data-ids="'.$this->idsBuild($parent_value["ads_filters_id"],$getFilters).'" >
              
              <div class="row" >

                  <div class="col-lg-4" >
                     <label>'.$ULang->t( $parent_value["ads_filters_name"] , [ "table" => "uni_ads_filters", "field" => "ads_filters_name" ] ).'</label>
                  </div>
                  <div class="col-lg-5" >

                      <div class="uni-select" data-status="0" >

                         <div class="uni-select-name" data-name="'.$ULang->t("Не выбрано").'" > <span>'.$ULang->t("Не выбрано").'</span> <i class="la la-angle-down"></i> </div>
                         <div class="uni-select-list" >
                             '.$items.'
                         </div>
                        
                      </div>

                  </div>

              </div>
                    
            </div>

         ';

      }


}elseif($parent_value["ads_filters_type"] == "input"){

       if(count($getItems) > 0){

          if(isset($param["filter"][$parent_value["ads_filters_id"]])){
             $slideStart = $param["filter"][$parent_value["ads_filters_id"]]["from"];
             $slideEnd = $param["filter"][$parent_value["ads_filters_id"]]["to"];
          }else{
             $slideStart = $getItems[0]["ads_filters_items_value"];
             $slideEnd = $getItems[1]["ads_filters_items_value"];                           
          }


       }

       $return .= '

            <div class="filter-items filter-items-spacing" id-filter="'.$parent_value["ads_filters_id"].'" main-id-filter="'.$id_filter.'" data-ids="" >

                <div class="col-lg-4" >
                   <label>'.$ULang->t( $parent_value["ads_filters_name"] , [ "table" => "uni_ads_filters", "field" => "ads_filters_name" ] ).'</label>
                </div>
                <div class="col-lg-5" >

                    <div class="filter-input" >
                      <div><span>'.$ULang->t("от").'</span><input type="text" name="filter['.$parent_value["ads_filters_id"].'][from]" value="'.$param["filter"][$parent_value["ads_filters_id"]]["from"].'" /></div>
                      <div><span>'.$ULang->t("до").'</span><input type="text" name="filter['.$parent_value["ads_filters_id"].'][to]" value="'.$param["filter"][$parent_value["ads_filters_id"]]["to"].'" /></div>
                    </div>

                </div>
                  
            </div>

       ';


}
?>