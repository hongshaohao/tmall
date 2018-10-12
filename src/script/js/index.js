!function($){
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    // $.ajax({
    //     type:'get',
    //     url:'http://10.31.162.33/tmall/php/getdata.php',
    //     dataType:'json',//数据类型
    //     success:function(d){
            
    //     },
        
    // });
    $.ajax({
        url:'http://10.31.162.33/tmall/php/getdata1.php',
        dataType:'json',
    }).done(function(data){
        
        console.log(data);
        
        var $strhtml='';
			$.each(data,function(index,value){//index:索引      value:索引对应的值.
				$strhtml+=`<li><a href="http://10.31.162.33/tmall/src/details.html?sid=${value.sid}"><img src="${value.src.split(',')[2]}"
                alt="">
            <div class="meilidiv1">${value.title}</div>
            <div class="meilidiv2">￥${value.price}</div>
        </a></li>`;
			});
			$('.meilimainul').html($strhtml)
        
     });



     $.ajax({
        url:'http://10.31.162.33/tmall/php/getdata2.php',
        dataType:'json',
    }).done(function(data){
        
        console.log(data);
        
        var $strhtml='';
			$.each(data,function(index,value){
				$strhtml+=`<li><a href="#"><img src="${value.src}"
                alt="">
            <div class="tmgjdiv1">>${value.title}</div>
            <div class="tmgjdiv2">￥${value.price}</div>
        </a></li>`;
			});
			$('.tmgjcont').html($strhtml)
        
     });


     $.ajax({
        url:'http://10.31.162.33/tmall/php/getdata3.php',
        dataType:'json',
    }).done(function(data){
        
        console.log(data);
        
        var $strhtml='';
			$.each(data,function(index,value){
				$strhtml+=`<li class="li2 li">
                <a href="#">
                    <div class="lidiv1">
                        <img src="${value.src}"
                            alt="">
                        <div class="lidiv2">${value.title}</div>
                        <div class="lidiv3">￥${value.price}</div>


                    </div>
                </a>
            </li>`;
			});
			$('.fq_main .mainul').append($strhtml)
        
     });





     $.ajax({
        url:'http://10.31.162.33/tmall/php/getdata4.php',
        dataType:'json',
    }).done(function(data){
        
        console.log(data);
        
        var $strhtml='';
			$.each(data,function(index,value){
				$strhtml+=`<li><a href="#"><img src="${value.src}"
                alt="">
            <div class="cddiv1">${value.title}</div>
            <div class="cddiv2">￥${value.price}</div>
        </a></li>`;
			});
			$('.cdkwmainul').html($strhtml)
        
     });




     $.ajax({
        url:'http://10.31.162.33/tmall/php/getdata5.php',
        dataType:'json',
    }).done(function(data){
        
        console.log(data);
        
        var $strhtml='';
			$.each(data,function(index,value){
				$strhtml+=`<li><a href="http://10.31.162.33/tmall/src/details.html"><img src="${value.src}"
                alt="">
            <div class="cddiv1">${value.title}</div>
            <div class="cddiv2">￥${value.price}</div>
        </a></li>`;
			});
			$('.jujiamainul').html($strhtml)
        
     });



     $.ajax({
        url:'http://10.31.162.33/tmall/php/getdata6.php',
        dataType:'json',
    }).done(function(data){
        
        console.log(data);
        
        var $strhtml='';
			$.each(data,function(index,value){
				$strhtml+=`<li><a href="#"><img src="${value.src}"
                alt="">
            <div class="cddiv1">${value.title}</div>
            <div class="cddiv2">￥${value.price}</div>
        </a></li>`;
			});
			$('.aichaomainul').html($strhtml)
        
     });




     $.ajax({
        url:'http://10.31.162.33/tmall/php/getdata7.php',
        dataType:'json',
    }).done(function(data){
        
        console.log(data);
        
        var $strhtml='';
			$.each(data,function(index,value){
				$strhtml+=`<li><a href="#"><img src="${value.src}"
                alt="">
            <div class="cddiv1">${value.title}</div>
            <div class="cddiv2">￥${value.price}</div>
        </a></li>`;
			});
			$('.chuxingmainul').html($strhtml)
        
     });




     $.ajax({
        url:'http://10.31.162.33/tmall/php/getdata8.php',
        dataType:'json',
    }).done(function(data){
        
        console.log(data);
        
        var $strhtml='';
			$.each(data,function(index,value){
				$strhtml+=`<li><a href="#"><img src="${value.src}"
                alt=""><span class="span1">${value.title}</span><span
                class="span2">￥${value.price}</span></a></li>`;
			});
			$('.xihuanmainul').html($strhtml)
        
     });
}(jQuery);



