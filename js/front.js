jQuery(document).ready(function(){
	jQuery('body').on('click','.form_option_billing',function() {
		jQuery('body').addClass("ocwma_billing_popup_body");
		jQuery('body').append('<div class="ocma_loading"><img src="'+ object_name +'/images/loader.gif" class="ocma_loader"></div>');
		var loading = jQuery('.ocma_loading');
		loading.show();

		var id = jQuery(this).data("id");
		var current = jQuery(this);
		jQuery.ajax({
			url:ajax_url,
			type:'POST',
			data:'action=productscommentsbilling&popup_id_pro='+id,
			success : function(response) {
				var loading = jQuery('.ocma_loading');
				loading.remove(); 
				jQuery("#ocwma_billing_popup").css("display","block");
				jQuery("#ocwma_billing_popup").html(response);
			},
			error: function() {
				alert('Error occured');
			}
		});
	   return false; 
    });
	var modal = document.getElementById("ocwma_billing_popup");
	var span = document.getElementsByClassName("ocwma_close")[0];
	jQuery(document).on('click','.ocwma_close',function(){
		jQuery("#ocwma_billing_popup").css("display","none");
		jQuery('body').removeClass("ocwma_billing_popup_body");
	});
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
		jQuery('body').removeClass("ocwma_billing_popup_body");
	  }
	}


jQuery(document).ready(function(){
	jQuery('body').on('click','.form_option_edit',function(){
		
		jQuery('body').addClass("ocwma_billing_popup_body");
		jQuery('body').append('<div class="ocwqv_loading"><img src="'+ object_name +'/images/loader.gif" class="ocwqv_loader"></div>');
		var loading = jQuery('.ocwqv_loading');
		loading.show();

		var id = jQuery(this).data("id");
		var eid = jQuery(this).data("eid-bil");
		var current = jQuery(this);
		jQuery.ajax({
			url:ajax_url,
			type:'POST',
			data:'action=productscommentsbilling&popup_id_pro='+id+'&eid-bil='+eid,
			dataType: 'JSON',
			success : function(response) {
				var loading = jQuery('.ocwqv_loading');
				var html = response[0].html;
				loading.remove();
				jQuery("#ocwma_billing_popup").css("display","block");
				jQuery("#ocwma_billing_popup").html(html);
				jQuery( '#billing_country' ).trigger( 'change' );
				jQuery( '#billing_state' ).trigger( 'change' );
			},
			error: function() {
				alert('Error occured');
			}
		});
	   return false; 
   	});

	var modal = document.getElementById("ocwma_billing_popup");
	var span = document.getElementsByClassName("ocwma_close")[0];
	jQuery(document).on('click','.ocwma_close',function(){
		jQuery("#ocwma_billing_popup").css("display","none");
		jQuery('body').removeClass("ocwma_billing_popup_body");
	});

	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
		jQuery('body').removeClass("ocwma_billing_popup_body");
	  }
	}
});



jQuery(document).ready(function(){
	//jQuery('.ocwma_select').change(function(){
	jQuery('.choose-saved-address').click(function(){
        //var sid = jQuery(this).val();	 
        var sid = jQuery(this).attr('const-val-id');	 
		var current = jQuery(this);	
			jQuery.ajax({
			url:ajax_url,
			dataType: 'json',
			type:'POST',
			data:'action=productscommentsbilling_select&sid='+sid,
			success : function(response) {
				console.log(response);
                jQuery("#billing_first_name").val(response.billing_first_name);
                jQuery("#billing_last_name").val(response.billing_last_name);
                jQuery("#billing_company").val(response.billing_company);
				jQuery("#billing_country").val(response.billing_country).change();
                jQuery("#billing_address_1").val(response.billing_address_1);
                jQuery("#billing_address_2").val(response.billing_address_2);
                jQuery("#billing_city").val(response.billing_city);
                jQuery("#billing_state").val(response.billing_state).change();
                jQuery("#billing_postcode").val(response.billing_postcode);
                jQuery("#billing_phone").val(response.billing_phone);
                jQuery("#billing_email").val(response.billing_email);
			},
			error: function() {
				alert('Error occured');
			}
		});
	});
});



