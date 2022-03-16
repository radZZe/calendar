$(document).ready(function () {

var url_path = $("body").data("prefix");

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

dragula([document.getElementById('dragula')]);

$(document).on('click','.box-change-category-list-item', function (e) { 

    var _this = $(this);

    var data_id = _this.attr("data-id");

    $('.box-change-category-list-item').removeClass("active");

    $.ajax({type: "POST",url: url_path + "systems/ajax/ads.php",data: "id="+data_id+"&action=update_load_category",dataType: "json",cache: false,success: function (data) {  

       if(data["status"] == true){
         $(".box-change-category-list").html(data["data"]);
       }else{

       	 $(".box-change-category-list").hide();
       	 $(".change-category").html( _this.attr("data-name") );
       	
         $("input[name=c_id]").val(data_id);

         if( parseInt(data["variant_price"]) == 1 ){
             $(".display-stock-shop, .display-online-view").hide();
         }else{
             $(".display-stock-shop, .display-online-view").show();
         }

         if( parseInt(data["price"]) ){

            $(".ad-category-price").show();
            $(".variant-price-name").html(data["price_name"]);

           if( parseInt(data["auction"]) ){
              $(".var_price_fix").show();
              $(".var_price_auction").show();
           }else{
              $(".var_price_fix").hide();
              $(".var_price_auction").hide();
              $(".var_price_1").show();
              $(".var_price_2").hide();
              $(".var_price_fix input").prop("checked", true);
           }

           if( parseInt(data["secure"]) ){
              $(".auction_price_sell").show();
           }else{
              $(".auction_price_sell").hide();
           }

         }else{
            $(".ad-category-price").hide();
         }

         if( data["filters"] ){
             $(".ad-filters").html(data["filters"]);
         }else{
             $(".ad-filters > div").remove();
             $(".ad-filters").html("");
         }

       }

    }});

});

$(document).on('change','.ad-filters input[type=radio]', function (e) { 

    var id_filter = $(this).closest(".filter-items").attr("id-filter");
    var id_parent = $(this).closest(".filter-items").attr("main-id-filter");
    var id_item = $(this).val();
    var element = $(this);

    if($(this).closest(".filter-items").attr("data-ids") != undefined){
       var ids = $(this).closest(".filter-items").attr("data-ids").split(",");
    }

    if(ids){

      $.each(ids,function(index,value){

        $('div[id-filter="'+value+'"]').remove();

      });

    }

    if($(this).val() != "null"){ 

      $.ajax({type: "POST",url: url_path + "systems/ajax/ads.php",data: "id_filter="+id_filter+"&id_item="+id_item+"&view=ad&action=load_items_filter",dataType: "html",cache: false,success: function (data) {

          element.closest(".filter-items").after(data);

      }}); 

    }

    e.preventDefault();
});

$(document).on('click','.change-category', function (e) { 

    $(".box-change-category-list").show();

});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".change-category").length && !$(e.target).closest(".box-change-category-list").length) {
    $('.box-change-category-list').hide();
  }
  e.stopPropagation();
});

 $(document).on('click','.SearchMetroResults div', function (e) { 

    var color = $(this).data("color");
    var name = $(this).data("name");
    var id = $(this).data("id");

    if( !$(".ads-container-metro-station").find("input[value="+id+"]").length ){
    
    $(".ads-container-metro-station").append('<span><i style="background-color:'+color+';"></i>'+name+' <i class="las la-times ads-metro-delete"></i><input type="hidden" value="'+id+'" name="metro[]"></span>');
    
    }

    $(".SearchMetroResults").hide();
    $(".action-input-search-metro").val("");

 });

 $(document).on('click','.ads-metro-delete', function (e) { 

    $(this).parent().remove();

 });

 $(document).on('input click','.action-input-search-metro', function (e) { 
    $.ajax({type: "POST",url: url_path + "systems/ajax/geo.php",data: "city_id=" + $("input[name=city_id]").val() + "&search="+$(this).val()+"&action=search_metro",dataType: "html",cache: false,success: function (data) { if(data != false){ $(".SearchMetroResults").html(data).show(); }else{ $(".SearchMetroResults").html("").hide(); }  }});  
 });

 $(document).on('change','input[name=type_person]', function (e) {
   if($(this).val() == "company"){ $(".ads-name-company").show(); }else{ $(".ads-name-company").hide(); }
 });

 $(document).on('click','.SearchCityOptions .item-city', function () {  
    $.ajax({type: "POST",url: url_path + "systems/ajax/geo.php",data: "id="+$(this).attr("id-city")+"&action=city-options",dataType: "json",cache: false,success: function (data) { if( data["metro"] ){ $(".container-list-metro").html( data["metro"] ); $(".options-metro").show(); }else{ $(".options-metro").hide(); $(".container-list-metro").find("input").remove(); }  if( data["area"] ){ $(".container-list-area").html( data["area"] ); $(".options-area").show(); }else{ $(".options-area").hide(); $(".container-list-area").find("input").remove(); }   }});
 });

$(document).on('submit','.ads-form-update', function (e) { 

  $('.msg-error').hide();

  $('.ads-form-ajax button').prop('disabled', true);

    $.ajax({type: "POST",url: url_path + "systems/ajax/ads.php",data: $(this).serialize()+"&action=ad-update",dataType: "json",cache: false,success: function (data) { 

       if(data["status"] == true){

            location.href = data["location"];

        }else{

            $('.ads-form-ajax button').prop('disabled', false);
             
            var temp = [];

            $.each( data["answer"] ,function(index,value){
              
              temp.push(index);

              $(".msg-error[data-name="+index+"]").html(value).show();

            });

            $('html, body').animate({ scrollTop: $(".msg-error[data-name="+temp[0]+"]").offset().top-130 }, 500); 

        }

    }});

    e.preventDefault();

});

$(document).on('change','input[name=var_price]', function (e) { 

    if( $(this).val() == "fix" ){

       $(".var_price_1").show();
       $(".var_price_2").hide();

    }else if( $(this).val() == "auction" ){
       
       $(".var_price_2").show();
       $(".var_price_1").hide();

    }

});

$(document).on('change','input[name=stock]', function (e) { 
    
    if( $(this).prop("checked") == true ){
       $(".price_stock").show();
    }else{
       $(".price_stock").hide();
    }

    $("input[name=var_stock_price_1]").val("");

});


});

$(window).load(function() { 

    $(".display-load-page").show();
    $(".preload").hide();

});