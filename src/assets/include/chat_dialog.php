<div class="module-chat-dialog-header" >

	<div class="module-chat-dialog-header-block-1" >
		<img src="<?php echo Exists($config["media"]["small_image_ads"],$getAd["ads_images"][0],$config["media"]["no_image"]); ?>" >
	</div>
	<div class="module-chat-dialog-header-block-2" >
		<a href="<?php echo $Ads->alias($getAd); ?>"><?php echo $getAd["ads_title"]; ?></a>
		<?php if($getAd["ads_status"] == 1){ ?>
		<p><?php echo $Main->price($getAd["ads_price"]); ?></p>
	    <?php }else{ ?>
	    <p> <?php echo $Ads->publicationAndStatus( $getAd ); ?> </p>
	    <?php } ?>
	</div>

	<div class="clr" ></div>

	<div class="dialog-header-menu" >
		<i class="las la-ellipsis-h"></i>

          <div class="chat-options-list" >
            
            <?php if(!$getLocked){ ?>
            <div class="open-modal" data-id-modal="modal-confirm-block" ><i class="las la-user-times"></i> <span><?php echo $ULang->t("Заблокировать"); ?></span></div>
            <?php }else{ ?>
            <div class="chat-user-block" ><i class="las la-user-times"></i> <span><?php echo $ULang->t("Разблокировать"); ?></span></div>
            <?php } ?>
            <div class="open-modal" data-id-modal="modal-confirm-delete" ><i class="las la-trash-alt"></i> <?php echo $ULang->t("Удалить диалог"); ?></div>

          </div>

	</div>
	