jQuery(document).ready(function(){
	//jQuery('.ocwma_select_shipping').change(function(){
	jQuery('.choose-saved-shipping-address').click(function(){
        var data = jQuery(this).attr('const-data');	 
        var response = JSON.parse(data);

        console.log(response);

            jQuery("#shipping_first_name").val(response.shipping_first_name);
            jQuery("#shipping_last_name").val(response.shipping_last_name);
            jQuery("#shipping_company").val(response.shipping_company);
			jQuery("#shipping_country").val(response.shipping_country).change();
            jQuery("#shipping_address_1").val(response.shipping_address_1);
            jQuery("#shipping_address_2").val(response.shipping_address_2);
            jQuery("#shipping_Building_number").val(response.shipping_Building_number);
            jQuery("#shipping_city").val(response.shipping_city);
            jQuery("#shipping_region_select").val(response.shipping_region_select).change();
            jQuery("#shipping_postcode").val(response.shipping_postcode);
            jQuery("#shipping_Mobile_number").val(response.shipping_Mobile_number);
            jQuery("#shipping_address_comment").val(response.shipping_address_comment);
            


			


	});
});

jQuery(document).ready(function(){
	//jQuery('.ocwma_select_shipping').change(function(){
	jQuery('.choose-saved-shipping-address-from-order-item').click(function(){
        var data = jQuery(this).attr('const-data');	 
        var response = JSON.parse(data);

        console.log(response);
//{"shipping_first_name":"Yurii","shipping_last_name":"Poliakov","shipping_Mobile_number":"33343234","shipping_country":"Qatar","shipping_postcode":"","shipping_region_select":"doha","shipping_city":"Lviv","shipping_Building_number":"556","shipping_address_1":"nova","shipping_address_comment":"test comment"}
//{"first_name":"test","last_name":"developer","company":"","address_1":"","address_2":"","city":"Lviv-first","state":"","postcode":"","country":"QA","Building_number":"33333"}

	// because we have different names for billing / shipment fields

            jQuery("#shipping_first_name").val(response.shipping_first_name);
            jQuery("#shipping_last_name").val(response.shipping_last_name);
            jQuery("#shipping_company").val(response.shipping_company);
			jQuery("#shipping_country").val(response.shipping_country).change();
            jQuery("#shipping_address_1").val(response.shipping_address_1);
            jQuery("#shipping_address_2").val(response.shipping_address_2);
            jQuery("#shipping_city").val(response.shipping_city);
            jQuery("#shipping_region_select").val(response.shipping_region_select).change();
            jQuery("#shipping_postcode").val(response.shipping_postcode);
            jQuery("#shipping_address_comment").val(response.shipping_address_comment);
            


			


	});
});



	var modal = document.getElementById("ocwma_shipping_popup");
	var span = document.getElementsByClassName("ocwma_close")[0];
	jQuery(document).on('click','.ocwma_close',function(){
		jQuery("#ocwma_shipping_popup").css("display","none");
		jQuery('body').removeClass("ocwma_shipping_popup_body");
	});
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
		jQuery('body').removeClass("ocwma_shipping_popup_body");
	  }
	}
});




