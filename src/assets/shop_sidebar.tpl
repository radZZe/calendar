
<div class="sidebar-shop-filter" >
<div class="shop-category-list" >

<a href="<?php echo $Shop->link( $data["shop"]["clients_shops_id_hash"] ); ?>" <?php if( !$data["current_category"] ){ echo ' class="active" '; } ?> ><?php echo $ULang->t("Все категории"); ?> <i class="las la-check"></i></a>

<?php
 echo $data["category"];
?>
</div>

<div class="sidebar-filter" >
<form class="form-filter" >

<div class="catalog-list-options toggle-list-options catalog-list-options-active" >
    <span class="catalog-list-options-single" >
        
        <?php if( $getCategoryBoard["category_board_id"][ $data["current_category"]["category_board_id"] ]["category_board_secure"] && $settings["secure_status"] ){ ?>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="filter[secure]" <?php if($data["param_filter"]["filter"]["secure"]){ echo 'checked=""'; } ?> id="flsecure" value="1" >
            <label class="custom-control-label" for="flsecure"><?php echo $ULang->t("Безопасная сделка"); ?></label>
        </div>
        <?php } ?>
        
        <?php if( $getCategoryBoard["category_board_id"][ $data["current_category"]["category_board_id"] ]["category_board_auction"] ){ ?>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="filter[auction]" <?php if($data["param_filter"]["filter"]["auction"]){ echo 'checked=""'; } ?> id="flauction" value="1" >
            <label class="custom-control-label" for="flauction"><?php echo $ULang->t("Аукционные товары"); ?></label>
        </div>
        <?php } ?>

        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="filter[online_view]" <?php if($data["param_filter"]["filter"]["online_view"]){ echo 'checked=""'; } ?> id="online_view" value="1" >
            <label class="custom-control-label" for="online_view"><?php echo $ULang->t("Доступен онлайн-показ"); ?></label>
        </div>

        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="filter[vip]" <?php if($data["param_filter"]["filter"]["vip"]){ echo 'checked=""'; } ?> id="flvip" value="1" >
            <label class="custom-control-label" for="flvip"><?php echo $ULang->t("VIP объявления"); ?></label>
        </div>        

    </span>
</div>

<?php 
if($data["current_category"]["category_board_id"]){
    if( $getCategoryBoard["category_board_id"][ $data["current_category"]["category_board_id"] ]["category_board_display_price"] ){ 
    ?>
    <div class="catalog-list-options toggle-list-options <?php if( $data["param_filter"]["filter"]["price"]["from"] || $data["param_filter"]["filter"]["price"]["to"] ){ echo 'catalog-list-options-active'; } ?>" >

        <span class="catalog-list-options-name" >
        <?php 
        if( $getCategoryBoard["category_board_id"][ $data["current_category"]["category_board_id"] ]["category_board_variant_price"] == 1 ){
          echo $ULang->t('Зарплата'); 
        }else{ 
          echo $ULang->t('Цена'); 
        }
        ?>  
        <i class="las la-angle-down"></i>
        </span>
        
        <div class="catalog-list-options-content" >
        <div class="filter-input" >
          <div><span><?php echo $ULang->t("от"); ?></span><input type="text" class="inputNumber" name="filter[price][from]" value="<?php if($data["param_filter"]["filter"]["price"]["from"]) echo $data["param_filter"]["filter"]["price"]["from"]; ?>" /></div>
          <div><span><?php echo $ULang->t("до"); ?></span><input type="text" class="inputNumber" name="filter[price][to]" value="<?php if($data["param_filter"]["filter"]["price"]["to"]) echo $data["param_filter"]["filter"]["price"]["to"]; ?>" /></div>
        </div>
        </div>

    </div>
    <?php 
    } 
}else{
    ?>
    <div class="catalog-list-options toggle-list-options <?php if( $data["param_filter"]["filter"]["price"]["from"] || $data["param_filter"]["filter"]["price"]["to"] ){ echo 'catalog-list-options-active'; } ?>" >

        <span class="catalog-list-options-name" >
        <?php echo $ULang->t("Цена"); ?>  
        <i class="las la-angle-down"></i>
        </span>
        
        <div class="catalog-list-options-content" >
        <div class="filter-input" >
          <div><span><?php echo $ULang->t("от"); ?></span><input type="text" class="inputNumber" name="filter[price][from]" value="<?php if($data["param_filter"]["filter"]["price"]["from"]) echo $data["param_filter"]["filter"]["price"]["from"]; ?>" /></div>
          <div><span><?php echo $ULang->t("до"); ?></span><input type="text" class="inputNumber" name="filter[price][to]" value="<?php if($data["param_filter"]["filter"]["price"]["to"]) echo $data["param_filter"]["filter"]["price"]["to"]; ?>" /></div>
        </div>
        </div>

    </div>    
    <?php
}

