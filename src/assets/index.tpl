<!doctype html>
<html lang="<?php echo getLang(); ?>">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <meta name="description" content="<?php echo $Seo->out(array("page" => "index", "field" => "meta_desc")); ?>">

    <title><?php echo $Seo->out(array("page" => "index", "field" => "meta_title")); ?></title>
    
    <?php include $config["basePath"] . "/templates/head.tpl"; ?>

  </head>

  <body data-prefix="<?php echo $config["urlPrefix"]; ?>" data-type-loading="<?php echo $settings["type_content_loading"]; ?>" >

    <div class="d-block d-md-none" >

        <div class="mobile-footer-menu" >
           <div class="row no-gutters" >
              <div class="col-lg-12 col-12" >
                 <div>
                 <a class="mobile-footer-menu-item btn-color-green" href="<?php echo _link("ad/create"); ?>" ><i class="las la-plus"></i> <?php echo $ULang->t("Добавить объявление"); ?></a>
                 </div>
              </div>
           </div>
        </div>

    </div>

    <?php include $config["basePath"] . "/templates/header.tpl"; ?>
    
     <?php
      if( count($data["sliders"]) ){
           ?>

              <div class="load-sliders-wide" >
              <div class="sliders-wide" data-show-slider="<?php echo $settings["media_slider_count_show"]; ?>" data-autoplay="<?php echo $settings["media_slider_autoplay"]; ?>" data-arrows="<?php echo $settings["media_slider_arrows"]; ?>" >
                 
                 <?php
                 foreach ($data["sliders"] as $key => $value) {
                     ?>
                       <div class="sliders-wide-item" data-id="<?php echo $value["sliders_id"]; ?>" >

                            <a title="<?php echo $ULang->t( $value["sliders_title1"] , [ "table"=>"uni_sliders", "field"=>"sliders_title1" ] ); ?>. <?php echo $ULang->t( $value["sliders_title2"] , [ "table"=>"uni_sliders", "field"=>"sliders_title2" ] ); ?>" style="background: url(<?php echo Exists($config["media"]["other"],$value["sliders_image"],$config["media"]["no_image"]); ?>);
                              background-position: right;
                              background-size: contain;
                              background-repeat: no-repeat;
                              background-color: <?php echo $value["sliders_color_bg"]; ?>;
                              display: block;
                              border-radius: 10px;
                              height: <?php echo $settings["media_slider_height"]; ?>px;
                              " target="_blank"  href="<?php echo $Main->sliderLink( $value["sliders_link"] ); ?>">
                              
                              <span class="sliders-wide-title">
                                <span class="sliders-wide-title1"><?php echo $ULang->t( $value["sliders_title1"] , [ "table"=>"uni_sliders", "field"=>"sliders_title1" ] ); ?></span>
                                <span class="sliders-wide-title2"><?php echo $ULang->t( $value["sliders_title2"] , [ "table"=>"uni_sliders", "field"=>"sliders_title2" ] ); ?></span>
                              </span>

                            </a>

                      </div>               
                     <?php
                 }
                 ?>

              </div>
              </div>

           <?php
      }
     ?>


    <div class="container" >
       
       <form class="mt35 form-ajax-live-search" method="get" action="<?php echo $_SESSION["geo"]["alias"] ? _link($_SESSION["geo"]["alias"]) : _link($settings["country_default"]); ?>" >

           <div class="row no-gutters" >
             
             <div class="col-lg-12" >
              
              <div class="main-search" >
                <div>
                  <input type="text" name="search" class="ajax-live-search" autocomplete="off" placeholder="<?php echo $ULang->t("Поиск по объявлениям"); ?>" value="<?php echo clear($_GET["search"]); ?>" >
                  <div class="main-search-results" ></div>
                  <div class="main-search-action" >
                    <button class="btn"><i class="las la-search"></i></button>
                  </div>
                </div>
              </div>

             </div>

           </div>

       </form>

       <div class="catalog-category-slider owl-carousel owl-theme mt35" >
         
        <?php

            if(count($getCategoryBoard["category_board_id_parent"][0])){
              foreach ($getCategoryBoard["category_board_id_parent"][0] as $key => $value) {
                ?>
                  <div class="main-category-list-item" style="width: 150px;" >

                    <div class="main-category-list-icon-circle" style="background-color: <?php echo generateRandomColor(); ?>" ></div>

                    <a href="<?php echo $CategoryBoard->alias($value["category_board_chain"]); ?>">
                      
                      <span class="main-category-list-icon" >
                        
                      <img alt="<?php echo $ULang->t( $value["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ); ?>" src="<?php echo Exists($config["media"]["other"],$value["category_board_image"],$config["media"]["no_image"]); ?>">

                      </span>
                      <span class="main-category-list-name" ><?php echo $ULang->t( $value["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ); ?></span>

                    </a>
                  </div>
                <?php
              }
            }

        ?>

       </div>
       
       <?php echo $Banners->out( ["position_name"=>"index_top"] ); ?>

       <div class="row mt30" >
          <div class="col-lg-9" >
            
            <?php if( count($data["shops"]) ){ ?>
            <h3 class="mt20 mb25 title-and-link" > <strong><?php echo $ULang->t( "Магазины" ); ?></strong> <a href="<?php echo _link("shops"); ?>"><?php echo $ULang->t( "Все магазины" ); ?> </a> </h3>
              <div class="row no-gutters gutters10 mb25" >
                  <?php 
                  
                     foreach ($data["shops"] as $key => $value) {
                         include $config["basePath"] . "/templates/include/shop_grid.php";
                     }
                  
                  ?>
              </div>
            <?php
            } 
            ?>            
            
            <?php if($data["vip"]["count"]){ ?>
            <h3 class="mt20 mb25 title-and-link" > <strong><?php echo $ULang->t( "VIP объявления" ); ?></strong> <a href="<?php echo $data["vip_link"]; ?>"><?php echo $ULang->t( "Все VIP объявления" ); ?> </a> </h3>
              <div class="row no-gutters gutters10 mb25" >
                  <?php 
                  
                     foreach ($data["vip"]["all"] as $key => $value) {
                         include $config["basePath"] . "/templates/include/vip_ad_grid.php";
                     }
                  
                  ?>
              </div>
            <?php
            } 
            ?>

            <h1 style="font-size: 1.75rem;" class="mb25" > <strong><?php echo $data["h1"]; ?></strong> </h1>

            <div class="catalog-results" >
            
                <div class="preload" >

                    <div class="spinner-grow mt80 preload-spinner" role="status">
                      <span class="sr-only"></span>
                    </div>

                </div>

            </div>


          </div>
          <div class="col-lg-3" >

             <?php include $config["basePath"] . "/templates/index_sidebar.tpl"; ?>
            
          </div>
       </div>

       <?php if($data["seo_text"]){ ?> <div class="mt35" > <?php echo $data["seo_text"]; ?> </div> <?php } ?>

       <?php echo $Banners->out( ["position_name"=>"index_bottom"] ); ?>


    </div>

    <div class="mt35" ></div>

    <?php include $config["basePath"] . "/templates/footer.tpl"; ?>

  </body>
</html>