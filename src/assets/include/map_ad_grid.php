<?php
$label = "";
$image = $Ads->getImages($value["ads_images"]);
?>
<div class="map-search-offer-main" >
 <div class="map-search-offer-img" >
    <a href="<?php echo $Ads->alias($value); ?>" >
    <div class="item-labels" ><?php echo $Ads->outStatus( $service, $value ); ?></div>
    <img class="image-autofocus" alt="<?php echo $value["ads_title"]; ?>" src="<?php echo Exists($config["media"]["small_image_ads"],$image[0],$config["media"]["no_image"]); ?>">
    </a>
 </div>
 <div class="map-search-offer-content" >

    <a href="<?php echo $Ads->alias($value); ?>" class="map-search-offer-content-title" > <strong><?php echo custom_substr($value["ads_title"], 35, "..."); ?>, <?php echo $ULang->t( $value["city_name"], [ "table" => "geo", "field" => "geo_name" ] ); ?></strong> </a>
   
    <div class="map-search-offer-content-data" >

       <div class="map-search-offer-content-price" >
         <?php
               echo $Ads->outPrice( ["data"=>$value,"class_price"=>"map-search-offer-content-price-now","class_price_old"=>"map-search-offer-content-price-old"] );
         ?>        
       </div> 

    </div>

    <div class="row no-gutters mt15 mb10" >
       <div class="col-lg-9 col-9 col-sm-9 col-md-9" > <div class="mr5" ><a href="<?php echo $Ads->alias($value); ?>" class="map-search-offer-content-button" ><?php echo $ULang->t("Подробнее"); ?></a></div> </div>
       <div class="col-lg-3 col-3 col-sm-3 col-md-3" > <?php echo $Ads->adActionFavorite($value, "map", "map-search-offer-content-button"); ?> </div>
    </div>

 </div>
 <div class="clr" ></div>
</div>