</div>
<div class="module-chat-dialog-content" >

	<?php
    if(count($getDialog)){

	   foreach ($getDialog as $key => $value) {
          
          if($value["chat_messages_action"] == 0){
              $list[ date("d.m.Y", strtotime( $value["chat_messages_date"] ) ) ][] = $value;
          }else{
              if(intval($_SESSION['profile']['id']) != $value["chat_messages_id_user"]){
              	 $list[ date("d.m.Y", strtotime( $value["chat_messages_date"] ) ) ][] = $value;
              }
          }
	   	  

	   }
       
       if($list){
	   foreach ($list as $date => $array) {
           
	   	   ?>
	   	   <div class="dialog-content-date" >
	   	   	  <?php echo $date; ?>
	   	   </div>
	   	   <?php

		   foreach ($array as $key => $value) {

		   	   $value["chat_messages_text"] = decrypt($value["chat_messages_text"]);

		   	   if($value["chat_messages_action"] == 0){

		   	   $get = $Profile->oneUser(" where clients_id=?" , array( $value["chat_messages_id_user"] ) );
		   	
		   	   ?>
			   	  <div class="dialog-content-item">
                      
                      <div class="dialog-content-flex" >
				   	  	  <div class="dialog-content-circle-img" >
				   	  	  	<img src="<?php echo $Profile->userAvatar($get["clients_avatar"]); ?>">
				   	  	  </div>
			   	  	  </div>

			   	  	  <div class="dialog-content-msg" >
			   	  	  	<a href="<?php echo _link("user/".$get["clients_id_hash"]); ?>"><?php echo $Profile->name($get); ?></a>
			   	  	  	<p><?php echo $value["chat_messages_text"]; ?></p>
			   	  	  	<span><?php echo date( "H:i", strtotime( $value["chat_messages_date"] ) ); ?></span>
			   	  	  </div>

			   	  	  <div class="clr" ></div>

			   	  </div>
		   	   <?php

		   	   }elseif($value["chat_messages_action"] == 1){

		   	   	  ?>

					 <div class="chat-dialog-content-action" >
					 	<div>
					 	<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9Ikljb25zIj48Zz48ZyBpZD0iSWNvbnNfN18iPjxnPjxwYXRoIGQ9Ik0zNS43MjkzNSwyNS43NDY2MmwwLjgzNTctMC44MjcxYzEuNjExLTEuNjExLDIuNDEyMi0zLjc0NzUsMi40MTIyLTUuODY2OCAgICAgIGMwLTIuMTI3OS0wLjgwMTItNC4yNTU4LTIuNDEyMi01Ljg2NjhjLTMuMjIyMS0zLjIyMjEtOC41MDMxLTMuMjIyMS0xMS43MzM3LDBsLTAuODI3MSwwLjgzNTZsLTAuODM1Ni0wLjgzNTYgICAgICBjLTMuMjIyLTMuMjIyMS04LjUwMzEtMy4yMjIxLTExLjcyNTEsMGMtMS42MTk2LDEuNjExLTIuNDIwOCwzLjczODktMi40MjA4LDUuODY2OGMwLDIuMTE5MywwLjgwMTIsNC4yNTU4LDIuNDIwOCw1Ljg2NjggICAgICBsMC44MjcxLDAuODI3MWwxMS4zMDc2LDExLjMwNzdjMC4yMzUzLDAuMjM1MiwwLjYxNjcsMC4yMzUxLDAuODUxOS0wLjAwMDJMMzUuNzI5MzUsMjUuNzQ2NjIiIHN0eWxlPSJmaWxsOiNFRjRCNTM7Ii8+PC9nPjwvZz48cGF0aCBkPSJNMTcuODAzMjUsMTIuMjQzODJjMCwwLTYuOTMxOC0wLjU0OTEtNy42NTI0LDcuMzA5MmMwLDAsMS40NDEzLTUuNzY1LDcuODU4My01LjQ5MDUgICAgYzAsMCwxLjU5NDEsMC4xNjA1LDEuNTkwMS0wLjgzMTdDMTkuNTk0OTUsMTIuMTQ3MjIsMTcuODAzMjUsMTIuMjQzODIsMTcuODAzMjUsMTIuMjQzODJ6IiBzdHlsZT0iZmlsbDojRjQ3NjgyOyIvPjwvZz48L2c+PC9zdmc+" >
					 	</div>
					 	<?php echo $ULang->t("Покупатель добавил объявление в избранное. Договоритесь с ним о сделке в этом чате."); ?>
					 </div>

		   	   	  <?php

		   	   }elseif($value["chat_messages_action"] == 2){

		   	   	  ?>

					 <div class="chat-dialog-content-action" >
					 	<div>
					 	<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmMyOTg7fS5jbHMtMntmaWxsOiM4OTJlMWQ7fS5jbHMtM3tmaWxsOiNlMTkyN2E7fS5jbHMtNHtmaWxsOiMyNjUyZTQ7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNntmaWxsOiNhYTQ2Mjg7fS5jbHMtN3tmaWxsOiNiZGU1ZWM7fS5jbHMtOHtmaWxsOiMzYjBiMWI7fS5jbHMtOXtmaWxsOiNlNDQ0NTA7fS5jbHMtMTAsLmNscy0xMntmaWxsOm5vbmU7fS5jbHMtMTB7c3Ryb2tlOiNlY2M2YzM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9LmNscy0xMXtmaWxsOiNlY2M2YzM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAzLjg0LDM4bC0xNiw4Ljc4YTUuMiw1LjIsMCwwLDEtNS05LjExLDQuNiw0LjYsMCwwLDEsLjY4LS4zMWwxNy4wOC02LjQxQTMuODksMy44OSwwLDAsMSwxMDMuODQsMzhaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAzLDUzbC0xNS4zLDQuMjlhNS4xMyw1LjEzLDAsMCwxLTIuNzYtOS44OCw1LjM2LDUuMzYsMCwwLDEsLjc4LS4xNWwxNS43Ny0xLjg4QTMuOSwzLjksMCwwLDEsMTAzLDUzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI2LjczLDk4LjY5bDMuNzEtNy4xOHM0LjczLTEuMjksMTcuNjcsNS44NCwxNC4xNSwxMS4xMSwxNC4xNSwxMS4xMS0zLDYtNC41NCw2QzUzLjY0LDExNC43NSwzMy41OSwxMDMsMjYuNzMsOTguNjlaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAxLjMxLDY0LjA1bC0xMC0xLjY2TDk1LDYxLjcyLDg4Ljg2LDY1YTMuOSwzLjksMCwwLDEtNC4zNi02LjQybDUuMjktNC40NWEzLjcxLDMuNzEsMCwwLDEsMy41LS43MWwuMTUsMCw5LjY4LDMuMDZhMy44OSwzLjg5LDAsMCwxLTEuODEsNy41NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDEsNzUuMiw4NS41NCw3Ny40YTQuNTgsNC41OCwwLDAsMS0xLjI5LTkuMDdsLjQxLDAsMTUuNi0uODFBMy44OCwzLjg4LDAsMCwxLDEwMSw3NS4yWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ5LjMsNDQuNTNzLTguNzMsNy4yMy0xMS43MywxMy4zOS02LDQ3LjI2LTYsNDcuMjZMNTQuMSwxMTguNDZhNTIuNTQsNTIuNTQsMCwwLDEsNi0xMS43OGMzLjc3LTUuMjYsMTUtOC44OCwxNy44LTE1LjM0cy0zLjUyLTM5LjYxLTMuMzktNDAuNThTNDkuMyw0NC41Myw0OS4zLDQ0LjUzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTUwLjQzLDUwLjc2cy03LjYsOS4zMS03LjEsMTUuNThhMzEuODIsMzEuODIsMCwwLDAsMi43OCwxMC43N0w1My42LDYyLjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTU5LDgwcy0uNSwxMi44Ni01LjM1LDE3LjcxYTE2Ni45NCwxNjYuOTQsMCwwLDAtMTEuNTMsMTMuNzFsMTIsNy4wOWE1Mi41NCw1Mi41NCwwLDAsMSw2LTExLjc4YzMuNzctNS4yNiwxNS04Ljg4LDE3LjgtMTUuMzQuOTQtMi4yLjgzLTcuNDguMjgtMTMuNTNsLTksLjhaIi8+PHJlY3QgY2xhc3M9ImNscy00IiBoZWlnaHQ9IjU1IiByeD0iNi44NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIxLjUgLTI5LjUpIHJvdGF0ZSg5MCkiIHdpZHRoPSI5MiIgeD0iMjkuNSIgeT0iMTguNSIvPjxyZWN0IGNsYXNzPSJjbHMtNSIgaGVpZ2h0PSI0MyIgcng9IjMuNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjUgLTMwLjUpIHJvdGF0ZSg5MCkiIHdpZHRoPSI3OCIgeD0iMzYuNSIgeT0iMjMuNSIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTIwLjIyLDEwNi41NXM5LjE4LTEzLjA4LDEwLjIyLTE1Yy44MiwyLjQ5LDcuMTMsMTEuMzIsMTQuMTYsMTQuNjJzMTUuMjYsNC42OSwxNy42NiwyLjMzTDU1LjM0LDEyOHMtMjMuMjMuMTItMzUuMTItMjEuNDUiLz48cmVjdCBjbGFzcz0iY2xzLTciIGhlaWdodD0iMTIiIHJ4PSIxLjk3IiB3aWR0aD0iMzEiIHg9IjYwIiB5PSI2NCIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc3LjYyLDYxLjI2LDc0LDYyLjM4bC0zLjY0LDFjLTIuNDQuNjctNC44OSwxLjI5LTcuMzgsMS44N2gwbDIuODQtMS4xN2MtMi42MywyLjg0LTQuMiw2LjQxLTUuMzksMTAuNjVhMTI4Ljg1LDEyOC44NSwwLDAsMC0yLjc1LDE0LjA4QTEwLjYsMTAuNiwwLDEsMSwzNi43LDg1LjUxYTExLjM1LDExLjM1LDAsMCwxLC44NC0yLjc2LDE0MS4xLDE0MS4xLDAsMCwxLDcuNjItMTUsNDcuNzEsNDcuNzEsMCwwLDEsNS41Ny03LjVBMzMsMzMsMCwwLDEsNTguMyw1NGwxLjI3LS43NWEzLjA4LDMuMDgsMCwwLDEsMS41Ny0uNDJoMGMyLjM2LS4xMyw0Ljc0LS4zMSw3LjEyLS41M0w3MS44NCw1MmwzLjUyLS40Mi4yLDBhNSw1LDAsMCwxLDIuMDYsOS43NloiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik01NC41MywxMTQuNzRhNyw3LDAsMCwxLTIuMjksNC43OWMtMS4yNSwxLTIuMjcuNi0yLjI3LTFhNy4xMiw3LjEyLDAsMCwxLDIuMjctNC43OUM1My41MSwxMTIuNjksNTQuNTMsMTEzLjE0LDU0LjUzLDExNC43NFoiLz48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik05MC45LDQwLjQzYzAtLjI0LS4zOC0uNDgtLjYzLS41NHEtNC40OC0xLjA2LTktMmEuODguODgsMCwwLDAtLjczLjM1Yy0uMjkuNDctLjU0LDEtLjc5LDEuNDZhMCwwLDAsMCwxLDAsMGMtLjExLjIyLS4yMS40NC0uMzEuNjYtLjI1LjU2LS40OC40NS0xLjE0LjQ2Qzc1LjIzLDQwLjgxLDY3LjQxLDMzLDY3LjUyLDMwYzAtLjY1LS4xLS44OC40Ni0xLjEzLjMxLS4xNC42My0uMjkuOTMtLjQ1aDBjLjQtLjIuOC0uNDIsMS4xOS0uNjZhLjkxLjkxLDAsMCwwLC4zNS0uNzJxLTEtNC41LTItOWEuOS45LDAsMCwwLS41NS0uNjMsNS45NCw1Ljk0LDAsMCwwLTEuMjctLjA5aC0uMmMtMywuMTctNiwyLjUzLTYsOC41NCwwLDguNDMsMTEuODMsMjIuMDYsMjIuMDcsMjIuMDYsNS43OSwwLDguMTktMi44MSw4LjUxLTUuNjhoMEE2LDYsMCwwLDAsOTAuOSw0MC40M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEwIiBkPSJNNzYuMTEsMjQuMjlhNy40OCw3LjQ4LDAsMCwxLDcuNDgsNy40OCIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik03Ni4xMSwxOC40NUExMy4zMiwxMy4zMiwwLDAsMSw4OS40NCwzMS43NyIvPjxwYXRoIGNsYXNzPSJjbHMtMTEiIGQ9Ik03Ni4xMSwyOC44NXYyLjkySDc5QTIuOTEsMi45MSwwLDAsMCw3Ni4xMSwyOC44NVoiLz48cmVjdCBjbGFzcz0iY2xzLTEyIiBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIvPjwvc3ZnPg==" >
					 	</div>
					 	<?php echo $ULang->t("Ваш номер просмотрели"); ?>
					 </div>

		   	   	  <?php

		   	   }elseif($value["chat_messages_action"] == 3){

		   	   	  ?>

					 <div class="chat-dialog-content-action" >
					 	<div>
					 	<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwOS4yODcgNTA5LjI4NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA5LjI4NyA1MDkuMjg3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGQkQzMDM7IiBjeD0iMjU0LjY0NCIgY3k9IjI1NC42NDQiIHI9IjI1NC42NDQiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM2NDZCNzk7IiBkPSJNMzc0LjY3Niw0My40MDFIMTM0LjYxMmMtNi43ODEsMC0xMi4yMDcsNS40MjUtMTIuMjA3LDEyLjIwN3YzOTguNzUNCgljMCw2Ljc4MSw1LjQyNSwxMi4yMDcsMTIuMjA3LDEyLjIwN2gyMzkuNzI0YzYuNzgxLDAsMTIuMjA3LTUuNDI1LDEyLjIwNy0xMi4yMDdWNTUuMjY5DQoJQzM4Ni41NDMsNDguODI2LDM4MS4xMTgsNDMuNDAxLDM3NC42NzYsNDMuNDAxeiIvPg0KPHJlY3QgeD0iMTMwLjU0MyIgeT0iNzkuMzQzIiBzdHlsZT0iZmlsbDojNkVCMUUxOyIgd2lkdGg9IjI0Ny44NjIiIGhlaWdodD0iMzMzLjY0OCIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzRGNTU2NTsiIGQ9Ik0yNzEuNTk3LDYwLjAxNkgyMzcuNjljLTEuNjk1LDAtMy4wNTIsMS4zNTYtMy4wNTIsMy4wNTJjMCwxLjY5NSwxLjM1NiwzLjA1MiwzLjA1MiwzLjA1MmgzNC4yNDYNCgkJYzEuNjk1LDAsMy4wNTItMS4zNTYsMy4wNTItMy4wNTJDMjc0LjY0OSw2MS4zNzIsMjczLjI5Myw2MC4wMTYsMjcxLjU5Nyw2MC4wMTZ6Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNEY1NTY1OyIgY3g9IjI1NC42NDQiIGN5PSI0MzguNzYiIHI9IjE3LjYzMiIvPg0KPC9nPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZDRkNGRDsiIHBvaW50cz0iMzMwLjU5NiwzMDQuNDg3IDMxOS43NDYsMjk5LjQwMSAzNDEuNDQ2LDI1My42MjYgMTk2LjY2MiwyNTMuNjI2IDE5Ni42NjIsMjQxLjQyIA0KCTM2MS4xMTMsMjQxLjQyICIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojNEY1NTY1OyIgY3g9IjMwOC41NTYiIGN5PSIzNTUuMDA5IiByPSIxNi45NTQiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YxRjNGNzsiIGN4PSIzMDguNTU2IiBjeT0iMzU1LjAwOSIgcj0iOC4xMzgiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzRGNTU2NTsiIGN4PSIyNDcuNTIzIiBjeT0iMzU1LjAwOSIgcj0iMTYuOTU0Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGMUYzRjc7IiBjeD0iMjQ3LjUyMyIgY3k9IjM1NS4wMDkiIHI9IjguMTM4Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjA1ODJGOyIgZD0iTTE1NC4yNzgsMjAzLjEwNWMtMy4zOTEsMC02LjEwMywyLjcxMy02LjEwMyw2LjEwM2MwLDMuMzkxLDIuNzEzLDYuMTAzLDYuMTAzLDYuMTAzaDE3LjYzMnYtMTIuMjA3DQoJSDE1NC4yNzh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNGQ0ZEOyIgZD0iTTMyNy41NDQsMjk1LjY3MkgyMjUuODIzbC00MS43MDYtODkuMTc2Yy0xLjAxNy0yLjAzNC0zLjA1Mi0zLjM5MS01LjQyNS0zLjM5MWgtNi43ODF2MTIuMjA3aDIuNzEzDQoJbDQyLjA0NSw4OS4xNzZjMS4wMTcsMi4wMzQsMy4wNTIsMy4zOTEsNS40MjUsMy4zOTFoMTA1LjQ1MmMzLjczLDAsNy4xMjEsMy4wNTIsNy4xMjEsNy4xMjFjMCwzLjczLTMuMDUyLDcuMTIxLTcuMTIxLDcuMTIxSDIyMy4xMQ0KCWMtMy4zOTEsMC02LjEwMywyLjcxMy02LjEwMyw2LjEwM3MyLjcxMyw2LjEwMyw2LjEwMyw2LjEwM2gxMDQuNDM0YzEwLjUxMSwwLDE5LjMyNy04LjQ3NywxOS4zMjctMTkuMzI3DQoJQzM0Ni44NzIsMzA0LjQ4NywzMzguMDU2LDI5NS42NzIsMzI3LjU0NCwyOTUuNjcyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0YwNTgyRjsiIGQ9Ik0xMzAuNTQzLDc5LjM0M3Y2OC4xNTRjMCwxMy41NjMsMTEuMTg5LDI0Ljc1MiwyNC43NTIsMjQuNzUyczI0Ljc1Mi0xMS4xODksMjQuNzUyLTI0Ljc1MlY3OS4zNDMNCglIMTMwLjU0M3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMUYzRjc7IiBkPSJNMTgwLjM4Nyw3OS4zNDN2NjguMTU0YzAsMTMuNTYzLDExLjE4OSwyNC43NTIsMjQuNzUyLDI0Ljc1MnMyNC43NTItMTEuMTg5LDI0Ljc1Mi0yNC43NTJWNzkuMzQzDQoJSDE4MC4zODd6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjA1ODJGOyIgZD0iTTIyOS44OTEsNzkuMzQzdjY4LjE1NGMwLDEzLjU2MywxMS4xODksMjQuNzUyLDI0Ljc1MiwyNC43NTJjMTMuNTYzLDAsMjQuNzUyLTExLjE4OSwyNC43NTItMjQuNzUyDQoJCVY3OS4zNDNIMjI5Ljg5MXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjA1ODJGOyIgZD0iTTMyOC45MDEsNzkuMzQzdjY4LjE1NGMwLDEzLjU2MywxMS4xODksMjQuNzUyLDI0Ljc1MiwyNC43NTJjMTMuNTYzLDAsMjQuNzUyLTExLjE4OSwyNC43NTItMjQuNzUyDQoJCVY3OS4zNDNIMzI4LjkwMXoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMUYzRjc7IiBkPSJNMjc5LjM5Niw3OS4zNDN2NjguMTU0YzAsMTMuNTYzLDExLjE4OSwyNC43NTIsMjQuNzUyLDI0Ljc1MmMxMy41NjMsMCwyNC43NTItMTEuMTg5LDI0Ljc1Mi0yNC43NTINCglWNzkuMzQzSDI3OS4zOTZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
					 	</div>
					 	<?php echo $ULang->t("Оформление заказа"); ?>
					 </div>

		   	   	  <?php

		   	   }elseif($value["chat_messages_action"] == 4){

		   	   	  $get = $Profile->oneUser(" where clients_id=?" , array( $_SESSION["profile"]["id"] ) );
		   	   	  $getToUser = $Profile->oneUser(" where clients_id=?" , array( $value["chat_messages_id_user"] ) );

		   	   	  ?>

					 <div class="chat-dialog-content-action" >
					 	<div>
					 	<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzA3LjQ5MTIiIHkxPSIyMTYuNzA1NCIgeDI9IjU1NC42NTEyIiB5Mj0iLTMwLjQ1NDYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4wMDM5IDAgMCAtMS4wMDM5IDAuMTkyMiA1MTYuNTYwOSkiPg0KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNBN0YzQ0UiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNjFEQjk5Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8xXyk7IiBkPSJNMzQwLjM2NiwxNjQuMTMzYzkzLjQ4OC0xLjQyOCwxNjkuNzkyLDcyLjE1MywxNzEuNjAyLDE2NS42MzQNCgljMC4yNjYsMTMuNzI1LTEuMTA2LDI3LjA4NC0zLjkzMiwzOS44OThjLTQuNzg2LDIxLjY5Ny03LjYzMSw0My43NzYtNy42MzEsNjUuOTk1djQyLjk0OGMwLDYuNTgtNS4zMzQsMTEuOTE0LTExLjkxNCwxMS45MTQNCgloLTQyLjk0OGMtMjIuMjE5LDAtNDQuMjk4LDIuODQ1LTY1Ljk5NSw3LjYzMWMtMTIuODEzLDIuODI2LTI2LjE3Miw0LjE5OC0zOS44OTcsMy45MzINCgljLTkzLjQ4LTEuODA5LTE2Ny4wNjEtNzguMTExLTE2NS42MzUtMTcxLjU5N0MxNzUuNDA3LDIzOS4yMzgsMjQ5LjExNywxNjUuNTI3LDM0MC4zNjYsMTY0LjEzM3oiLz4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzg4LjM5ODUiIHkxPSIxMzUuODAyNiIgeDI9IjI4My40MTg1IiB5Mj0iMjQwLjc3MjYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4wMDM5IDAgMCAtMS4wMDM5IDAuMTkyMiA1MTYuNTYwOSkiPg0KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MURCOTk7c3RvcC1vcGFjaXR5OjAiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5RTc0Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8yXyk7IiBkPSJNMzQwLjM2NiwxNjQuMTMzYzkzLjQ4OC0xLjQyOCwxNjkuNzkyLDcyLjE1MywxNzEuNjAyLDE2NS42MzQNCgljMC4yNjYsMTMuNzI1LTEuMTA2LDI3LjA4NC0zLjkzMiwzOS44OThjLTQuNzg2LDIxLjY5Ny03LjYzMSw0My43NzYtNy42MzEsNjUuOTk1djQyLjk0OGMwLDYuNTgtNS4zMzQsMTEuOTE0LTExLjkxNCwxMS45MTQNCgloLTQyLjk0OGMtMjIuMjE5LDAtNDQuMjk4LDIuODQ1LTY1Ljk5NSw3LjYzMWMtMTIuODEzLDIuODI2LTI2LjE3Miw0LjE5OC0zOS44OTcsMy45MzINCgljLTkzLjQ4LTEuODA5LTE2Ny4wNjEtNzguMTExLTE2NS42MzUtMTcxLjU5N0MxNzUuNDA3LDIzOS4yMzgsMjQ5LjExNywxNjUuNTI3LDM0MC4zNjYsMTY0LjEzM3oiLz4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTI5Ljk3IiB5MT0iMzMyLjc3NDIiIHgyPSIzOTAuOTIiIHkyPSI3MS44MjQyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMDAzOSAwIDAgLTEuMDAzOSAwLjE5MjIgNTE2LjU2MDkpIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojNjJFMUZCIi8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwQTJGMyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfM18pOyIgZD0iTTIwOS4wOTgsOS45MDlDOTUuMjA0LDguMTY5LDIuMjQ1LDk3LjgxLDAuMDM5LDIxMS42OTYNCgljLTAuMzIzLDE2LjcxOSwxLjM0OCwzMi45OTYsNC43OTIsNDguNjA2YzUuODMsMjYuNDMyLDkuMjk2LDUzLjMzMSw5LjI5Niw4MC40djUyLjMyMmMwLDguMDE2LDYuNDk4LDE0LjUxNSwxNC41MTUsMTQuNTE1aDUyLjMyMg0KCWMyNy4wNjgsMCw1My45NjcsMy40NjYsODAuNCw5LjI5NmMxNS42MSwzLjQ0MywzMS44ODYsNS4xMTUsNDguNjA1LDQuNzkxYzExMy44ODQtMi4yMDUsMjAzLjUyNS05NS4xNjEsMjAxLjc4OS0yMDkuMDUzDQoJQzQxMC4wNjIsMTAxLjQwNiwzMjAuMjY0LDExLjYwNiwyMDkuMDk4LDkuOTA5eiIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNzkuMDM4NCIgeTE9IjIxOC4xOTI2IiB4Mj0iNDEuNjQ0NCIgeTI9IjM1NS41ODI2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMDAzOSAwIDAgLTEuMDAzOSAwLjE5MjIgNTE2LjU2MDkpIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBBMkYzO3N0b3Atb3BhY2l0eTowIi8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNzVDRCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfNF8pOyIgZD0iTTEzMi4xOTMsMjA0LjczOWMtNS44MTYtNi4xOC0xNC4wNDgtMTAuMDYxLTIzLjIwNi0xMC4wNjENCgljLTE3LjYxMywwLTMxLjg5MSwxNC4yNzgtMzEuODkxLDMxLjg5MWMwLDkuMTU3LDMuODgsMTcuMzg5LDEwLjA2MSwyMy4yMDZsNjguNzk0LDY4Ljc5NGM1LjgxNyw2LjE4LDE0LjA0OSwxMC4wNjEsMjMuMjA2LDEwLjA2MQ0KCWMxNy42MTMsMCwzMS44OTEtMTQuMjc4LDMxLjg5MS0zMS44OTFjMC05LjE1Ny0zLjg4MS0xNy4zODktMTAuMDYxLTIzLjIwNkwxMzIuMTkzLDIwNC43Mzl6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iMTA4Ljk4NiIgY3k9IjIyNi41NjUiIHI9IjMxLjg5MSIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF81XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNjguODcxOSIgeTE9IjIxOC4xOTYiIHgyPSIxMzEuNDgxOSIgeTI9IjM1NS41ODYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4wMDM5IDAgMCAtMS4wMDM5IDAuMTkyMiA1MTYuNTYwOSkiPg0KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEEyRjM7c3RvcC1vcGFjaXR5OjAiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA3NUNEIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF81Xyk7IiBkPSJNMjIyLjM4MywyMDQuNzM5Yy01LjgxNi02LjE4LTE0LjA0OC0xMC4wNjEtMjMuMjA2LTEwLjA2MQ0KCWMtMTcuNjEzLDAtMzEuODkxLDE0LjI3OC0zMS44OTEsMzEuODkxYzAsOS4xNTcsMy44OCwxNy4zODksMTAuMDYxLDIzLjIwNmw2OC43OTQsNjguNzk0YzUuODE3LDYuMTgsMTQuMDQ5LDEwLjA2MSwyMy4yMDYsMTAuMDYxDQoJYzE3LjYxMywwLDMxLjg5MS0xNC4yNzgsMzEuODkxLTMxLjg5MWMwLTkuMTU3LTMuODgxLTE3LjM4OS0xMC4wNjEtMjMuMjA2TDIyMi4zODMsMjA0LjczOXoiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGN4PSIxOTkuMTc4IiBjeT0iMjI2LjU2NSIgcj0iMzEuODkxIi8+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzZfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM1OC43MTA0IiB5MT0iMjE4LjE5NDUiIHgyPSIyMjEuMzIwNCIgeTI9IjM1NS41ODQ1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMDAzOSAwIDAgLTEuMDAzOSAwLjE5MjIgNTE2LjU2MDkpIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBBMkYzO3N0b3Atb3BhY2l0eTowIi8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNzVDRCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfNl8pOyIgZD0iTTMxMi41NzIsMjA0LjczOWMtNS44MTYtNi4xOC0xNC4wNDgtMTAuMDYxLTIzLjIwNi0xMC4wNjENCgljLTE3LjYxMywwLTMxLjg5MSwxNC4yNzgtMzEuODkxLDMxLjg5MWMwLDkuMTU3LDMuODgxLDE3LjM4OSwxMC4wNjEsMjMuMjA2bDY4Ljc5NCw2OC43OTRjNS44MTcsNi4xOCwxNC4wNDksMTAuMDYxLDIzLjIwNiwxMC4wNjENCgljMTcuNjEzLDAsMzEuODkxLTE0LjI3OCwzMS44OTEtMzEuODkxYzAtOS4xNTctMy44ODEtMTcuMzg5LTEwLjA2MS0yMy4yMDZMMzEyLjU3MiwyMDQuNzM5eiIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjI4OS4zNzEiIGN5PSIyMjYuNTY1IiByPSIzMS44OTEiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
					 	</div>
					 	<?php echo $ULang->t("У вас новый отзыв от")  . ' <a href="'._link("user/".$getToUser["clients_id_hash"]).'" >'.$Profile->name($getToUser).'</a> '; ?>
					 	<div class="mt15" >
                            
					 		<a class="button-style-custom color-light" href="<?php echo _link("user/".$get["clients_id_hash"]."/reviews"); ?>"><?php echo $ULang->t("Мои отзывы"); ?></a>

					 	</div>
					 </div>

		   	   	  <?php

		   	   }

		   }

	   }

	  }

	 }

	?>
	
</div>

<div class="module-chat-dialog-footer" >

	<?php if(!$getLocked){ ?>
    
	<textarea <?php if($getMyLocked || $getAd["ads_status"] == 8){ echo 'disabled=""'; } ?> maxlength="1000" class="chat-dialog-text" ></textarea>
	
	<?php if(!$getMyLocked && $getAd["ads_status"] != 8){ ?>
	<button class="chat-dialog-send" ><i class="las la-paper-plane"></i></button>
    <?php } ?>

    <?php }else{ ?>

    <div class="chat-dialog-content-block" >
    	<img src="<?php echo $config["urlPath"] ?>/templates/images/stop-icon.png" height="25" >
    	<p><?php echo $ULang->t("Вы внесли пользователя в черный список"); ?></p>
    	<span class="custom-link-2 chat-user-block" ><?php echo $ULang->t("Разблокировать"); ?></span>
    </div>

    <?php } ?>

</div>



