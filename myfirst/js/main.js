require.config({
    paths: {
       jquery:'./jquery-1.7.1',
       'czw.tool' : 'tool/czw.tool'

    }
});
 
require(['jquery','czw.tool'], function($, t) {
    new t.CreateList();
    (function() {
        var oDiv = document.createElement("div");
        oDiv.style.width = "384px";
        oDiv.style.textAlign = "right";
        oDiv.style.margin = "5px auto 10px";
        oDiv.innerHTML = "<iframe width=\"117\" height=\"24\" frameborder=\"0\" allowtransparency=\"true\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" border=\"0\" src=\"http://widget.weibo.com/relationship/followbutton.php?language=zh_cn&width=136&height=24&uid=2640799620&style=2&btn=red&dpc=1\"></iframe>";
        document.body.appendChild(oDiv)
    })();
});
