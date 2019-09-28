$(document).ready(function(){
		var k = $(window).height();//当前屏幕的高度
		var flag = false;//控制动画
		$(".next").click(function(){
			$.fn.fullpage.moveSectionDown();
		});
        $('.fullpage').fullpage({
			//fullpage 方法里面接收json对象
			//是否显示项目导航
			navigation:true,
			// navigationPosition:"left",
			// loopBottom:true,
			// keyboardScrolling:false,
			scrollingSpeed:1200,

			//回调函数
			// 滚动到某一屏后的回调函数
			// 接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
			afterLoad:function( anchorLink,index){
				if(index===2){
					$(".next").fadeOut();
					$(".search").show().animate({"right":370},1500,function(){
						// 方块走进来，沙发2个字显示
						$(".search-word").animate({"opacity":1},500,function(){
							$(".search").hide();
							//图片往右上走 并且缩小
							$(".search-02-1").show().animate({"height":30,"right":250,"bottom":452},
							1000
							// ,function(){
							// 	flag = true;//如果flag为true表示所有动画执行完毕
							// }
							);
							//同时，沙发变大
							$(".goods-02").show().animate({"height":218},1000);
							//同时白色文字渐渐显示
							$(".word-02").animate({"opacity":1},500,function(){
								$(".next").fadeIn();
							});
						});
					});
				}
			},
			//刚开始滚动屏幕就触发的回调函数 onLeave
			// 滚动前的回调函数，接收 index、nextIndex 和 direction 
			// 3个参数：index 是离开的“页面”的序号，从1开始计算；
			// nextIndex 是滚动到的“页面”的序号，从1开始计算；
			// direction 判断往上滚动还是往下滚动，值是 up 或 down。
			onLeave:function(index,nextIndex,direction){
				$(".next").fadeOut();
				if(index==2 && nextIndex==3){
					// 当第二屏幕往第三屏幕滚动的时候， 沙发显示并且往第三屏幕跑  白色盒子显示
					// 沙发要往第三屏幕走，  走的距离 就是  
					// 当前哦屏幕的高度 - main 到底部的高度 - 沙发到main的距离    (当前屏幕的高度  - 250 )
					$(".sofa-change").show().animate({"bottom":-(k-250),"width":207,"left":260},2000,
					function(){
						$(".img-01-a").animate({"opacity":1},500,function(){
							$(".btn-01-a").animate({"opacity":1},500,function(){
								$(".next").fadeIn();
							});
						})
					});
					$(".cover").show();
				}
				if(index==3 && nextIndex==4){
					$(".sofa-change").hide(); 	
					 // 沙发的距离   当前屏幕的高度  - 250    + 第三屏幕的 50距离
					$(".t1f").show().animate({"bottom":-((k-250)+50),"left":260},2000,function(){
						$(this).hide();
						$(".car-img").show();
						$(".car").animate({"left":"150%"},4000,"easeInElastic",function(){
							$(".note").show();
							$(".note-img,.words-04-a").animate({"opacity":1},1000,function(){
								$(".next").fadeIn(); 
							});
						});
					});
				}
				if(index==4 && nextIndex==5){
					// 手上来
					$(".hand-05").animate({"bottom":0},1500,function(){
						//鼠标显示
						$(".mouse-05-a").animate({"opacity": 1});
						//沙发从800-70
						$(".t1f-05").show().animate({"bottom":70},1000,function(){
						// 卡片出来
						$(".order-05").animate({"bottom":390},500,function(){
							$(".words-05").addClass("words-05-a");
							$(".next").fadeIn();
						})
						});
					})
				}
				if(index==5 && nextIndex==6){
					$(".t1f-05").animate({"bottom":-(k-500),"left":"40%","width":65},1500,function(){
						$(".t1f-05").hide();
					});
					$(".box-06").animate({"left":"38%"},1500,function(){
						$(this).animate({"bottom":40},500,function(){
							$(this).hide();
							//背景移动
					//背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标 
							$(".section6").animate({"backgroundPositionX":"100%"},4000,function(){
								//当背景动画执行完毕，boy大小复原
								$(".boy").animate({"height":305,"bottom":116},1000,function(){
									$(this).animate({"right":500},500,function(){
										//开门
										$(".door").animate({"opacity":1},200,function(){
											$(".girl").show().animate({"right":350,"height":306},500,function(){
												$(".pop-07").show();
												$(".next").fadeIn();
											});
										});
									});
								});
							});
							//光速
						$(".words-06-a").show().animate({"left":"30%"},2000);
						$(".pop-06").show();
						});
					});
					
				}
				if(index==6 && nextIndex==7){
					setTimeout(function(){
						$(".start").animate({"width":120},500);
						$(".good-07").show();
					},2000);
				}
				// $(".beginShoping").mouseenter(function(event){
				// 	$(".btn-08-a").show();
				// }).mouseleave(function(event){
				// 	$(".btn-08-a").hide();
				// });
				//用hover替代
				$(".beginShoping").hover(function(){//显示和隐藏的替代
					$(".btn-08-a").toggle();
				});
				//手跟着鼠标移动
				$(document).mousemove(function(event){
					var x=event.pageX-$(".hand-08").width()/2;
					var y=event.pageY+10;
					//手的top值不能小于 当前屏幕的高度 K  减去手的高度  449 
					var minY=k-449;
					if(y<minY){
						y=minY;
					}
					$(".hand-08").css({"left":x,"top":y});
				});
				//再来一次
				//1.返回第一屏
				$(".again").click(function(event){
					$.fn.fullpage.moveTo(1);
					//2.所有动画复原
					$("img, .move").attr("style", "");
					});
				
			},
		});        
});