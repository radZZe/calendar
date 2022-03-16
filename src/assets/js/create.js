$(document).ready(function () {

var url_path = $("body").data("prefix");

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

dragula([document.getElementById('dragula')]);

function progress_step( step = 1 ){

   $('.create-list-tabs > div').hide();
   $(".create-tab-"+step).show();

}

$(document).on('click','.create-list-categories a', function (e) { 

    var _this = $(this);

    var data_id = $(this).attr("data-id");

    $.ajax({type: "POST",url: url_path + "systems/ajax/ads.php",data: "id="+data_id+"&action=create_load_category",dataType: "json",cache: false,success: function (data) {  
       
       if(data["status"] == true){

         $(".create-list-categories .row").html(data["data"]);

       }else{

         progress_step( 2 );
         
         $(".create-list-categories a").removeClass("active");
         _this.addClass("active");

         $("input[name=c_id]").val(data_id);

         if( parseInt(data["variant_price"]) == 1 ){
             $(".display-stock-shop, .display-online-view").hide();
         }else{
             $(".display-stock-shop, .display-online-view").show();
         }

         if( parseInt(data["price"]) ){

           $(".create-tab-3").attr("data-tab", "show");
           $(".variant-price-name").html(data["price_name"]);

           if( parseInt(data["auction"]) ){
              $(".var_price_list").show();
           }else{
              $(".var_price_list").hide();
              $(".var_price_1").show();
              $(".var_price_2").hide();
              $("#var_price_fix").prop("checked", true);
           }

           if( parseInt(data["secure"]) ){
              $(".auction_price_sell").show();
           }else{
              $(".auction_price_sell").hide();
           }

         }else{
            $(".create-tab-3").attr("data-tab", "hide");
         }

         if( data["filters"] ){
             $(".ad-filters").html(data["filters"]);
             $(".create-tab-4").attr("data-tab", "show");
         }else{
             $(".ad-filters > div").remove();
             $(".ad-filters").html("");
             $(".create-tab-4").attr("data-tab", "hide");
         }

       }

    }});
   
   e.preventDefault();

});

$(document).on('click','.create-list-categories-back', function (e) { 

    var data_id = $(this).attr("data-id");

    $.ajax({type: "POST",url: url_path + "systems/ajax/ads.php",data: "id="+data_id+"&action=create_load_category_back",dataType: "html",cache: false,success: function (data) {  

       $(".create-list-categories .row").html(data);

    }});
   
   e.preventDefault();
   
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


function ad_create(){

    $.ajax({type: "POST",url: url_path + "systems/ajax/ads.php",data: $(".ads-form-ajax").serialize()+"&action=ad-create",dataType: "json",cache: false,success: function (data) { 

       if(data["status"] == true){

            location.href = data["location"];

        }else{

            alert( data["answer"] );
            $("button, .create-tab-continue").prop('disabled', false);

        }

    }});

}

$(document).on('change','input[name=var_price]', function (e) { 

    if( $(this).val() == "fix" ){

       $(".var_price_1").show();
       $(".var_price_2").hide();

    }else if( $(this).val() == "auction" ){
       
       $(".var_price_2").show();
       $(".var_price_1").hide();

    }

});


$(document).on('click','.create-tab-continue', function (e) { 
    
    $(".msg-error").hide();

    var element = $(this);

    $(this).prop('disabled', true);
    
    var step = parseInt($(this).attr("data-step"));

    $.ajax({type: "POST",url: url_path + "systems/ajax/ads.php",data: $(".ads-form-ajax").serialize() + "&step="+step+"&action=create_progress_step",dataType: "json",cache: false,success: function (data) { 

        if(data["status"] == true){

            if( step == 6 ){

               ad_create();

            }else{

               findNextTab( step + 1 );

            }

        }else{

            $.each( data["answer"] ,function(index,value){
              
              $(".msg-error[data-name="+index+"]").html(value).show();

            });

            element.prop('disabled', false);

        }

     }
    });
  
  e.preventDefault();
     
});

$(document).on('click','.create-tab-prev', function (e) { 
    
    var step = parseInt($(this).attr("data-step"));

    $("button, .create-tab-continue").prop('disabled', false);

    findPrevTab(step-1);

});

function findPrevTab(step){
  if( $(".create-tab-"+step).attr("data-tab") == "show" ) 
    progress_step( step );
  else 
    if(step != 1) return findPrevTab(step-1); else progress_step( 1 );
}

function findNextTab(step){
  if( $(".create-tab-"+step).attr("data-tab") == "show" ) 
    progress_step( step );
  else 
    if(step != 6) return findNextTab(step+1); else progress_step( 6 );
}


$(document).on('change','input[name=stock]', function (e) { 
    
    if( $(this).prop("checked") == true ){
       $(".price_stock").show();
    }else{
       $(".price_stock").hide();
    }

});


});

$(window).load(function() { 

    $(".display-load-page").show();
    $(".preload").hide();

});