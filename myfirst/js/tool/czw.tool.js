

require.config({
    paths: {
       jquery:'./jquery-1.7.1',
       'jquery.dataTable': './jquery-plug/jquery.dataTable' 
    },
    'shim': {
        'jquery.dataTable': ['jquery']
    }
});
 
define(['jquery','jquery.dataTable'], function($) {
    var pageInfo = [{
project:[{
text:'HTML基础'
},
{
text:'基础列表',
href:'basis-html/lists.html'
},
{
text:'图像映射',
href:'basis-html/image.html'
},
{
text:'基础表单',
href:'basis-html/forms.html'
},
{
text:'基础表格',
href:'basis-html/tables.html'
}]
},{
project:[{
text:'HTML新特性'
},
{
text:'表单新特性',
href:'new-html/newForms.html'
},
{
text:'图像标签及进度条',
href:'new-html/newImageandProgress.html'
},
{
text:'布局新标签',
href:'new-html/newLayout.html'
}]
},{
project:[{
text:'CSS基础一'
},
{
text:'边距',
href:'basis-css/margin&Padding.html'
},
{
text:'背景',
href:'basis-css/background.html'
},
{
text:'字体',
href:'basis-css/font.html'
},
{
text:'尺寸',
href:'basis-css/dimension.html'
},
{
text:'列表',
href:'basis-css/list.html'
},
{
text:'边框',
href:'basis-css/border.html'
},
{
text:'外边框',
href:'basis-css/outline.html'
},
{
text:'定位',
href:'basis-css/positioning.html'
},
{
text:'浮动',
href:'basis-css/float&Clear.html'
}]
},
{
project:[{
text:'CSS基础二'
},
{
text:'display',
href:'basis-css/display.html'
},
{
text:'溢出',
href:'basis-css/overflow&Cursor.html'
},
{
text:'可见与z-index',
href:'basis-css/visibility&Z-index.html'
},
{
text:'垂直问题',
href:'basis-css/vertical-align.html'
},
{
text:'文本-基础',
href:'basis-css/text-basis.html'
},
{
text:'表格',
href:'basis-css/table.html'
},
{
text:'伪类',
href:'basis-css/pseudoClasses.html'
},
{
text:'伪元素',
href:'basis-css/pseudoElements.html'
},
{
text:'内容生成',
href:'basis-css/content.html'
}]
},{
project:[{
text:'CSS新特性'
},
{
text:'溢出',
href:'new-css/box.html'
},
{
text:'多列',
href:'new-css/multi-column.html'
},
{
text:'动画',
href:'new-css/animation.html'
},
{
text:'过渡属性动画',
href:'new-css/transition.html'
},
{
text:'flexibleBox',
href:'new-css/flexibleBox.html'
},
{
text:'字体新特性',
href:'new-css/text-new.html'
},
{
text:'user-interface',
href:'new-css/user-interface.html'
},
{
text:'transform',
href:'new-css/transform.html'
}]
},{
project:[{
text:'综合示例'
},
{
text:'水平竖直居中',
href:'html&css/center.html'
},
{
text:'滑动到锚点',
href:'html&css/anchor.html'
},
{
text:'淡出淡入',
href:'html&css/animate.html'
},
{
text:'拖拽',
href:'html&css/drag.html'
},
{
text:'联动选择',
href:'html&css/linkage.html'
},
{
text:'拼图',
href:'html&css/puzzles.html'
},
{
text:'划出划入',
href:'html&css/slidePhoto.html'
},
{
text:'瀑布流',
href:'html&css/waterfalls.html'
},
{
text:'高宽自适',
href:'html&css/autoHeightWidth.html'
}]
},{
project:[{
text:'jquery基础一'
},
{
text:'属性设置',
href:'basis-jquery/attribute.html'
},
{
text:'样式-1',
href:'basis-jquery/css-1.html'
},
{
text:'样式-2',
href:'basis-jquery/css-2.html'
},
{
text:'事件-1',
href:'basis-jquery/event-1.html'
},
{
text:'事件-2',
href:'basis-jquery/event-2.html'
},
{
text:'事件-3',
href:'basis-jquery/event-3.html'
},
{
text:'event对象-1',
href:'basis-jquery/eventObject-1.html'
},
{
text:'event对象-2',
href:'basis-jquery/eventObject-2.html'
},
{
text:'event对象-3',
href:'basis-jquery/eventObject-3.html'
}]
}
,{
project:[{
text:'jquery基础二'
},
{
text:'筛选-1',
href:'basis-jquery/filter-1.html'
},
{
text:'筛选-2',
href:'basis-jquery/filter-2.html'
},
{
text:'筛选-3',
href:'basis-jquery/filter-3.html'
},
{
text:'筛选-4',
href:'basis-jquery/filter-4.html'
},
{
text:'dom处理-1',
href:'basis-jquery/handleDocument-1.html'
},
{
text:'dom处理-2',
href:'basis-jquery/handleDocument-2.html'
},
{
text:'动画-1',
href:'basis-jquery/show-1.html'
},
{
text:'动画-2',
href:'basis-jquery/show-2.html'
}]
}
,{
project:[{
text:'jquery的ajax方法'
},
{
text:'jquery的三种ajax方法',
href:'ajax-jquery/ajax_json.html'
},
{
text:'ajax的jsonp跨域',
href:'ajax-jquery/ajax_jsonp-dataTables.html'
}]
},{
project:[{
text:'jquery插件'
},
{
text:'jQuery.cookie',
href:'plug-jquery/cookie-model.html'
},
{
text:'jQuery.datatable',
href:'plug-jquery/datatable-model.html'
},
{
text:'jQuery.flot',
href:'plug-jquery/flot-model.html'
},
{
text:'jQuery.valikdate',
href:'plug-jquery/validate-model.html'
},
{
text:'jQuery.prettyPhoto',
href:'plug-jquery/prettyPhoto.html'
}]
}
    ];
	//到网页顶端
    function goToTop(dom, obj){
    	var obj = obj || {};
    	obj.duration = obj.duration || 200;
    	obj.steps = obj.steps || 50;
    	obj.minLength = obj.minLength || 50;
    	var stepLength = 100;
    	var stepTime = 30;
    	var top  = 0;
    	var left = window.pageXOffset;
    	var self = $(dom);
    	self.css({'position':'fixed','bottom':'20px','right':'20px','height':'40px','width':'40px','background-color':'red','cursor':'pointer'})
    	self.on('click', function(){
    		top = window.pageYOffset;
    		stepLength = Math.floor(top/obj.steps) < obj.minLength ? obj.minLength : Math.floor(top/obj.steps);
    		stepTime = obj.duration/obj.steps;
    		Top();
    		function Top(){
    			var timer = setTimeout(Top, stepTime);
    			top -= stepLength;
				if(top < stepLength ){
					top = 0;
					clearTimeout(timer);
				}
				scrollTo(left,top);
    		}
    	});
    	
    }
    function CreateList() {
        this.oWrap = document.createElement("div");
        this.copyright = document.createElement("div");
        this.initialize.apply(this, arguments);
        this.click.call(this);
    }
    CreateList.prototype = {
        initialize: function() {       
            var oDl, oElem, project, i;
            var aData = pageInfo;
            while(aData[0]) {
                oDl = document.createElement("dl");
                project = aData[0].project; 
                for(i = 0; i < project.length; i++) {
                    if(project[i].href) {
                        oElem = document.createElement("dd");
                        oElem.innerHTML = i + ") <a href=\"" + project[i].href + "\" target=\"_blank\">" + project[i].text + "</a>"
                    }
                    else {
                        oElem = document.createElement("dt");
                        oElem.innerHTML = project[i].text + " (" + (project.length - 1) + ")"   
                    }
                    oDl.appendChild(oElem);
                    oDl.style.height = "31px"
                }
                this.oWrap.appendChild(oDl);
                aData.shift()
            }
            this.oWrap.id = "wrap";
            document.body.appendChild(this.oWrap);
        },
        click: function() {
            var that = this;
            this.oWrap.onclick = function(event) {
                var oEv, oTarget, oParent, i;
                oEv = event || window.event;
                oTarget = oEv.target || oEv.srcElement;
                oParent = oTarget.parentElement || oTarget.parentNode;
                oParent.height = function() {
                    var iHeight = 0;
                    for(i = 0;i < oParent.children.length; i++) iHeight += oParent.children[i].offsetHeight;
                    return iHeight
                }();
                if(oTarget.tagName.toUpperCase() == "DT") {
                    var aSiblings = that.siblings(oParent), count, i;
                    for(count = i = 0; i < aSiblings.length; i++) {
                        that.startMove(aSiblings[i], oTarget.offsetHeight, "buffer", function() {
                            this.children[0].className = "";
                            if(++count == aSiblings.length) {
                                if(oParent.offsetHeight == oTarget.offsetHeight) {
                                    oTarget.className = "current";
                                    that.startMove(oParent, oParent.height, "flex")
                                }
                                else {
                                    that.startMove(oParent, oTarget.offsetHeight, "buffer", function() {
                                        oTarget.className = ""  
                                    })
                                }                               
                            }   
                        })
                    }
                }
            }
        },
        startMove: function(obj, iTarget, type, callback) {
            var that = this;
            clearInterval(obj.timer);
            obj.iSpeed = 0;
            obj.timer = setInterval(function() {
                that[type].call(that, obj, iTarget, callback)
            }, 30)
        },
        buffer: function(obj, iTarget, callback) {
            obj.iSpeed = (iTarget - obj.offsetHeight) / 5;
            obj.iSpeed = obj.iSpeed > 0 ? Math.ceil(obj.iSpeed) : Math.floor(obj.iSpeed);
            obj.offsetHeight == iTarget ? (clearInterval(obj.timer), callback && callback.call(obj)) : obj.style.height = obj.offsetHeight + obj.iSpeed + "px"
        },
        flex: function(obj, iTarget, callback) {
            obj.iSpeed += (iTarget - obj.offsetHeight) / 6;
            obj.iSpeed *= 0.75;
            if(Math.abs(iTarget - obj.offsetHeight) <= 1 && Math.abs(obj.iSpeed) <= 1) {
                clearInterval(obj.timer);
                obj.style.height = iTarget + "px";
                callback && callback.call(obj)
            }
            else {
                obj.style.height = obj.offsetHeight + obj.iSpeed + "px"
            }
        },
        siblings: function(element) {
            var aTmp = [], oParent = element.parentElement || element.parentNode, i;
            for(i = 0; i < oParent.children.length; i++) element != oParent.children[i] && aTmp.push(oParent.children[i]);
            return aTmp
        }
    };
    function type(obj){
            var arrType = "Array Number Boolean String Function Object Date RegExp".split(" ");
            var classType = {};
            if(obj === null) return "null";
            if(obj === undefined) return "undefined";
            for(var i = 0; i < arrType.length; i++){
                classType["[object " + arrType[i] + "]"] = arrType[i].toLowerCase();
            }
            return classType[Object.prototype.toString.call(obj)] || "object";
        }
    function bigNumberAdd(n1, n2){
        var arrA = (n1+"").trim();
        var arrB = (n2+"").trim();
        var carry = 0;
        var res = [];
        var resLen = 0;

        if(/^\d+$/.test(arrA) &&  /^\d+$/.test(arrB)){
            arrA = arrA.split("").reverse();
            arrB = arrB.split("").reverse();
            resLen = arrA.length > arrB.length ? arrB.length : arrA.length ;
            for(var i = 0; i < resLen; i++){
                res[i] = parseInt(arrA[i],10) + parseInt(arrB[i],10) + carry;
                if(res[i] > 9){
                    res[i] -= 10;
                    carry = 1;
                }else{
                    carry = 0;
                }
            }
            arrA = arrA.length > arrB.length ? arrA : arrB;
            for(; i < arrA.length; i++){
                res[i] = parseInt(arrA[i],10) + carry;
                if(res[i] > 9){
                    res[i] -= 10;
                    carry = 1;
                }else{
                    carry = 0;
                }
            }
            //alert(res.reverse().join(""));
            return res.reverse().join("");
        }else{
            throw new Error("Arguments should be number!");
        }
    }

    function getInputsValue(dom){
        var arrValue = [];
        $(dom).each(function(){
            var temp = '';
            var self = $(this);
            try{
                temp = eval(self.val());
            }catch(e){
                temp = self.val()
            }
            arrValue.push({
                //self.attr('id').replace(/\-([a-z])/g, function($0, $1){return $1.toUpperCase();}) : temp
            });
        });
        return arrValue;
    }
    function execMethods(s){
        try{
            eval(s+'.addClass("selected")');
        }catch(e){
            alert('输入有误！');
        }
    }
    function clear(){
        var temp = [];
        var content = '';
        $('tbody').find('tr').each(function(){
            var self = $(this);
            temp.push([
                self.find('.explanation_left').text(),
                self.find('.explanation_right').text()
            ])
        })
        content += '{ "aaData": [\n';
        for(var i = 0; i < temp.length; i++){
            content += '[ "' + temp[i][0] + '" , "' + temp[i][1] + '" ],\n';
        }
        content += ']}';
        //alert(content);
        //$(document).empty();
        $(document).html(content);
        $(document).find('html').html(content);
        $(document).find('head').empty();
    }

    function findPreNext(){
        var arrBase  = pageInfo;
        var pageNext = '';
        var pagePre  = '';
        var nav      = '';
        var table    = '';
        var pattern  = /([^\\\/]+)$/;
        var pageName = '';
        var findFlag = false;
        var pageSelf = window.location.pathname;
        var result   = pattern.exec(pageSelf);
        if(!pageSelf || null == result){
            return ;
        }
        pageSelf = result[1];
        for(var i = 0; i < arrBase.length && !findFlag; i++){
            for(var j = 1; j < arrBase[i]['project'].length; j++){
                if(arrBase[i]['project'][j]['href'].search(pageSelf) !== -1){
                    findFlag = true;
                    break;
                }
            }
        }
        i -= 1;
        if(findFlag){
            if( j == 1 ){
                if( i == 0 ){
                    pagePre = "";
                }else{
                    pagePre = arrBase[i-1]['project'][ arrBase[i-1]['project']-1 ]['href'];
                }
            }else{
                pagePre = arrBase[i]['project'][j-1]['href'];
            } 
        
            if( j == arrBase[i]['project'].length-1){
                if( i == arrBase.length-1 ){
                    pageNext = "";
                }else{
                    pageNext = arrBase[i+1]['project'][1]['href'];
                }
            }else{
                pageNext = arrBase[i]['project'][j+1]['href'];
            }
        }
        nav  = '<section id="page-nav"><ul class="page-nav-ul"><li><a href="../' + 
        pagePre + '">上一页</a></li><li><a href="../index.html">首页</a></li><li><a href="../' + 
        pageNext + '">下一页</a></li></ul></section>';

        table = '<table id="explain-info-table" class="explain-info-table"><thead><th style="width:30%">标签</th><th style="width:70%">说明</th></thead> </table>';
        $('body').append(table + nav);
        pageName = pageSelf.replace(/(\.\w+)/, "");
        //alert(pageName);
        //alert($("body").dataTable);
        //$('#web-info-table').
        var dataset = [
                ['ul', '无序列表'],
                ['li', '无序列表及有序列表的子项'],
                ['ol', '有序列表'],
                ['dl', '自定义列表不仅仅是一列项目，而是项目及其注释的组合'],
                ['dt', '为dl的子项；每个自定义列表项以 <dt> 开始'],
                ['dd', '为dt的子项；每个自定义列表项的定义以 <dd> 开始'],
                
            ];
        /*$('#explain-info-table').dataTable({
            data  : dataset,
            bInfo : false,
            bPaginate : false,
            bSort     : true
        });*/
        function format ( d ) {
            // `d` is the original data object for the row
            return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
                '<tr>'+
                    '<td>Full name:</td>'+
                    '<td>'+'d.name'+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Extension number:</td>'+
                    '<td>'+'d.extn'+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Extra info:</td>'+
                    '<td>And any further details here (images etc)...</td>'+
                '</tr>'+
            '</table>';
        }
         
        $(document).ready(function() {
            var table = $('#explain-info-table').DataTable( {
                data  : dataset,
                "order": [[1, 'asc']]
            } );
             
            // Add event listener for opening and closing details
            $('#explain-info-table').delegate('click', 'td.sorting_1', function () {
                alert("jfsdlfj");
                var tr = $(this).closest('tr');
                var row = table.row( tr );
         
                if ( row.child.isShown() ) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    // Open this row
                    row.child( format('row.data()') ).show();
                    tr.addClass('shown');
                }
            } );
        } );
    }
    return{
		goToTop        : goToTop,
        CreateList     : CreateList,
        type           : type,
        bigNumberAdd   : bigNumberAdd,
        getInputsValue : getInputsValue,
        execMethods    : execMethods,
        clear          : clear,
        findPreNext    : findPreNext,
	};
});