jQuery(document).ready(function(){
	jQuery('body').on('click','.form_option_ship_edit',function(){
		jQuery('body').addClass("ocwma_shipping_popup_body");
		jQuery('body').append('<div class="ocma_loading"><img src="'+ object_name +'/images/loader.gif" class="ocma_loader"></div>');
		var loading = jQuery('.ocma_loading');
		loading.show();
	     var id = jQuery(this).data("id");
	     var eid = jQuery(this).data("eid-ship");
		var current = jQuery(this);
		jQuery.ajax({
			url:ajax_url,
			type:'POST',
			data:'action=productscommentsshipping&popup_id_pro='+id+'&eid-ship='+eid,
			success : function(response) {
				var loading = jQuery('.ocma_loading');
				loading.remove(); 
				jQuery("#ocwma_shipping_popup").css("display","block");
				jQuery("#ocwma_shipping_popup").html(response);
				jQuery( '#shipping_country' ).trigger( 'change' );
				jQuery( '#shipping_state' ).trigger( 'change' );

			},
			error: function() {
				alert('Error occured');
			}
		});
	   return false; 
    });
	var modal = document.getElementById("ocwma_shipping_popup");
	var span = document.getElementsByClassName("ocwma_close")[0];
	jQuery(document).on('click','.ocwma_close',function(){
		jQuery("#ocwma_shipping_popup").css("display","none");
		jQuery('body').removeClass("ocwma_shipping_popup_body");
	});
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
		jQuery('body').removeClass("ocwma_shipping_popup_body");
	  }
	}


	jQuery('body').on('click','#oc_add_billing_form_submit',function() {
		jQuery('#oc_add_billing_form').attr('onsubmit','return false;');
		jQuery('#oc_add_billing_form input').removeClass('ocwma_inerror');
		jQuery('#oc_add_billing_form select').removeClass('ocwma_inerror');

		jQuery.ajax({
			url:ajax_url,
			type:'POST',
			data: jQuery('#oc_add_billing_form').serialize() + "&action=ocwma_validate_billing_form_fields",
			dataType: 'JSON',
			success : function(response) {
				var added = response['added'];
				var field_errors = response.field_errors;
				if( added == 'false' ) {
					jQuery.each(field_errors, function(i, item) {
					    jQuery("#oc_add_billing_form #"+i).addClass('ocwma_inerror');
					});
				} else {
					location.reload();	
				}
			},
			error: function() {
				alert('Error occured');
			}
		});
	});


	jQuery('body').on('click','.form_option_shipping',function() {
		
		console.log(jQuery('.checkout.woocommerce-checkout.processing').serialize());

		jQuery.ajax({
			url:ajax_url,
			type:'POST',
			data: jQuery('.checkout.woocommerce-checkout.processing').serialize() + "&action=ocwma_validate_shipping_form_fields",
			dataType: 'JSON',
			success : function(response) {

				console.log(response);

				var added = response['added'];
				var field_errors = response.field_errors;
				if( added == 'false' ) {
					console.log('false');
				} else {
					location.reload();
				}
				
			},
			error: function() {
				alert('Error occured');
			}
		});

		
	});


	jQuery('body').on('click','#oc_edit_billing_form_submit',function() {
		jQuery('#oc_edit_billing_form').attr('onsubmit','return false;');
		jQuery('#oc_edit_billing_form input').removeClass('ocwma_inerror');
		jQuery('#oc_edit_billing_form select').removeClass('ocwma_inerror');

		jQuery.ajax({
			url:ajax_url,
			type:'POST',
			data: jQuery('#oc_edit_billing_form').serialize() + "&action=ocwma_validate_edit_billing_form_fields",
			dataType: 'JSON',
			success : function(response) {
				var added = response['added'];
				var field_errors = response.field_errors;
				
				if( added == 'false' ) {
					jQuery.each(field_errors, function(i, item) {
					    jQuery("#oc_edit_billing_form #"+i).addClass('ocwma_inerror');
					});
				} else {
					location.reload();
				}
			},
			error: function() {
				alert('Error occured');
			}
		});
	});


	jQuery('body').on('click','#oc_edit_shipping_form_submit',function() {
		jQuery('#oc_edit_shipping_form').attr('onsubmit','return false;');
		jQuery('#oc_edit_shipping_form input').removeClass('ocwma_inerror');
		jQuery('#oc_edit_shipping_form select').removeClass('ocwma_inerror');

		jQuery.ajax({
			url:ajax_url,
			type:'POST',
			data: jQuery('#oc_edit_shipping_form').serialize() + "&action=ocwma_validate_edit_shipping_form_fields",
			dataType: 'JSON',
			success : function(response) {
				var added = response['added'];
				var field_errors = response.field_errors;
				
				if( added == 'false' ) {
					jQuery.each(field_errors, function(i, item) {
					    jQuery("#oc_edit_shipping_form #"+i).addClass('ocwma_inerror');
					});
				} else {
					location.reload();
				}
			},
			error: function() {
				alert('Error occured');
			}
		});
	});

	// set billing address
	jQuery('body').on('click','#timeline-shipping',function() {
		var billing_address =  jQuery('#billing_email').val();
		jQuery('#shipping_email').val(billing_address);

	});

	// remove shipment address
	jQuery('body').on('click','.remove-shipment-address',function(e) {
		e.preventDefault();
		var address_id =  jQuery(this).attr('const-val-id');	;
		console.log('remove address');
		
		jQuery.ajax({
			url:ajax_url,
			type:'POST',
			data: {
				action : 'oc_remove_shipping_address',
				address_id : address_id
			},
			success : function(response) {

				if( response == 1 ) {
					jQuery("#saved-shipping-address-"+address_id).remove();
				} else {
					location.reload();
				}
			}
		});
		
	});




});