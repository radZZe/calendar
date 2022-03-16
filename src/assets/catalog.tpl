<!doctype html>
<html lang="<?php echo getLang(); ?>">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="description" content="<?php echo $data["meta_desc"]; ?>">

    <title><?php echo $data["meta_title"]; ?></title>

    <?php if(!$data["seo_allowed"]){ ?> <meta name="robots" content="noindex, nofollow" /> <?php }else{ ?> <link rel="canonical" href="<?php echo _link( explode("?", $_SERVER['REQUEST_URI'])[0] ); ?>"/> <?php } ?>

    <?php include $config["basePath"] . "/templates/head.tpl"; ?>

  </head>

  <body data-prefix="<?php echo $config["urlPrefix"]; ?>" data-type-loading="<?php echo $settings["type_content_loading"]; ?>" >
    
    <div class="modal-custom-bg" id="modal-catalog-filters" style="display: none;" >
        <div class="modal-custom" style="max-width: 750px;" >

          <span class="modal-custom-close" ><i class="las la-times"></i></span>
          
          <h4 class="mb20" > <strong><?php echo $ULang->t("Фильтры"); ?></strong> </h4>

          <?php if( isset( $getCategoryBoard["category_board_id_parent"][$data["category"]["category_board_id"]] ) ){ ?>
          <div class="catalog-list-options toggle-list-options">
              <span class="catalog-list-options-name"><?php echo $ULang->t("Категории"); ?> <i class="las la-angle-down"></i></span>
              
              <div class="catalog-list-options-content catalog-list-category">
                
                    <?php 
                    echo $CategoryBoard->outParent($getCategoryBoard, [ "tpl_parent" => '<a {ACTIVE} href="{PARENT_LINK}">{PARENT_NAME}</a>', "tpl" => '{PARENT_CATEGORY}', "category" => $data["category"] ]); 
                    ?>        

              </div>

          </div>
          <?php }elseif( count($getCategoryBoard["category_board_id_parent"][0]) ){ ?>
          <div class="catalog-list-options toggle-list-options">
              <span class="catalog-list-options-name"><?php echo $ULang->t("Категории"); ?> <i class="las la-angle-down"></i></span>
              
              <div class="catalog-list-options-content catalog-list-category">
                
                    <?php 
                      foreach ($getCategoryBoard["category_board_id_parent"][0] as $key => $value) {
                         ?>
                         <a href="<?php echo $CategoryBoard->alias($value["category_board_chain"]); ?>"><?php echo $ULang->t( $value["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ); ?></a>
                         <?php
                      } 
                    ?>        

              </div>

          </div>            
          <?php } ?>

          <div class="mobile-filter-content" ></div>

        </div>
    </div>
   
    <div class="d-block d-md-none" >

        <div class="mobile-footer-menu" >
           <div class="row no-gutters" >
              <div class="col-lg-12 col-12" >
                 <div>
                    <div class="mobile-footer-menu-item toggle-catalog-filter btn-color-blue" ><i class="las la-bars"></i> <?php echo $ULang->t("Категории и фильтры"); ?></div>
                 </div>
              </div>
           </div>
        </div>

    </div>

    <?php include $config["basePath"] . "/templates/header.tpl"; ?>

    <div class="container" >

       <div class="mt35" ></div>

       <div class="d-none d-md-block catalog-action-options" >
       <form method="get" class="form-ajax-live-search" action="<?php echo $_SESSION["geo"]["alias"] ? _link($_SESSION["geo"]["alias"]) : _link($settings["country_default"]); ?>" >
       <div class="row no-gutters" >
         
         <div class="<?php if($data["city_areas"] || $data["city_metro"]){ echo 'col-lg-9'; }else{ echo 'col-lg-12'; } ?>" >
          
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

         <?php if($data["city_areas"] || $data["city_metro"]){ ?>
         <div class="col-lg-3" >
           <div class="catalog-button-city-option open-modal" data-id-modal="modal-geo-options" >

            <span>
              <?php 
              if($data["city_areas"] && $data["city_metro"]){
                     echo $ULang->t("Метро / Районы");
              }elseif($data["city_areas"]){
                     echo $ULang->t("Районы");
              }elseif($data["city_metro"]){
                     echo $ULang->t("Метро");
              } 
              ?>

              <?php if($Ads->getCountChangeOptionsCity( $data )){ echo '<span class="city-option-count" >'.$Ads->getCountChangeOptionsCity( $data ).'</span>'; } ?> <i class="las la-angle-down"></i> 

            </span>

           </div>
         </div>
         <?php } ?>

       </div>
       
       <?php if($data["category"]["category_board_id"]){ ?>
       <input type="hidden" name="id_c" value="<?php echo $data["category"]["category_board_id"]; ?>" >
       <?php } ?>

       </form>
       </div>
       
       <div class="d-block d-md-none" >
       <form method="get" class="form-ajax-live-search" action="<?php echo $_SESSION["geo"]["alias"] ? _link($_SESSION["geo"]["alias"]) : _link($settings["country_default"]); ?>" >

       <div class="row no-gutters" >
         
         <div class="<?php if($data["city_areas"] || $data["city_metro"]){ echo 'col-lg-9 col-7'; }else{ echo 'col-lg-12'; } ?>" >
          
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

         <?php if($data["city_areas"] || $data["city_metro"]){ ?>
         <div class="col-lg-3 col-5" >
           <div class="catalog-button-city-option open-modal" data-id-modal="modal-geo-options" >

            <span>
              <?php 
              if($data["city_areas"] && $data["city_metro"]){
                     echo $ULang->t("Метро / Районы");
              }elseif($data["city_areas"]){
                     echo $ULang->t("Районы");
              }elseif($data["city_metro"]){
                     echo $ULang->t("Метро");
              } 
              ?>

              <?php if($Ads->getCountChangeOptionsCity( $data )){ echo '<span class="city-option-count" >'.$Ads->getCountChangeOptionsCity( $data ).'</span>'; } ?> <i class="las la-angle-down"></i> 

            </span>

           </div>
         </div>
         <?php } ?>
         
       </div>
       
       <?php if($data["category"]["category_board_id"]){ ?>
       <input type="hidden" name="id_c" value="<?php echo $data["category"]["category_board_id"]; ?>" >
       <?php } ?>
       
       </form>
       </div>
       
       <div class="d-none d-md-block" >

       <div class="catalog-category-slider owl-carousel owl-theme mt35" >
         
        <?php

            if(count($getCategoryBoard["category_board_id_parent"][0])){
              foreach ($getCategoryBoard["category_board_id_parent"][0] as $key => $value) {
                ?>
                  <div class="main-category-list-item" style="width: 150px;" >

                    <div class="main-category-list-icon-circle" style="background-color: <?php echo generateRandomColor(); ?>" ></div>

                    <a href="<?php echo $CategoryBoard->alias($value["category_board_chain"]); ?>">
                      <span class="main-category-list-icon" >

                      <img alt="<?php echo $ULang->t($value["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ); ?>" src="<?php echo Exists($config["media"]["other"],$value["category_board_image"],$config["media"]["no_image"]); ?>">

                      </span>
                      <span class="main-category-list-name" ><?php echo $ULang->t($value["category_board_name"], [ "table" => "uni_category_board", "field" => "category_board_name" ] ); ?></span>
                    </a>
                  </div>
                <?php
              }
            }

        ?>

       </div>

       <?php echo $Banners->out( ["position_name"=>"catalog_top", "current_id_cat"=>$data["category"]["category_board_id"], "categories"=>$getCategoryBoard] ); ?>

       <?php
       $outParent = $CategoryBoard->outParent($getCategoryBoard, [ "tpl_parent" => '<div class="col-lg-3 col-6 col-md-4 col-sm-4" ><a {ACTIVE} href="{PARENT_LINK}">{PARENT_NAME}</a></div>', "tpl" => '{PARENT_CATEGORY}', "category" => $data["category"] ]);
       ?>
       
       <?php if( $outParent ){ ?>
       <div class="catalog-subcategory mb15 mt25" >
          
          <div class="row" >
          <?php 
            echo $outParent; 
          ?>
          </div>

       </div>
       <?php } ?>

       </div>

       <?php echo $Filters->outSeoAliasCategory( $data["category"]["category_board_id"] ); ?>

       <nav aria-label="breadcrumb">
 
          <ol class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">

            <li class="breadcrumb-item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
              <a itemprop="item" href="<?php echo $config["urlPath"]; ?>">
              <span itemprop="name"><?php echo $ULang->t("Главная"); ?></span></a>
            </li>

            <?php echo $data["breadcrumb"]; ?>

          </ol>

        </nav>
          
          <div class="row" >
              <div class="col-lg-9 min-height-600" >

                <div class="row" >
                   <div class="col-lg-8 col-12 col-md-6 col-sm-6" >
                     <h1 class="catalog-title" ><?php echo $data["h1"]; ?></h1>
                   </div>
                   <div class="col-lg-4 col-md-6 col-sm-6 text-right" >

                      <div class="catalog-sort" >
                         <div>
                           
                            <?php echo $Ads->outSorting(); ?>

                         </div>
                         <div data-view="grid" class="catalog-ad-view <?php if($_SESSION["catalog_ad_view"] == "grid" || !$_SESSION["catalog_ad_view"]){ echo 'active'; } ?>" > <i class="las la-border-all"></i> </div>
                         <div data-view="list" class="catalog-ad-view <?php if($_SESSION["catalog_ad_view"] == "list"){ echo 'active'; } ?>" > <i class="las la-list"></i> </div>
                      </div>

                   </div>
                </div>

                <div class="catalog-controls mt25" >
                  
                     <div>
                        <a href="<?php echo $Ads->linkMap( $data ); ?>"><i class="las la-map-marker-alt"></i> <?php echo $ULang->t("На карте"); ?></a>
                     </div>

                     <div>
                        <span class="catalog-ads-subscriptions-add" ><i class="las la-bell"></i> <?php echo $ULang->t("Подписаться"); ?></span>
                     </div>
                   

                </div>

                <div class="mt25" ></div>

                <div class="catalog-results" >
                  
                    <div class="preload" >

                        <div class="spinner-grow mt80 preload-spinner" role="status">
                          <span class="sr-only"></span>
                        </div>

                    </div>

                </div>

              </div>
              <div class="col-lg-3 d-none d-md-block" >

                  
                 <?php include $config["basePath"] . "/templates/catalog_sidebar.tpl"; ?> 


              </div>
          </div>
         
          <?php if($data["seo_text"]){ ?> <div class="mt35" > <?php echo $data["seo_text"]; ?> </div> <?php } ?>

       <div class="mt50" ></div>
       
       <?php echo $Banners->out( ["position_name"=>"catalog_bottom", "current_id_cat"=>$data["category"]["category_board_id"], "categories"=>$getCategoryBoard] ); ?>

    </div>

    <noindex>

    <div class="modal-custom-bg bg-click-close" id="modal-ads-subscriptions" style="display: none;" >
        <div class="modal-custom" style="max-width: 500px;" >

          <span class="modal-custom-close" ><i class="las la-times"></i></span>
          
          <div class="modal-ads-subscriptions-block-1" >

              <h4> <strong><?php echo $ULang->t("Подписка на объявления"); ?></strong> </h4>

              <p><?php echo $ULang->t("Новые объявления будут приходить на электронную почту"); ?></p>
              
              <?php if( !$_SESSION["profile"]["id"] ){ ?>
              <div class="create-info" >
                <?php echo $ULang->t("Для удобного управления подписками"); ?> - <a href="<?php echo _link("auth"); ?>"><?php echo $ULang->t("войдите в личный кабинет"); ?></a>
              </div>
              <?php } ?>
              
              <form class="modal-ads-subscriptions-form mt20" >
                 
                 <label><?php echo $ULang->t("Ваш e-mail"); ?></label>

                 <input type="text" name="email" class="form-control" value="<?php echo $_SESSION["profile"]["data"]["clients_email"]; ?>" >
                 
                 <label class="mt15" ><?php echo $ULang->t("Частота уведомлений"); ?></label>

                 <select name="period" class="form-control" >
                    <option value="1" selected="" ><?php echo $ULang->t("Раз в день"); ?></option>
                    <option value="2" ><?php echo $ULang->t("Сразу при публикации"); ?></option>
                 </select>

                 <input type="hidden" name="url" value="<?php echo $Ads->buildUrlCatalog( $data ); ?>" >

              </form>

              <div class="mt30" >
                 <button class="btn-custom btn-color-blue width100 modal-ads-subscriptions-add mb5" ><?php echo $ULang->t("Подписаться"); ?></button>
              </div>

              <p style="font-size: 13px; color: #7a7a7a;" class="mt15" ><?php echo $ULang->t("При подписке вы принимаете условия"); ?> <a href="<?php echo _link("polzovatelskoe-soglashenie"); ?>"><?php echo $ULang->t("Пользовательского соглашения"); ?></a> <?php echo $ULang->t("и"); ?> <a href="<?php echo _link("privacy-policy"); ?>"><?php echo $ULang->t("Политики конфиденциальности"); ?></a></p>

          </div>

          <div class="modal-ads-subscriptions-block-2" style="text-align: center;" >

              <i class="las la-check checkSuccess"></i>

              <h3> <strong><?php echo $ULang->t("Подписка оформлена"); ?></strong> </h3>

              <p><?php echo $ULang->t("Если вы захотите отписаться от рассылки - просто нажмите на соответствующую кнопку в тексте письма, либо перейдите в раздел"); ?> <a href="<?php if($_SESSION["profile"]["id"]){ echo _link( "user/" . $_SESSION["profile"]["data"]["clients_id_hash"] . "/subscriptions" ); }else{ echo _link( "auth" ); } ?>"><?php echo $ULang->t("управления подписками"); ?></a></p>

          </div>

        </div>
    </div>

    </noindex>

    <div class="mt35" ></div>
    
    <?php include $config["basePath"] . "/templates/footer.tpl"; ?>

  </body>
</html>