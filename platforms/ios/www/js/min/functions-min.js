function paparesults(a){for(vertical_count=0,i=0,$.each(a.data,function(a,e){e.vertical==window.hashvalue&&(vertical_count++,i++)}),totalItems=i,numslides=Math.ceil(i/9),i=0;numslides>i;)$(".swiper-wrapper").append('<div class="swiper-slide" id="slider"> <div class="product-thumbnails"></div> </div>'),i++;i=0,$(".swiper-slide").each(function(){i=0,idofslide=$(this).attr("id"),console.log(idofslide),$.each(a.data,function(e,l){return null==l?!0:l.vertical!=window.hashvalue?!0:i>=9?!1:(i++,$("#"+idofslide).find(".product-thumbnails").append('<a href="product.html#'+l.name+'"><img src="product-images/'+l.imagefilename+'" alt="" /></a>'),void(a.data[e]=null))})}),window.mySwiper=$(".vertical-slider").swiper({mode:"horizontal",loop:!1,pagination:".my-pagination"})}