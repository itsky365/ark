/**
 * Created by xiaomipig at 2010-09-16
 */
(function($) {
    $.fn.mailAutoComplete = function(options) {
        var defaults = {
            'mailArray' : ['@qq.com', '@163.com', '@126.com', '@111.com', '@122.com', '@sina.com.cn', '@sohu.com', '@gmail.com']
        };
		
		var settings = $.extend({}, defaults, options);
		/*$.each(settings, function(k, v) {
			alert(v);
		});*/
		
		//复制数组
		Array.prototype.clone = function(){ return this.slice(0); } 		
		
		var currIndex = 0,	//方向键初始值
			autoHide = false,	//判断是否可以隐藏
			ulArray = settings.mailArray;	//默认邮箱列表的长度

		//创建邮件列表
		var createMailList = function (txtValue, mailArray) {
			var mailListHtml = '<ul class="mailList"><li class="gray">请选择邮箱类型</li>';
			if (/@/.test(txtValue)) {
				var txtArray = txtValue.split('@');		//折分文本框中的文本
				var replaceStr = '@' + txtArray[1];		//正则表达式的字符串
				var mailArrayClone = mailArray.clone();		//复制传递的邮箱数组
				var mailReg = new RegExp(replaceStr, 'i');		//新建正则
				//alert(mailReg);
				ulArray = [];	//初始化为空数组				
				$.each(mailArrayClone, function(k, v) {
					var ii = mailReg.test(mailArrayClone[k]);	//正则匹配
					//alert(ii);
					if (ii) {				
						mailArrayClone[k] = mailArrayClone[k].replace(replaceStr, '');		//相匹配的字符串替换成空字符
						//alert(mailArray[k]);
						mailListHtml += '<li><span class="red">'+ txtValue +'</span>' + mailArrayClone[k] + '</li>';	//编历li
						ulArray.push(mailArrayClone[k]);	//填充ulArray数组
					}		
				});
				//随着匹配值次数的增加，currIndex 相应的减小
				if (currIndex > ulArray.length) {
					currIndex = 0;	
				}		
				//alert(ulArray.toString());
				//alert(mailArrayClone.toString());
				//alert(mailArray.toString());
			} else {
				$.each(mailArray, function(k, v) {
					mailListHtml += '<li><span class="red">'+ txtValue +'</span>' + mailArray[k] + '</li>';
				});	
			}			
			mailListHtml += '</ul>';
			//alert(mailListHtml);			
			return mailListHtml;	//返回邮箱列表
		};
		//移除邮件列表
		var removeMailList = function(bool) {
			autoHide = bool || false;
			if (autoHide) {
				$('.mailList').remove();
			}				
		}; 
		//键盘方向键事件
		var keyCode = function(that, e) {
			var liLength = ulArray.length;
			//alert('currIndex - ' + currIndex);
			//alert('liLength - ' + liLength);
			if (e.keyCode === 37 || e.keyCode === 38) {
				//alert('上/左');
				if (currIndex === 1) {
					currIndex = liLength;
				} else if (currIndex > 0 && currIndex <= liLength) {
					currIndex--;
				}
				//alert(currIndex);
				$('.mailList li:eq(' + currIndex + ')').addClass('hover');						
			} else if (e.keyCode === 39 || e.keyCode === 40) {
				//alert('下/右');
				if (currIndex === liLength) {
					currIndex = 1;
				} else if (currIndex >= 0 && currIndex < liLength) {
					currIndex++;
				}
				//alert(currIndex);
				$('.mailList li:eq(' + currIndex + ')').addClass('hover');	
			} else if (e.keyCode === 13) {
				//alert('Enter');
				//alert(currIndex);	
				var currText = $('.mailList li:eq(' + currIndex + ')').text();
				that.val(currText);
				removeMailList(true);
			}
		};
		//鼠标移动和点击事件
		var hover = function(that) {
			$('.mailList li:gt(0)').mouseover(function() {
				$(this).addClass('hover')	;
			}).mouseout(function() {
				$(this).removeClass('hover');
			}).click(function() {
				var txt = $(this).text();
				$(that).val(txt);
				removeMailList(true);
			});
		};		
		
		this.each(function () {
			$(this).keyup(function(e) {
				var value = $.trim($(this).val());				
				var that = $(this);	//当前文本框对象指象到that变量
				if (value.length > 0) {
					var mailList = createMailList(value, settings.mailArray);	//创建邮箱html
					$(this).parent().attr('class', 'relative');	//让父元素相对定位
					$(this).next().remove();	//移除邮箱列表
					$(this).after(mailList);	//附加邮箱列表
					hover(that);	//鼠标移动效果
					keyCode(that, e);	//键盘事件					
				}
				if (ulArray.toString() === '') {
					$('.mailList').remove();	//移除邮箱列表
				}				
			}).blur(function() {
				//autoHide = true;
				if (autoHide) {
					$(this).next().remove();	//移除邮箱列表
					autoHide = false;	
				}					
			});
		});
    };   
})(jQuery);