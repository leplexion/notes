/*
    1. 需求为爬取一个网站的表格数据, 在定位到请求之后, 发现ajax请求 ( 由 $.getScript() 发起 ) 返回一段吓人的数据, 是一段 javascript 代码

    2. 代码中 eval() 执行一段 匿名函数 function(p,a,c,k,e,d) 解密之后的 javascript 代码, 最终是一段 html 文本 复制给变量d, d被插入到html中

    3. 得到 d 后的 js 字符串赋值文本, 即目标, 目标是得到赋值后的字符串内容到 python 中解析

    简化过程见 2-js的解密代码简化.js
    翻译成品见 3-翻译成python代码.py

*/


// ------------------ 原始代码:
eval(function(p,a,c,k,e,d){e=function(c){return((c< a?"":e(parseInt(c/a)))+((c=c%a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('33 d=\'\\n\\n\\n<1h H="2F%" e="2G 3c 2S">\\n \\n \\n \\n <1j j="1U:1k;H:37%">3j-3n 3v&1f;我要免费展示在下面收货 加入右侧库存表\\n \\n <1j j="1U:1k;H:15%;F-17:2z">查库存找货 \\n \\n \\n \\n \\n 收货买方\\n 元/G\\n 收货量(最少-最大)\\n 押金\\n 结算\\n 下单\\n 交易类型\\n 过滤\\n \\n \\n \\n时代先锋①\\n 0.19\\n Z-3sG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n时代先锋①\\n 0.19\\n Z-ZG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n时代先锋①\\n 0.19\\n Z-2AG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.3y\\n Z-3xG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n萌新秒结\\n 0.3u\\n Z-1wG\\n >T\\n \\n 1小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n三国网络\\n 0.1p\\n 1b-1eG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n鸟哥金库\\n 0.3B\\n 1c-3eG\\n >T\\n \\n 24小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n琉璃网络\\n 0.36\\n 2W-1wG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n金易网娱\\n 0.1J\\n 1b-3iG\\n >T\\n \\n 1小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n云海收货\\n 0.3d\\n 1b-3gG\\n >T\\n \\n 3小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n游侠收货\\n 0.3S\\n 1b-3CG\\n >T\\n \\n 44小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n久久商行\\n 0.3X\\n 1c-3YG\\n >T\\n \\n 5小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n表哥秒结\\n 0.47\\n 1c-4dG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n博金商务\\n 0.2t\\n 1c-1eG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n4c收金\\n 0.2t\\n Z-4aG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n微笑收货\\n 0.3D\\n 1b-3LG\\n >T\\n \\n 1小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n至强商务\\n 0.3Q\\n Z-3NG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n帽子①\\n 0.3G\\n 1c-1eG\\n >T\\n \\n 24小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n华夏网络\\n 0.3Z\\n Z-3JG\\n >T\\n \\n 24小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n网联\\n 0.3P\\n 1b-3OG\\n >T\\n \\n 12小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.3R\\n Z-ZG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.3F\\n Z-ZG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.3H\\n Z-1bG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n炮兵网络\\n 0.3K\\n Z-1eG\\n >T\\n \\n 24小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.41\\n Z-42G\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n繁华沧桑\\n 0.2y\\n 1b-1wG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n当当网\\n 0.2y\\n 1c-49G\\n >T\\n \\n 24小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n磊磊秒結\\n 0.1x\\n 2W-1eG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-当面\\n 过滤\\n \\n \\n 报警价量\\n 将本区加入右侧库存表后设置报警价量,当买方价量高于您报警价量时声音报警\\n \\n \\n \\n\\n\\n<1h H="2F%" e="2G 3V 2S" j="3E-2C:3U;" 3T-3M="G">\\n \\n 我要免费展示在下面销售|买方点此在全部有效库存中自动匹配成交\\n46:显示价格的置顶优先\\n\\n \\n 卖方(价低已登录排前)\\n 库存量(G)\\n 最少量\\n 取消率\\n 承诺速度\\n 按单价(元/G)购买\\n \\n \\n 为你锁心(已登录)\\n40\\n Z\\n 4/<11>13\\n 30分钟\\n \\n 0.2D元&1f;&1f;购买\\n \\n \\n \\n 天天发(已登录)\\n3h\\n 1c\\n 1/<11>0\\n 30分钟\\n \\n 0.2O元&1f;&1f;购买\\n \\n \\n \\n 白云出货(已登录)\\n38\\n 2A\\n 9/<11>28\\n 30分钟\\n \\n 小于最少量\\n \\n \\n 9号当铺(未登录)\\n3w\\n Z\\n 4/<11>5\\n 45分钟\\n \\n 小于最少量\\n \\n \\n 行素(已登录)\\n 3A\\n 0\\n 库存不准仅供参考\\n \\n \\n \\n 3z(未登录)\\n 3t\\n 0\\n 库存不准仅供参考\\n \\n \\n \\n\\n\\n\\n\\n\\n \\n\';',62,264,'||||||||||||td||class|span|filter|href|color|style|action|target|_blank||font|price|tr|title|33959|_hostid|valet|name|php|orderadd|_siteid|needid|site|index|blue|javascript|green|text||width|row|images|img|src|login|onclick|gif|border|underline|decoration|user|3000|quantity|noteview|noteid|danbao|u_f_add|10000||strong|||65038||gray|align|144435|006921|colspan|50000|100000|right|2147483647|nbsp|MIMI|table|006000|div|left|001000|87484|118422|168926|006301|126571|79755|101711|157669|150886|17239|500000|000012|9719|98601|hostid|wenhao|175755|109300|103631|105250|34674|153558|158269|006202|184718|148047|003080|6301663|tb_head|004700|6304679|6273413|003900|id|float|003000|6256659|5784360|5835981|006140|5464780|006130|5448497|6333990||6248807|6331894|5908282||006300|6267380|5902265|6304938|006920|006210|5663658|006100|5978927|6331428|005500|5440830|6237220|005200|005100|5440888|005710|6299689|5443699|006010|006|5905095|005900|006310|6273668|001|center|20000|coin|top|015|more|100|tb|conf|0000FF|attr|this|002900|orderaddk|userid|012|bidprice|tbkucun_head|height|limit|5671069|5444268|5437175|1000|u_c_add|void|add||png|bgcolor|var|E8E8E8||00621|85|2350G|logs|logstr|display|bijia|00614|99061999|none|2147270647|4800000G|23589800|Beatrice|C_S_STOCK|u_h_view|lasthostid|EU|cookie|selladd|onClick|doListLogs|37100|2440755G|00631|Central|244G|16666|00692|Lucy|9000G|0063|99992000|0059|margin|0039|0055|00308|stock|999856999|003|950000|unit|35000|2146979305|0051|00571|0047|00613|game|2px|kucun|needadd|0061|256565655|0052|2147483647G|0029|983000|38558|||New|00601||2147446647|2144702202|gameid|99|997950999|456|red'.split('|'),0,{})) ;$('#layer_showhost').html(d);

// ------------------ 美化之后:
eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
      }
      k = [
        function (e) {
          return d[e];
        }
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    '33 d=\'\\n\\n\\n<1h H="2F%" e="2G 3c 2S">\\n \\n \\n \\n <1j j="1U:1k;H:37%">3j-3n 3v&1f;我要免费展示在下面收货 加入右侧库存表\\n \\n <1j j="1U:1k;H:15%;F-17:2z">查库存找货 \\n \\n \\n \\n \\n 收货买方\\n 元/G\\n 收货量(最少-最大)\\n 押金\\n 结算\\n 下单\\n 交易类型\\n 过滤\\n \\n \\n \\n时代先锋①\\n 0.19\\n Z-3sG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n时代先锋①\\n 0.19\\n Z-ZG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n时代先锋①\\n 0.19\\n Z-2AG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.3y\\n Z-3xG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n萌新秒结\\n 0.3u\\n Z-1wG\\n >T\\n \\n 1小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n三国网络\\n 0.1p\\n 1b-1eG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n鸟哥金库\\n 0.3B\\n 1c-3eG\\n >T\\n \\n 24小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n琉璃网络\\n 0.36\\n 2W-1wG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n金易网娱\\n 0.1J\\n 1b-3iG\\n >T\\n \\n 1小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n云海收货\\n 0.3d\\n 1b-3gG\\n >T\\n \\n 3小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n游侠收货\\n 0.3S\\n 1b-3CG\\n >T\\n \\n 44小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n久久商行\\n 0.3X\\n 1c-3YG\\n >T\\n \\n 5小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n表哥秒结\\n 0.47\\n 1c-4dG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n博金商务\\n 0.2t\\n 1c-1eG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n4c收金\\n 0.2t\\n Z-4aG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n微笑收货\\n 0.3D\\n 1b-3LG\\n >T\\n \\n 1小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n至强商务\\n 0.3Q\\n Z-3NG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n帽子①\\n 0.3G\\n 1c-1eG\\n >T\\n \\n 24小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n华夏网络\\n 0.3Z\\n Z-3JG\\n >T\\n \\n 24小时\\n 卖给他\\n 即时-拍卖\\n 过滤\\n \\n \\n \\n网联\\n 0.3P\\n 1b-3OG\\n >T\\n \\n 12小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.3R\\n Z-ZG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.3F\\n Z-ZG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.3H\\n Z-1bG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n炮兵网络\\n 0.3K\\n Z-1eG\\n >T\\n \\n 24小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n1g\\n 0.41\\n Z-42G\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n繁华沧桑\\n 0.2y\\n 1b-1wG\\n >T\\n \\n 48小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n当当网\\n 0.2y\\n 1c-49G\\n >T\\n \\n 24小时\\n 卖给他\\n 录像-邮寄\\n 过滤\\n \\n \\n \\n磊磊秒結\\n 0.1x\\n 2W-1eG\\n >T\\n \\n 48小时\\n 卖给他\\n 即时-当面\\n 过滤\\n \\n \\n 报警价量\\n 将本区加入右侧库存表后设置报警价量,当买方价量高于您报警价量时声音报警\\n \\n \\n \\n\\n\\n<1h H="2F%" e="2G 3V 2S" j="3E-2C:3U;" 3T-3M="G">\\n \\n 我要免费展示在下面销售|买方点此在全部有效库存中自动匹配成交\\n46:显示价格的置顶优先\\n\\n \\n 卖方(价低已登录排前)\\n 库存量(G)\\n 最少量\\n 取消率\\n 承诺速度\\n 按单价(元/G)购买\\n \\n \\n 为你锁心(已登录)\\n40\\n Z\\n 4/<11>13\\n 30分钟\\n \\n 0.2D元&1f;&1f;购买\\n \\n \\n \\n 天天发(已登录)\\n3h\\n 1c\\n 1/<11>0\\n 30分钟\\n \\n 0.2O元&1f;&1f;购买\\n \\n \\n \\n 白云出货(已登录)\\n38\\n 2A\\n 9/<11>28\\n 30分钟\\n \\n 小于最少量\\n \\n \\n 9号当铺(未登录)\\n3w\\n Z\\n 4/<11>5\\n 45分钟\\n \\n 小于最少量\\n \\n \\n 行素(已登录)\\n 3A\\n 0\\n 库存不准仅供参考\\n \\n \\n \\n 3z(未登录)\\n 3t\\n 0\\n 库存不准仅供参考\\n \\n \\n \\n\\n\\n\\n\\n\\n \\n\';',
    62,
    264,
    "||||||||||||td||class|span|filter|href|color|style|action|target|_blank||font|price|tr|title|33959|_hostid|valet|name|php|orderadd|_siteid|needid|site|index|blue|javascript|green|text||width|row|images|img|src|login|onclick|gif|border|underline|decoration|user|3000|quantity|noteview|noteid|danbao|u_f_add|10000||strong|||65038||gray|align|144435|006921|colspan|50000|100000|right|2147483647|nbsp|MIMI|table|006000|div|left|001000|87484|118422|168926|006301|126571|79755|101711|157669|150886|17239|500000|000012|9719|98601|hostid|wenhao|175755|109300|103631|105250|34674|153558|158269|006202|184718|148047|003080|6301663|tb_head|004700|6304679|6273413|003900|id|float|003000|6256659|5784360|5835981|006140|5464780|006130|5448497|6333990||6248807|6331894|5908282||006300|6267380|5902265|6304938|006920|006210|5663658|006100|5978927|6331428|005500|5440830|6237220|005200|005100|5440888|005710|6299689|5443699|006010|006|5905095|005900|006310|6273668|001|center|20000|coin|top|015|more|100|tb|conf|0000FF|attr|this|002900|orderaddk|userid|012|bidprice|tbkucun_head|height|limit|5671069|5444268|5437175|1000|u_c_add|void|add||png|bgcolor|var|E8E8E8||00621|85|2350G|logs|logstr|display|bijia|00614|99061999|none|2147270647|4800000G|23589800|Beatrice|C_S_STOCK|u_h_view|lasthostid|EU|cookie|selladd|onClick|doListLogs|37100|2440755G|00631|Central|244G|16666|00692|Lucy|9000G|0063|99992000|0059|margin|0039|0055|00308|stock|999856999|003|950000|unit|35000|2146979305|0051|00571|0047|00613|game|2px|kucun|needadd|0061|256565655|0052|2147483647G|0029|983000|38558|||New|00601||2147446647|2144702202|gameid|99|997950999|456|red".split(
      "|"
    ),
    0,
    {}
  )
);
