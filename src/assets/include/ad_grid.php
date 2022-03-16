<?php 
$Ads->updateCD($value["ads_id"]);
$image = $Ads->getImages($value["ads_images"]);
$service = $Ads->adServices($value["ads_id"]);
?>
<div class="col-lg-3 col-md-3 col-sm-6 col-6" >
  <div class="item-grid <?php echo $service[2] || $service[3] ? "ads-highlight" : ""; ?>" title="<?php echo $value["ads_title"]; ?>" >
     <a class="item-grid-img" href="<?php echo $Ads->alias($value); ?>" >

       <div class="item-labels" >
          <?php 
          
          echo $Ads->outStatus( $service, $value );

          ?>
       </div>

       <img alt="<?php echo $value["ads_title"]; ?>" class="image-autofocus" src="<?php echo Exists($config["media"]["small_image_ads"],$image[0],$config["media"]["no_image"]); ?>" >
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