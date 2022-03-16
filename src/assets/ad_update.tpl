<!doctype html>
<html lang="<?php echo getLang(); ?>">
   <head>
      
      <title><?php echo $data["ads_title"]; ?></title>
      
      <?php include $config["basePath"] . "/templates/head.tpl"; ?>

   </head>
   <body data-prefix="<?php echo $config["urlPrefix"]; ?>">

     <?php include $config["basePath"] . "/templates/header.tpl"; ?>

      <div class="preload" >
          <div class="spinner-grow mt80 preload-spinner" role="status">
            <span class="sr-only"></span>
          </div>
      </div>

      <div class="container display-load-page" >

        <h1 class="h1title mb30 mt30" ><?php echo $ULang->t("Редактирование объявления"); ?></h1>

         <div class="row" >
            <div class="col-lg-9" >

               <form class="ads-form-ajax ads-form-update" >

                  <div class="bg-container" >
                 
                  <div class="row mb15" >

                    <div class="col-lg-3" > <label><?php echo $ULang->t("Категория"); ?><span>*</span></label> </div>
                    <div class="col-lg-9" >
                      
                        <div class="box-change-category" >

                          <span class="change-category" > <?php echo $CategoryBoard->breadcrumb($getCategoryBoard,$data["ads_id_cat"],'{NAME}',' &rsaquo; '); ?> </span>

                          <div class="box-change-category-list" >
                            <?php echo $list_categories; ?>
                          </div>
                          <input type="hidden" name="c_id" value="<?php echo $data["ads_id_cat"]; ?>"  >
                        </div>

                        <div class="msg-error" data-name="c_id" ></div>

                    </div>

                  </div> 
                  
                  <div class="ad-filters max-width-filter-item" <?php if($list_filters){ echo 'style="display: block;"'; } ?> ><?php echo $list_filters; ?></div> 
                  
                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Заголовок"); ?><span>*</span></label> </div>
                    <div class="col-lg-9" >
                      
                        <input type="text" name="title" autocomplete="nope" class="form-control" value="<?php echo $data["ads_title"]; ?>" >
                        <div class="msg-error" data-name="title" ></div>

                    </div>
                  </div>

                  <div class="ad-category-price mb15" <?php if( $getCategoryBoard["category_board_id"][$data["ads_id_cat"]]["category_board_display_price"] ){ echo 'style="display: block;"'; }else{ echo 'style="display: none;"'; } ?> >
                    
                  <div class="row" >
                    <div class="col-lg-3" > <label class="variant-price-name" > <?php if($getCategoryBoard["category_board_id"][$data["ads_id_cat"]]["category_board_variant_price"] == 1){ echo $ULang->t('Зарплата'); }else{ echo $ULang->t('Цена'); } ?> </label> </div>
                    <div class="col-lg-9" >
                      
                      <div class="custom-control custom-radio var_price_fix" <?php if( $settings["functionality"]["auction"] && $getCategoryBoard["category_board_id"][$data["ads_id_cat"]]["category_board_auction"] ){ echo 'style="display: block;"'; }else{ echo 'style="display: none;"'; }  ?> >
                          <input type="radio" class="custom-control-input" name="var_price" id="var_price_fix" value="fix" <?php if(!$data["ads_auction"]){ echo 'checked=""'; } ?> >
                          <label class="custom-control-label" for="var_price_fix"><?php echo $ULang->t("Фиксированная цена"); ?></label>
                      </div>                        

                      <div class="custom-control custom-radio var_price_auction mb15" <?php if( $settings["functionality"]["auction"] && $getCategoryBoard["category_board_id"][$data["ads_id_cat"]]["category_board_auction"] ){ echo 'style="display: block;"'; }else{ echo 'style="display: none;"'; }  ?> >
                          <input type="radio" class="custom-control-input" name="var_price" id="var_price_auction" value="auction" <?php if($data["ads_auction"]){ echo 'checked=""'; } ?> >
                          <label class="custom-control-label" for="var_price_auction"><?php echo $ULang->t("Аукцион"); ?></label>
                      </div>

                      <div class="var_price_1"  <?php if(!$data["ads_auction"]){ echo 'style="display: block;"'; } ?> >

                          <?php if( $data["shop"] ){ ?>
                            
                            <div class="custom-control custom-checkbox mb15 display-stock-shop" <?php if( $getCategoryBoard["category_board_id"][$data["ads_id_cat"]]["category_board_variant_price"] == 1 ){ echo 'style="display:none;"'; } ?> >
                                <input type="checkbox" class="custom-control-input"  <?php if($data["ads_price_old"]){ echo 'checked=""'; } ?> name="stock" id="stock" value="1">
                                <label class="custom-control-label" for="stock"><?php echo $ULang->t("Акция"); ?></label>
                            </div>                                                       

                          <?php } ?>

                          <div class="row" >
                             <div class="col-lg-4 col-6 col-sm-4 col-md-4" >

                                <?php
                                  if( $data["shop"] ){

                                      if( $data["ads_price_old"] ){ ?>
                                        <div class="input-group">
                                          <input type="text" class="form-control inputNumber" name="var_price_1" autocomplete="nope" maxlength="11" value="<?php echo number_format($data["ads_price_old"],0,"."," "); ?>" >
                                          <?php echo $dropdown_currency; ?>
                                        </div>
                                      <?php }else{ ?>
                                        <div class="input-group">
                                          <input type="text" class="form-control inputNumber" name="var_price_1" autocomplete="nope" maxlength="11" value="<?php echo number_format($data["ads_price"],0,"."," "); ?>" >
                                          <?php echo $dropdown_currency; ?>
                                        </div>                                  
                                      <?php }

                                  }else{
                                    ?>

                                      <div class="input-group">
                                        <input type="text" class="form-control inputNumber" name="var_price_1" autocomplete="nope" maxlength="11" value="<?php echo number_format($data["ads_price"],0,"."," "); ?>" >
                                        <?php echo $dropdown_currency; ?>
                                      </div>

                                    <?php
                                  }
                                ?> 
                                
                             </div>
                             <div class="col-lg-4 col-6 col-sm-4 col-md-4" >
                                
                                <?php if( $data["shop"] ){ ?>
                                <div class="price_stock" <?php if($data["ads_price_old"]){ echo 'style="display: block;"'; } ?> >
                                    <div class="input-group" >
                                      <input type="text" class="form-control inputNumber" name="var_stock_price_1" placeholder="<?php echo $ULang->t("Цена со скидкой"); ?>" autocomplete="nope" maxlength="11" value="<?php echo number_format($data["ads_price"],0,"."," "); ?>" >
                                      <div class="input-group-append">
                                         <span class="input-group-text static-currency-sign"> <?php echo $settings["currency_data"][ $data["ads_currency"] ]["sign"]; ?> </span>
                                      </div>                                      
                                    </div>
                                </div>
                                <?php } ?>

                             </div>
                          </div>

                          <div class="msg-error" data-name="var_price_1" ></div>

                      </div>

                    </div>
                  </div>
                  

                  <div class="var_price_2" <?php if($data["ads_auction"]){ echo 'style="display: block;"'; } ?> >
                    
                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("С какой цены начать торг?"); ?></label> </div>
                    <div class="col-lg-9" >

                      <div class="row" >
                        <div class="col-lg-4" >
                          
                           <div class="input-group">
                            <input type="text" class="form-control inputNumber" name="var_price_2" autocomplete="nope" maxlength="11" value="<?php echo number_format($data["ads_price"],0,"."," "); ?>" >
                            <?php echo $dropdown_currency; ?>
                           </div>

                        </div>
                      </div>

                      <div class="msg-error" data-name="var_price_2" ></div>

                    </div>
                  </div>
                  
                  <div class="auction_price_sell" >
                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Цена продажи"); ?></label> </div>
                    <div class="col-lg-9" >
                        <div class="row" >
                          <div class="col-lg-4" >
                             <input type="text" class="form-control inputNumber" name="auction_price_sell" autocomplete="nope" maxlength="11" value="<?php echo number_format($data["ads_auction_price_sell"],0,"."," "); ?>" >
                          </div>
                        </div>
                        <div class="msg-error" data-name="auction_price_sell" ></div>
                        <small><?php echo $ULang->t("Укажите цену, за которую вы готовы сразу продать товар или оставьте это поле пустым если у аукциона нет ограничений по цене."); ?></small>
                    </div>
                  </div>
                  </div>

                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Длительность торгов"); ?></label> </div>
                    <div class="col-lg-9" >
                        <div class="row" >
                          <div class="col-lg-4" >
                            <input type="text" class="form-control" name="auction_duration_day" autocomplete="nope" maxlength="2" value="<?php echo $data["ads_auction_day"]; ?>" >
                          </div>
                        </div>
                        <small><?php echo $ULang->t("От 1-го до 30 дней."); ?></small>
                        <div class="msg-error" data-name="auction_duration_day" ></div>
                    </div>
                  </div>

                  </div>

                  </div>
                  
                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Описание"); ?></label> </div>
                    <div class="col-lg-9" >
                      
                        <textarea class="form-control" name="text" rows="5" ><?php echo $data["ads_text"]; ?></textarea>

                    </div>
                  </div>
                  
                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Видео"); ?></label> </div>
                    <div class="col-lg-9" >
                      
                        <input class="form-control" name="video" type="text" value="<?php echo $data["ads_video"]; ?>" >

                    </div>
                  </div>
                  
                  <div class="display-online-view" >
                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Готовность к онлайн-показу"); ?></label> </div>
                    <div class="col-lg-9" >
                      
                        <p class="create-info" ><?php echo $ULang->t("Выберите, если готовы показать товар/объект с помощью видео-звонка — например, через WhatsApp, Viber, Skype или другой сервис"); ?></p>

                        <div class="custom-control custom-checkbox mt15">
                            <input type="checkbox" <?php if( $data["ads_online_view"] ){ echo 'checked=""'; } ?> class="custom-control-input" name="online_view" id="online_view" value="1" >
                            <label class="custom-control-label" for="online_view"><?php echo $ULang->t("Готов показать онлайн"); ?></label>
                        </div>

                    </div>
                  </div>
                  </div>
                                    
                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Фотографии"); ?></label> </div>
                    <div class="col-lg-9" >
                      
                         <div id="dropzone" class="dropzone sortable" id="dropzone" >
                           
                           <?php
                             $gallery = $Ads->getImages($data["ads_images"]);
                             if(count($gallery)){
                               foreach ($gallery as $key => $name) {
                                $uid = uniqid();
                                  ?>
                                    <div class="dz-preview dz-preview-custom">
                                       <div class="dz-image"><img class="image-autofocus" alt="<?php echo $name; ?>" src="<?php echo Exists($config["media"]["big_image_ads"],$name,$config["media"]["no_image"]); ?>?<?php echo $uid; ?>"></div>
                                       <div class="dz-details">
                                          <div class="dz-size"><span data-dz-size=""><?php echo calcFilesize( filesize( $config["basePath"] . "/" . $config["media"]["big_image_ads"] . "/" . $name ) ); ?></span></div>
                                          <div class="dz-filename"><span data-dz-name="<?php echo $name; ?>"><?php echo $name; ?></span></div>
                                       </div>                                                                             
                                       <div class="dz-dropzone-delete" ><i class="las la-trash-alt"></i></div>
                                       <div class="dz-dropzone-sortable sortable-handle"><i class="las la-arrows-alt"></i></div>
                                       <input type="hidden" name="gallery[<?php echo $uid; ?>]" value="<?php echo $name; ?>" style="display: none;">
                                    </div>                                  
                                  <?php
                               }
                             }
                           ?>

                         </div>

                         <div class="msg-error" data-name="gallery" ></div>

                          <p class="info-label" ><?php echo $ULang->t("Первое фото будет отображаться в результатах поиска, выберите наиболее удачное. Вы можете загрузить до"); ?> <?php echo $settings["count_images_add_ad"]; ?> <?php echo $ULang->t("фотографий в формате JPG или PNG.Максимальный размер фото"); ?> — <?php echo $settings["size_images_add_ad"]; ?>MB.
                          </p>                        

                    </div>
                  </div>

                  <?php if( $settings["ad_create_period"] ){ ?>
                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Срок публикации"); ?></label> </div>
                    <div class="col-lg-9" >
                      
                           <div class="uni-select" data-status="0" style="max-width: 250px;" >

                               <div class="uni-select-name" data-name="<?php echo $ULang->t("Не выбрано"); ?>"> <span><?php echo $ULang->t("Не выбрано"); ?></span> <i class="la la-angle-down"></i> </div>
                               <div class="uni-select-list">
                                   
                                    <?php echo $list_period; ?>
                    
                               </div>
                              
                            </div>                        

                    </div>
                  </div>
                  <?php } ?>

                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Город"); ?><span>*</span></label> </div>
                    <div class="col-lg-9" >
                        
                        <div class="container-custom-search" >
                          <input type="text" autocomplete="nope" class="form-control action-input-search-city" value="<?php echo $data["city_name"]; ?>" >
                          <div class="custom-results SearchCityResults SearchCityOptions" ></div>
                        </div>
                        
                        <div class="msg-error" data-name="city_id" ></div>
                        <input type="hidden" name="city_id" value="<?php echo $data["ads_city_id"]; ?>" >

                    </div>
                  </div>
                  
                  <div class="options-area" <?php if($list_area){ echo 'style="display: block"'; }else{ echo 'style="display: none"'; } ?> >
                      <div class="row mb15" >
                        <div class="col-lg-3" > <label><?php echo $ULang->t("Район"); ?></label> </div>
                        <div class="col-lg-9" >
                            
                            <div class="container-list-area" >
                              <div class="uni-select" data-status="0" >

                                 <div class="uni-select-name" data-name="<?php echo $ULang->t("Не выбрано"); ?>" > <span><?php echo $ULang->t("Не выбрано"); ?></span> <i class="la la-angle-down"></i> </div>
                                 <div class="uni-select-list" >
                                     <?php echo $list_area; ?>
                                 </div>
                              
                              </div>
                            </div>                               

                        </div>
                      </div>
                  </div>

                  <div class="options-metro"  <?php if($list_metro || $visible_metro){ echo 'style="display: block"'; }else{ echo 'style="display: none"'; } ?> >
                      <div class="row mb15" >
                        <div class="col-lg-3" > <label><?php echo $ULang->t("Метро"); ?></label> </div>
                        <div class="col-lg-9" >
                            
                            <div class="container-list-metro" >
                              <div class="container-custom-search" >
                                <input type="text" class="form-control action-input-search-metro" placeholder="<?php echo $ULang->t("Укажите станцию метро"); ?>" >
                                <div class="custom-results SearchMetroResults" ></div>
                              </div>

                              <div class="ads-container-metro-station" >
                                 <?php echo $list_metro; ?>
                              </div>
                            </div>

                        </div>
                      </div>
                  </div>                

                  <div class="row mb15" >
                    <div class="col-lg-3" > <label><?php echo $ULang->t("Местоположение"); ?></label> </div>
                    <div class="col-lg-9" >
                      
                        <div class="boxSearchAddress" >
                           <input type="text" class="form-control searchMapAddress" id="searchMapAddress" value="<?php echo $data["ads_address"]; ?>" autocomplete="nope" name="address" >
                           <div class="custom-results SearchAddressResults" ></div>
                        </div>

                        <div class="msg-error" data-name="address" ></div>

                        <div class="mapAddress" id="mapAddress" ></div>
                        <input type="hidden" name="map_lat" value="<?php echo $data["ads_latitude"]; ?>" >
                        <input type="hidden" name="map_lon" value="<?php echo $data["ads_longitude"]; ?>" >


                    </div>
                  </div>

                  <div class="row mt45 mb25" >
                    <div class="col-lg-3" ></div>
                    <div class="col-lg-9" >
                      <button class="btn-custom btn-color-blue"> <?php echo $ULang->t("Опубликовать объявление"); ?> <i class="las la-arrow-right"></i> </button>
                    </div>
                  </div>


                  </div>

                  <input type="hidden" name="id_ad" value="<?php echo $data["ads_id"]; ?>" >
                  <input type="hidden" name="currency" value="<?php echo $data["ads_currency"]; ?>" >

               </form>
              
            </div>
            <div class="col-lg-3" ></div>
         </div>

         
      </div>


      <div class="mt45" ></div>

      <?php include $config["basePath"] . "/templates/footer.tpl"; ?>

      <script type="text/javascript">
      Dropzone.autoDiscover = false;
      $(document).ready(function() {

        $( ".sortable" ).sortable({ handle: '.sortable-handle', zIndex: 1000 });

        $(document).on('click','.dz-dropzone-delete', function (e) { 
            
            $(this).parent().find("input").remove();
            $(this).parent().remove().hide();

        });

        var myDrop= new Dropzone("#dropzone", {
          paramName: "file",
          headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },           
          acceptedFiles: "image/jpeg,image/png",
          maxFiles: <?php echo $settings["count_images_add_ad"]; ?>,
          url: $("body").data("prefix") + 'systems/ajax/dropzone.php',
          maxFilesize: <?php echo $settings["size_images_add_ad"]; ?>,
          dictDefaultMessage: '<?php echo $ULang->t('Выберите или перетащите изображения'); ?>',
          init: function() {
              this.on("addedfile", function(file) {
                  var removeButton = Dropzone.createElement("<div class='dz-dropzone-delete' ><i class='las la-trash-alt'></i></div>");
                  var sortableButton = Dropzone.createElement("<div class='dz-dropzone-sortable sortable-handle' ><i class='las la-arrows-alt'></i></div>");
                  var _this = this;
                  removeButton.addEventListener("click", function(e) {
                      e.preventDefault();
                      e.stopPropagation();
                      _this.removeFile(file);
                  });
                  file.previewElement.appendChild(removeButton);
                  file.previewElement.appendChild(sortableButton);
              });
              this.on('completemultiple', function(file, json) {
              });        
          },
          success: function(file, response){

            var response = jQuery.parseJSON( response );
            file.previewElement.appendChild( Dropzone.createElement(response["input"]) );

            $( file.previewTemplate ).find("img").attr( "src", response["link"] );
            $( file.previewTemplate ).find("img").addClass( "image-autofocus" );
                   
          }
        });
      });
      </script>

      <?php echo $Geo->vendorMap(); ?>

      <?php echo $Ads->mapAdAddress($data["ads_latitude"],$data["ads_longitude"]); ?>


   </body>
</html>