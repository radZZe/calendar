<?php 
$Ads->updateCD($value["ads_id"]);
$image = $Ads->getImages($value["ads_images"]);
$service = $Ads->adServices($value["ads_id"]);

if($value["ads_auction"]){
  $auction_rate = (int)getOne("select count(*) as total from uni_ads_auction where ads_auction_id_ad=?", [ $value["ads_id"] ])["total"];
}

?>
<div class="col-lg-12" >
  <div class="item-list <?php echo $service[2] || $service[3] ? "ads-highlight" : ""; ?>" title="<?php echo $value["ads_title"]; ?>" >

     <div class="row no-gutters" >
       <div class="col-lg-3 col-12 col-md-3 col-sm-12" >
         
         <a class="item-list-img" href="<?php echo $Ads->alias($value); ?>" >

           <div class="item-labels" >
              <?php 
              
              echo $Ads->outStatus( $service, $value );
              
              ?>
           </div>

           <img alt="<?php echo $value["ads_title"]; ?>" class="image-autofocus" src="<?php echo Exists($config["media"]["small_image_ads"],$image[0],$config["media"]["no_image"]); ?>" >
         </a>

       </div>
       <div class="col-lg-9 col-sm-12 col-md-9 col-12" >
          <div class="item-list-content" >
            <div class="row" >
               <div class="col-lg-8 col-8" >
                  <a  class="item-list-title word-break" href="<?php echo $Ads->alias($value); ?>" ><?php echo $value["ads_title"]; ?></a>
                  <span class="item-list-city-name" ><i class="las la-map-marker"></i> <?php echo $ULang->t( $value["city_name"], [ "table" => "geo", "field" => "geo_name" ] ); ?></span>                 
                  <span class="item-list-date" ><i class="las la-clock"></i> <?php echo datetime_format($value["ads_datetime_add"]); ?></span>  
                  <?php if($value["ads_auction"]){ ?>               
                  <span class="item-list-rate" ><i class="las la-gavel"></i> <?php echo $ULang->t("Ставок:"); ?> <?php echo $auction_rate; ?></span>
                  <?php } ?>                 
               </div>
               <div class="col-lg-4 col-4 text-right" >

                  <div class="item-list-price" >
                      <?php
                            echo $Ads->outPrice( ["data"=>$value,"class_price"=>"item-list-price-now","class_price_old"=>"item-list-price-old"] );
                      ?>        
                  </div> 

                  <?php echo $Ads->adActionFavorite($value, "catalog", "item-list-favorite"); ?>              
               </div>
            </div>

            <?php if($value["ads_auction"]){ ?>
            <p class="item-list-duration" ><?php echo $ULang->t("Завершается через:"); ?> <span <?php echo $Ads->auctionTimeCompletion( $value["ads_auction_duration"], "pulse-time" ); ?>  ><?php echo $Ads->auctionTime( $value["ads_auction_duration"] ); ?></span></p>
            <div class="item-list-auction-rate" >
              <a href="<?php echo $Ads->alias($value); ?>" class="mt15" > <span><?php echo $ULang->t("Сделать ставку"); ?> <i class="las la-arrow-right"></i></span> </a>
            </div>
            <?php }else{ ?>
            <p class="item-list-content-text word-break" ><?php echo custom_substr($value["ads_text"], 200, "..."); ?></p>
            <?php } ?>
            
          </div>
       </div>
     </div>


  </div>
</div>

<div class="col-lg-12" >
<?php 
echo $Banners->results( ["position_name"=>"result", "current_id_cat"=>$data["category"]["category_board_id"],"categories"=>$getCategoryBoard, "index"=>$key] );
?>
</div>