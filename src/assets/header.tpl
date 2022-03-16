
<header class="d-block d-lg-none" >
  <div class="top-toolbar schema-color-header" >

    <div class="top-toolbar-container" >

      <div class="row no-gutters" >

         <div class="col-md-2 col-sm-2 col-2" >

            <a class="h-logo-mobile" href="<?php echo _link(); ?>" title="<?php echo $ULang->t($settings["title"]); ?>" >
                <img src="<?php echo $settings["logotip-mobile"]; ?>" data-inv="<?php echo $settings["logo_color_inversion"]; ?>" alt="<?php echo $ULang->t($settings["title"]); ?>">
            </a>

         </div>
         <div class="col-md-10 col-sm-10 col-10 text-right" >
            
           <?php if($settings["visible_lang_site"]){ ?>
            <div class="toolbar-dropdown dropdown-hover">
              <span><img width="20px" src="<?php echo Exists( $config["media"]["other"],$_SESSION["langSite"]["image"],$config["media"]["no_image"] ); ?>"></span>
              <div class="toolbar-dropdown-box width-180 right-0 no-padding">

                   <div class="dropdown-box-list-link dropdown-lang-list">

                      <?php
                        $getLang = getAll("select * from uni_languages where status=?", [1]);
                        if(count($getLang)){
                           foreach ($getLang as $key => $value) {
                              ?>
                              <a href="<?php echo trim($config["urlPath"] . "/" . $value["iso"] . "/" . REQUEST_URI, "/"); ?>"> <img src="<?php echo Exists( $config["media"]["other"],$value["image"],$config["media"]["no_image"] ); ?>"> <span><?php echo $value["name"]; ?></span> </a>
                              <?php
                           }
                        }
                      ?>

                   </div>

              </div>
            </div>
            <?php } ?>
            

            <a href="#" class="toolbar-link mobile-menu open-modal" data-id-modal="modal-geo" > <i class="las la-map-marker icon-link"></i> </a>
            <a href="#" class="toolbar-link mobile-open-big-menu" > <i class="las la-times icon-link mobile-icon-menu-close"></i> <i class="las la-bars icon-link mobile-icon-menu-open"></i> </a>
            <?php echo $Profile->headerUserMenu(false); ?>

         </div>

      </div>

    </div>
    
  </div>
</header>

<header class="d-none d-lg-block" >
  <div class="top-toolbar schema-color-header" >

    <div class="top-toolbar-container" >

      <div class="row no-gutters" >
         <div class="col-lg-6 col-md-6" >

            <a class="h-logo" href="<?php echo _link(); ?>" title="<?php echo $ULang->t($settings["title"]); ?>" >
                <img src="<?php echo $settings["logotip"]; ?>" data-inv="<?php echo $settings["logo_color_inversion"]; ?>" width="100px" alt="<?php echo $ULang->t($settings["title"]); ?>">
            </a>
            
            <div <?php if(!$settings["city_id"]){ ?> class="toolbar-link open-modal" data-id-modal="modal-geo" <?php }else{ ?> class="toolbar-link" <?php } ?> >
              <span> <i class="las la-map-marker-alt icon-link-middle"></i> <?php if($_SESSION["geo"]["data"]){ echo $ULang->t($Geo->change()["name"], [ "table"=>"geo", "field"=>"geo_name" ] ); }else{ echo $ULang->t('Выберите город'); } ?></span>
            </div> 
                 
            <div class="toolbar-link open-big-menu" >
              <span> <i class="las la-times icon-menu-close icon-link-middle"></i> <i class="las la-bars icon-menu-open icon-link-middle"></i> <?php echo $ULang->t("Категории"); ?> </span>
            </div>

            <a class="toolbar-link" href="<?php echo _link("blog"); ?>" >
              <?php echo $ULang->t("Блог"); ?>
            </a>

         </div>
         <div class="col-lg-6 col-md-6 text-right" >
           
           <?php if($settings["visible_lang_site"]){ ?>
            <div class="toolbar-dropdown dropdown-hover">
              <span><img width="20px" style="margin-right: 5px;" src="<?php echo Exists( $config["media"]["other"],$_SESSION["langSite"]["image"],$config["media"]["no_image"] ); ?>"> <?php echo $_SESSION["langSite"]["name"]; ?></span>
              <div class="toolbar-dropdown-box width-180 right-0 no-padding">

                   <div class="dropdown-box-list-link dropdown-lang-list">

                      <?php
                        $getLang = getAll("select * from uni_languages where status=?", [1]);
                        if(count($getLang)){
                           foreach ($getLang as $key => $value) {
                              ?>
                              <a href="<?php echo trim($config["urlPath"] . "/" . $value["iso"] . "/" . REQUEST_URI, "/"); ?>"> <img src="<?php echo Exists( $config["media"]["other"],$value["image"],$config["media"]["no_image"] ); ?>"> <span><?php echo $value["name"]; ?></span> </a>
                              <?php
                           }
                        }
                      ?>

                   </div>

              </div>
            </div>
            <?php } ?>

            <div class="toolbar-button-box" >
              <a href="<?php echo _link("ad/create"); ?>" class="toolbar-link-button" > <?php echo $ULang->t("Подать объявление"); ?> </a>
            </div>

            <?php echo $Profile->headerUserMenu(); ?>

         </div>
      </div>

    </div>
    
  </div>
