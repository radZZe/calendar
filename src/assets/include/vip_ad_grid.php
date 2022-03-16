<?php 
$image = $Ads->getImages($value["ads_images"]);
?>
<div class="col-lg-3 col-md-3 col-sm-6 col-6" >
<div class="item-grid" title="<?php echo $value["ads_title"]; ?>" >
   <a class="item-grid-img" href="<?php echo $Ads->alias($value); ?>" >

     <div class="item-labels" >
        <?php 
        if($Ads->getStatusSecure($value)){
           ?>
           <div class="item-secure" data-tippy-placement="top" title="<?php echo $ULang->t("Доступна безопасная сделка"); ?>" > <i class="las la-shield-alt"></i> </div>
           <?php            
        }          
        if($value["ads_auction"]){
           ?>
           <div class="item-auction" data-tippy-placement="top" title="<?php echo $ULang->t("Аукцион"); ?>" > <i class="las la-gavel"></i> <span <?php echo $Ads->auctionTimeCompletion( $value["ads_auction_duration"], "pulse-time-grid" ); ?> ></span> </div>
           <?php
        }
        ?>
     </div>

     <img alt="<?php echo $value["ads_title"]; ?>" alt="<?php echo $value["ads_title"]; ?>" class="image-autofocus" src="<?php echo Exists($config["media"]["small_image_ads"],$image[0],$config["media"]["no_image"]); ?>" >
     <span class="item-grid-city" ><?php echo $ULang->t( $value["city_name"], [ "table" => "geo", "field" => "geo_name" ] ); ?></span>
   </a>
   <div class="item-grid-info" >
        
        <?php echo $Ads->adActionFavorite($value, "catalog", "item-grid-favorite"); ?>

        <div class="item-grid-price" >
            <?php
                  echo $Ads->outPrice( ["data"=>$value,"class_price"=>"item-grid-price-now","class_price_old"=>"item-grid-price-old"] );
            ?>        
        </div> 

      <a href="<?php echo $Ads->alias($value); ?>" ><?php echo custom_substr($value["ads_title"], 35, "..."); ?></a>
   </div>
</div>
</div>