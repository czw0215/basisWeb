<?php
  //$arr = $_POST; //若以$.get()方式发送数据，则要改成$_GET.或者干脆:$_REQUEST
  //$arr = $_REQUEST;
  //$arr['append'] = '测试字符串-KKKMMM-BB';//'测试字符串';
  //print_r($arr);

  $arr = $_REQUEST;
  //$myjson = '{ "result": "success", "totalCount": 184, "newsList": [ { "newsID": 363, "newsGUID": "", "title": "各种萝卜的养生功效", "shortDesc": "市面上的萝卜种类多样，它们对健康的作用并不相同，白萝卜补气促消化，而红心萝卜补铁抗衰老，青萝卜清热止渴。大家常吃的胡萝卜却并不是真正意义上的萝卜。", "imageUrl": "", "date": "2014-01-18 12:00:06", "hits": 84, "supports": 0, "staticUrl": "/html/mobile/2014/1/363.html", "source": "生命时报" }, { "newsID": 362, "newsGUID": "", "title": "冬季五款驱寒养生茶", "shortDesc": "冬季五款驱寒养生茶", "imageUrl": "", "date": "2014-01-18 11:59:20", "hits": 60, "supports": 0, "staticUrl": "/html/mobile/2014/1/362.html", "source": "大众网-齐鲁晚报" }, { "newsID": 358, "newsGUID": "", "title": "养生治病的8种流行美食", "shortDesc": "如何养生是一个亘古不变的话题，养生和健康息息相关，养生的目的就是为了健康生活能够长存。", "imageUrl": "", "date": "2014-01-17 10:11:50", "hits": 60, "supports": 0, "staticUrl": "/html/mobile/2014/1/358.html", "source": "新浪网" }, { "newsID": 356, "newsGUID": "", "title": "健康喝水要养成7个习惯", "shortDesc": "水是生命之源，水对人体健康的重要性不言而喻，如果每天都要喝的水不够健康卫生，那会是什么情况？健康饮水，注意7点。", "imageUrl": "", "date": "2014-01-17 09:46:35", "hits": 97, "supports": 0, "staticUrl": "/html/mobile/2014/1/356.html", "source": "北青网" }, { "newsID": 352, "newsGUID": "", "title": "年夜饭食谱4个搭配技巧 荤素1：2搭配", "shortDesc": "年夜饭是家人团聚的时刻，不仅要吃得开心，还要吃得健康营养。很多人会选择在外面餐厅吃年夜饭，小编认为，年夜饭要在家吃才有团圆温馨的感觉，而且还健康安全。", "imageUrl": "", "date": "2014-01-16 15:51:02", "hits": 45, "supports": 0, "staticUrl": "/html/mobile/2014/1/352.html", "source": "" }, { "newsID": 351, "newsGUID": "", "title": "冬季吃雪梨功效很神奇", "shortDesc": "雪梨是很多美女冬季的滋补首选，除了滋补，雪梨其实还有很多养生功效，那具体有些什么样的养生功效呢？", "imageUrl": "", "date": "2014-01-16 15:43:02", "hits": 47, "supports": 0, "staticUrl": "/html/mobile/2014/1/351.html", "source": "家庭医生在线" }, { "newsID": 350, "newsGUID": "", "title": "适合冬季养生的五款美食", "shortDesc": "当归生姜羊肉汤源自西汉名医张仲景的著名药膳方剂，具有很好的温阳补气、祛寒保暖作用，适宜于寒冷的冬季服食，可治疗气血虚弱、营养不良、贫血及手足冰冷等症。", "imageUrl": "", "date": "2014-01-16 15:41:45", "hits": 42, "supports": 0, "staticUrl": "/html/mobile/2014/1/350.html", "source": "新浪健康博客" }, { "newsID": 346, "newsGUID": "", "title": "八种人千万别吃醋以防伤胃", "shortDesc": "食醋保健成为一种时尚，悄然在家庭中流行，但醋未必对每个人都有保健作用，醋的副作用不能忽视。", "imageUrl": "", "date": "2014-01-16 09:56:34", "hits": 75, "supports": 0, "staticUrl": "/html/mobile/2014/1/346.html", "source": "人民网" } ], "newsCatList": [ { "catID": 1, "catName": "旅居资讯", "totalCount": 184, "newsList": [ { "newsID": 363, "newsGUID": "", "title": "各种萝卜的养生功效", "shortDesc": "市面上的萝卜种类多样，它们对健康的作用并不相同，白萝卜补气促消化，而红心萝卜补铁抗衰老，青萝卜清热止渴。大家常吃的胡萝卜却并不是真正意义上的萝卜。", "imageUrl": "", "date": "2014-01-18 12:00:06", "hits": 84, "supports": 0, "staticUrl": "/html/mobile/2014/1/363.html", "source": "生命时报" }, { "newsID": 362, "newsGUID": "", "title": "冬季五款驱寒养生茶", "shortDesc": "冬季五款驱寒养生茶", "imageUrl": "", "date": "2014-01-18 11:59:20", "hits": 60, "supports": 0, "staticUrl": "/html/mobile/2014/1/362.html", "source": "大众网-齐鲁晚报" }, { "newsID": 358, "newsGUID": "", "title": "养生治病的8种流行美食", "shortDesc": "如何养生是一个亘古不变的话题，养生和健康息息相关，养生的目的就是为了健康生活能够长存。", "imageUrl": "", "date": "2014-01-17 10:11:50", "hits": 60, "supports": 0, "staticUrl": "/html/mobile/2014/1/358.html", "source": "新浪网" }, { "newsID": 356, "newsGUID": "", "title": "健康喝水要养成7个习惯", "shortDesc": "水是生命之源，水对人体健康的重要性不言而喻，如果每天都要喝的水不够健康卫生，那会是什么情况？健康饮水，注意7点。", "imageUrl": "", "date": "2014-01-17 09:46:35", "hits": 97, "supports": 0, "staticUrl": "/html/mobile/2014/1/356.html", "source": "北青网" }, { "newsID": 352, "newsGUID": "", "title": "年夜饭食谱4个搭配技巧 荤素1：2搭配", "shortDesc": "年夜饭是家人团聚的时刻，不仅要吃得开心，还要吃得健康营养。很多人会选择在外面餐厅吃年夜饭，小编认为，年夜饭要在家吃才有团圆温馨的感觉，而且还健康安全。", "imageUrl": "", "date": "2014-01-16 15:51:02", "hits": 45, "supports": 0, "staticUrl": "/html/mobile/2014/1/352.html", "source": "" }, { "newsID": 351, "newsGUID": "", "title": "冬季吃雪梨功效很神奇", "shortDesc": "雪梨是很多美女冬季的滋补首选，除了滋补，雪梨其实还有很多养生功效，那具体有些什么样的养生功效呢？", "imageUrl": "", "date": "2014-01-16 15:43:02", "hits": 47, "supports": 0, "staticUrl": "/html/mobile/2014/1/351.html", "source": "家庭医生在线" }, { "newsID": 350, "newsGUID": "", "title": "适合冬季养生的五款美食", "shortDesc": "当归生姜羊肉汤源自西汉名医张仲景的著名药膳方剂，具有很好的温阳补气、祛寒保暖作用，适宜于寒冷的冬季服食，可治疗气血虚弱、营养不良、贫血及手足冰冷等症。", "imageUrl": "", "date": "2014-01-16 15:41:45", "hits": 42, "supports": 0, "staticUrl": "/html/mobile/2014/1/350.html", "source": "新浪健康博客" }, { "newsID": 346, "newsGUID": "", "title": "八种人千万别吃醋以防伤胃", "shortDesc": "食醋保健成为一种时尚，悄然在家庭中流行，但醋未必对每个人都有保健作用，醋的副作用不能忽视。", "imageUrl": "", "date": "2014-01-16 09:56:34", "hits": 75, "supports": 0, "staticUrl": "/html/mobile/2014/1/346.html", "source": "人民网" } ] } ] }';
  $myjson = '{ "aaData": [
    ["Trident","Internet Explorer 4.0","Win 95+","4","X"],
    ["Trident","Internet Explorer 5.0","Win 95+","5","C"],
    ["Trident","Internet Explorer 5.5","Win 95+","5.5","A"],
    ["Trident","Internet Explorer 6","Win 98+","6","A"],
    ["Trident","Internet Explorer 7","Win XP SP2+","7","A"],
    ["Trident","AOL browser (AOL desktop)","Win XP","6","A"],
    ["Gecko","Firefox 1.0","Win 98+ / OSX.2+","1.7","A"],
    ["Gecko","Firefox 1.5","Win 98+ / OSX.2+","1.8","A"],
    ["Gecko","Firefox 2.0","Win 98+ / OSX.2+","1.8","A"],
    ["Gecko","Firefox 3.0","Win 2k+ / OSX.3+","1.9","A"],
    ["Gecko","Camino 1.0","OSX.2+","1.8","A"],
    ["Gecko","Camino 1.5","OSX.3+","1.8","A"],
    ["Gecko","Netscape 7.2","Win 95+ / Mac OS 8.6-9.2","1.7","A"],
    ["Gecko","Netscape Browser 8","Win 98SE+","1.7","A"],
    ["Gecko","Netscape Navigator 9","Win 98+ / OSX.2+","1.8","A"],
    ["Gecko","Mozilla 1.0","Win 95+ / OSX.1+",1,"A"],
    ["Gecko","Mozilla 1.1","Win 95+ / OSX.1+",1.1,"A"],
    ["Gecko","Mozilla 1.2","Win 95+ / OSX.1+",1.2,"A"],
    ["Gecko","Mozilla 1.3","Win 95+ / OSX.1+",1.3,"A"],
    ["Gecko","Mozilla 1.4","Win 95+ / OSX.1+",1.4,"A"],
    ["Gecko","Mozilla 1.5","Win 95+ / OSX.1+",1.5,"A"],
    ["Gecko","Mozilla 1.6","Win 95+ / OSX.1+",1.6,"A"],
    ["Gecko","Mozilla 1.7","Win 98+ / OSX.1+",1.7,"A"],
    ["Gecko","Mozilla 1.8","Win 98+ / OSX.1+",1.8,"A"],
    ["Gecko","Seamonkey 1.1","Win 98+ / OSX.2+","1.8","A"],
    ["Gecko","Epiphany 2.20","Gnome","1.8","A"],
    ["Webkit","Safari 1.2","OSX.3","125.5","A"],
    ["Webkit","Safari 1.3","OSX.3","312.8","A"],
    ["Webkit","Safari 2.0","OSX.4+","419.3","A"],
    ["Webkit","Safari 3.0","OSX.4+","522.1","A"],
    ["Webkit","OmniWeb 5.5","OSX.4+","420","A"],
    ["Webkit","iPod Touch / iPhone","iPod","420.1","A"],
    ["Webkit","S60","S60","413","A"],
    ["Presto","Opera 7.0","Win 95+ / OSX.1+","-","A"],
    ["Presto","Opera 7.5","Win 95+ / OSX.2+","-","A"],
    ["Presto","Opera 8.0","Win 95+ / OSX.2+","-","A"],
    ["Presto","Opera 8.5","Win 95+ / OSX.2+","-","A"],
    ["Presto","Opera 9.0","Win 95+ / OSX.3+","-","A"],
    ["Presto","Opera 9.2","Win 88+ / OSX.3+","-","A"],
    ["Presto","Opera 9.5","Win 88+ / OSX.3+","-","A"],
    ["Presto","Opera for Wii","Wii","-","A"],
    ["Presto","Nokia N800","N800","-","A"],
    ["Presto","Nintendo DS browser","Nintendo DS","8.5","C/A<sup>1</sup>"],
    ["KHTML","Konqureror 3.1","KDE 3.1","3.1","C"],
    ["KHTML","Konqureror 3.3","KDE 3.3","3.3","A"],
    ["KHTML","Konqureror 3.5","KDE 3.5","3.5","A"],
    ["Tasman","Internet Explorer 4.5","Mac OS 8-9","-","X"],
    ["Tasman","Internet Explorer 5.1","Mac OS 7.6-9","1","C"],
    ["Tasman","Internet Explorer 5.2","Mac OS 8-X","1","C"],
    ["Misc","NetFront 3.1","Embedded devices","-","C"],
    ["Misc","NetFront 3.4","Embedded devices","-","A"],
    ["Misc","Dillo 0.8","Embedded devices","-","X"],
    ["Misc","Links","Text only","-","X"],
    ["Misc","Lynx","Text only","-","X"],
    ["Misc","IE Mobile","Windows Mobile 6","-","C"],
    ["Misc","PSP browser","PSP","-","C"],
    ["Other browsers","All others","-","-","U"]
  ] }';
  $myjson = my_json_encode($myjson);
  echo $arr["callback"]."(".$myjson.")";

  function my_json_encode($phparr)
  {
    if(function_exists("json_encode"))
    {
      return json_encode($phparr);
    }
    else
    {
      require_once 'json/json.class.php';
      $json = new Services_JSON;
      return $json->encode($phparr);
    }
  }
?>