</header>

<div class="header-big-category-menu" >

    <div class="container" >
        <div class="row no-gutters" >

           <div class="col-lg-3 col-12 col-md-4 col-sm-4" >

              <div class="d-block d-lg-none d-md-none" >
                <a class="mobile-footer-menu-item btn-color-light mb10" href="<?php echo _link("ad/create"); ?>" ><i class="las la-plus"></i> <?php echo $ULang->t("Добавить объявление"); ?></a>
              </div>
             
              <div class="header-big-category-menu-list js-big-category" >

                  <?php
                      $show_first = true;

                      if(count($getCategoryBoard["category_board_id_parent"][0])){
                        foreach ($getCategoryBoard["category_board_id_parent"][0] as $key => $value) {

                          if( $show_first ){
                              $show = 'style="display: block;"';
                              $active = 'class="active"';
                          }else{ $show = ''; $active = ''; }

                          $show_first = false;

                          ?>
                           <div data-id="<?php echo $value["category_board_id"]; ?>" >

                              <a href="<?php echo $CategoryBoard->alias($value["category_board_chain"]); ?>" <?php echo $active; ?> >
                              <img src="<?php echo Exists($config["media"]["other"],$value["category_board_image"],$config["media"]["no_image"]); ?>" >
                              <span><?php echo $ULang->t( $value["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ); ?></span>
                              </a>

                           </div>
                          <?
                          
                          if($value["category_board_image"]){
                              $category_images .= '
                                   <div class="header-big-category-image" data-id-parent="'.$value["category_board_id"].'" '.$show.' >
                                      <div></div>
                                      <img alt="'.$ULang->t( $value["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ).'" src="'.Exists($config["media"]["other"],$value["category_board_image"],$config["media"]["no_image"]).'" >
                                   </div>
                              ';
                          }

                        }
                      }

                      $show_first = true;

                      if(count($getCategoryBoard["category_board_id_parent"][0])){
                        foreach ($getCategoryBoard["category_board_id_parent"][0] as $value) {


                          if( $getCategoryBoard["category_board_id_parent"][ $value["category_board_id"] ] ){

                              if( $show_first ){
                                  $show = 'style="display: block;"';
                              }else{ $show = ''; }

                              $show_first = false;

                              $subcategory_display1 .= '
                                <div class="header-big-subcategory-menu-list js-big-subcategory1" data-id-parent="'.$value["category_board_id"].'" '.$show.' >
                                <h4>'.$ULang->t( $value["category_board_title"], [ "table" => "uni_category_board", "field" => "category_board_title" ] ).'</h4>
                              ';

                              foreach ($getCategoryBoard["category_board_id_parent"][ $value["category_board_id"] ] as $subvalue1) {

                                  $subcategory_display1 .= '
                                     <div data-id="'.$subvalue1["category_board_id"].'" >
                                       <a href="'.$CategoryBoard->alias($subvalue1["category_board_chain"]).'">'.$ULang->t( $subvalue1["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ).'</a>
                                     </div>
                                  ';

                                  if( $getCategoryBoard["category_board_id_parent"][ $subvalue1["category_board_id"] ] ){
                                      
                                      $subcategory_display2 .= '
                                        <div class="header-big-subcategory-menu-list js-big-subcategory2" data-id-parent="'.$subvalue1["category_board_id"].'" >
                                        <h4>'.$ULang->t( $subvalue1["category_board_title"], [ "table" => "uni_category_board", "field" => "category_board_title" ] ).'</h4>
                                      ';

                                      foreach ($getCategoryBoard["category_board_id_parent"][ $subvalue1["category_board_id"] ] as $subvalue2) {
                                          $subcategory_display2 .= '
                                             <div>
                                               <a href="'.$CategoryBoard->alias($subvalue2["category_board_chain"]).'">'.$ULang->t( $subvalue2["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ).'</a>
                                             </div>
                                          ';
                                      }

                                      $subcategory_display2 .= '
                                        </div>
                                      '; 

                                  }

                              }

                              $subcategory_display1 .= '
                                </div>
                              ';                              
                          }


                        }
                      }


                  ?>

              </div>

           </div>

           <div class="col-lg-3 col-md-4 col-sm-4 d-none d-md-block" >
             
              <?php echo $subcategory_display1; ?>

           </div>

           <div class="col-lg-2 col-md-4 col-sm-4 d-none d-md-block" >
             
              <?php echo $subcategory_display2; ?>

           </div>

           <div class="col-lg-4 d-none d-lg-block" >
             
              <?php echo $category_images; ?>

           </div>


        </div>
    </div>
  
</div>


<?php echo $Banners->out( ["position_name"=>"stretching", "current_id_cat"=>$data["category"]["category_board_id"], "categories"=>$getCategoryBoard] ); ?>