?>

<div class="catalog-list-options toggle-list-options <?php if($data["param_filter"]["filter"]["period"]){ echo 'catalog-list-options-active'; } ?>" >
    <span class="catalog-list-options-name" ><?php echo $ULang->t("Срок размещения"); ?> <i class="las la-angle-down"></i></span>
    
    <div class="catalog-list-options-content" >
      
        <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="filter[period]" <?php if($data["param_filter"]["filter"]["period"] == 1){ echo 'checked=""'; } ?> id="flPeriod1" value="1" >
            <label class="custom-control-label" for="flPeriod1"><?php echo $ULang->t("За 24 часа"); ?></label>
        </div>                        

        <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="filter[period]" <?php if($data["param_filter"]["filter"]["period"] == 7){ echo 'checked=""'; } ?> id="flPeriod2" value="7" >
            <label class="custom-control-label" for="flPeriod2"><?php echo $ULang->t("За 7 дней"); ?></label>
        </div>

        <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="filter[period]" <?php if(!$data["param_filter"]["filter"]["period"]){ echo 'checked=""'; } ?> id="flPeriod3" value="" >
            <label class="custom-control-label" for="flPeriod3"><?php echo $ULang->t("За все время"); ?></label>
        </div>

    </div>

</div>

<div class="catalog-more-filter <?php if($data["count_filters"] > 4){ ?>catalog-more-filter-action <?php } ?>" >
<?php echo $Filters->load_filters_catalog( $data["current_category"]["category_board_id"] , $data["param_filter"], "filters_catalog" ); ?>

<?php if($data["count_filters"] > 4){ ?>
<div class="catalog-more-filter-show" > <?php echo $ULang->t("Все фильтры"); ?> <i class="las la-angle-down"></i> </div>
<div class="catalog-more-filter-hide" > <?php echo $ULang->t("Скрыть"); ?> <i class="las la-angle-up"></i> </div>
<?php } ?>

</div>

<div class="form-filter-submit" >
    <button class="btn-custom btn-color-blue submit-filter-form"  > <?php echo $ULang->t("Применить"); ?> </button>
    <?php if($data["param_filter"]["filter"] && !$data["filter"]){ ?>
    <button class="btn-custom action-clear-filter btn-color-light"> <?php echo $ULang->t("Сбросить фильтры"); ?> </button>
    <?php } ?>
</div>

<input type="hidden" name="id_c" value="<?php echo $data["current_category"]["category_board_id"]; ?>" >
<input type="hidden" name="filter[sort]" value="<?php echo $data["param_filter"]["filter"]["sort"]; ?>" >
<input type="hidden" name="id_u" value="<?php echo $data["shop"]["clients_shops_id_user"]; ?>" >

<?php if($data["param_filter"]["search"]){ ?>
<input type="hidden" name="search" value="<?php echo $data["param_filter"]["search"]; ?>" >
<?php } ?>

</form>
</div>


<div class="shop-sidebar-link mt20" >

    <?php if( $data["shop"]["clients_shops_id_user"] != $_SESSION["profile"]["id"] ){ ?>

        <?php if(!$data["locked"]){ ?>
        <div <?php echo $Main->modalAuth( ["attr"=>'class="open-modal" data-id-modal="modal-confirm-block"', "class"=>""] ); ?> ><?php echo $ULang->t("Заблокировать"); ?></div>
        <?php }else{ ?>
        <div <?php echo $Main->modalAuth( ["attr"=>'class="profile-user-block" data-id="'.$data["user"]["clients_id"].'" ', "class"=>"profile-user-block"] ); ?> ><?php echo $ULang->t("Разблокировать"); ?></div>
        <?php } ?>

    <?php } ?>

    <p class="small-title mt15 mb10" ><?php echo $ULang->t("Поделиться"); ?></p>
    <?php echo $data["share"]; ?>

</div>

</div>

