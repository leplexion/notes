

// ----------------------------------------
// 1. 原始的匿名函数, 为方便p参数切出开头一部分

var p = '33 d=\'\\n\\n\\n<1h H="2F%" e="2G 3c 2S">\\n \\n \\n \\n';
var a = 62;
var c = 264;
var k = "||||||||||||td||class|span|filter|href|color|style|action|target|_blank||font|price|tr|title|33959|_hostid|valet|name|php|orderadd|_siteid|needid|site|index|blue|javascript|green|text||width|row|images|img|src|login|onclick|gif|border|underline|decoration|user|3000|quantity|noteview|noteid|danbao|u_f_add|10000||strong|||65038||gray|align|144435|006921|colspan|50000|100000|right|2147483647|nbsp|MIMI|table|006000|div|left|001000|87484|118422|168926|006301|126571|79755|101711|157669|150886|17239|500000|000012|9719|98601|hostid|wenhao|175755|109300|103631|105250|34674|153558|158269|006202|184718|148047|003080|6301663|tb_head|004700|6304679|6273413|003900|id|float|003000|6256659|5784360|5835981|006140|5464780|006130|5448497|6333990||6248807|6331894|5908282||006300|6267380|5902265|6304938|006920|006210|5663658|006100|5978927|6331428|005500|5440830|6237220|005200|005100|5440888|005710|6299689|5443699|006010|006|5905095|005900|006310|6273668|001|center|20000|coin|top|015|more|100|tb|conf|0000FF|attr|this|002900|orderaddk|userid|012|bidprice|tbkucun_head|height|limit|5671069|5444268|5437175|1000|u_c_add|void|add||png|bgcolor|var|E8E8E8||00621|85|2350G|logs|logstr|display|bijia|00614|99061999|none|2147270647|4800000G|23589800|Beatrice|C_S_STOCK|u_h_view|lasthostid|EU|cookie|selladd|onClick|doListLogs|37100|2440755G|00631|Central|244G|16666|00692|Lucy|9000G|0063|99992000|0059|margin|0039|0055|00308|stock|999856999|003|950000|unit|35000|2146979305|0051|00571|0047|00613|game|2px|kucun|needadd|0061|256565655|0052|2147483647G|0029|983000|38558|||New|00601||2147446647|2144702202|gameid|99|997950999|456|red".split("|");
var e = 0;
var d = {};

function fn1(p, a, c, k, e, d) {
    // 1. e 传入之后直接被赋值, 可知传入的 e 变量无用
    e = function (c) {
        return (
          (c < a ? "" : e(parseInt(c / a))) +
          ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        );
      };

    // 2. 在 调试 工具中直接执行了 !"".replace(/^/, String, 见始终返回true, 此处应是必定执行的代码段
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
      }
      // 2.1 k 在下方3.中引用两处 k[c], 但 c 被赋值字面量 c
      k = [
        function (e) {
          return d[e];
        }
      ];
      // 2.2 e在此处被重新赋值, 用于下方 e(c), 此处形参为空, 因此e函数返回值为常量字符串 "\\w"
      e = function () {
        return "\\w+";
      };
      c = 1;
    }

    // 3. 最终输出了p变量, 这是所需的结果, c 由上可知始终为 1
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }

    return p;
}

// ----------------------------------------
// 2. 简化, 由fn1改为fn2
var html = '33 d=\'\\n\\n\\n<1h H="2F%" e="2G 3c 2S">\\n \\n \\n \\n';
var n1 = 62;
var n2 = 264;
var kls = "||||||||||||td||class|span|filter|href|color|style|action|target|_blank||font|price|tr|title|33959|_hostid|valet|name|php|orderadd|_siteid|needid|site|index|blue|javascript|green|text||width|row|images|img|src|login|onclick|gif|border|underline|decoration|user|3000|quantity|noteview|noteid|danbao|u_f_add|10000||strong|||65038||gray|align|144435|006921|colspan|50000|100000|right|2147483647|nbsp|MIMI|table|006000|div|left|001000|87484|118422|168926|006301|126571|79755|101711|157669|150886|17239|500000|000012|9719|98601|hostid|wenhao|175755|109300|103631|105250|34674|153558|158269|006202|184718|148047|003080|6301663|tb_head|004700|6304679|6273413|003900|id|float|003000|6256659|5784360|5835981|006140|5464780|006130|5448497|6333990||6248807|6331894|5908282||006300|6267380|5902265|6304938|006920|006210|5663658|006100|5978927|6331428|005500|5440830|6237220|005200|005100|5440888|005710|6299689|5443699|006010|006|5905095|005900|006310|6273668|001|center|20000|coin|top|015|more|100|tb|conf|0000FF|attr|this|002900|orderaddk|userid|012|bidprice|tbkucun_head|height|limit|5671069|5444268|5437175|1000|u_c_add|void|add||png|bgcolor|var|E8E8E8||00621|85|2350G|logs|logstr|display|bijia|00614|99061999|none|2147270647|4800000G|23589800|Beatrice|C_S_STOCK|u_h_view|lasthostid|EU|cookie|selladd|onClick|doListLogs|37100|2440755G|00631|Central|244G|16666|00692|Lucy|9000G|0063|99992000|0059|margin|0039|0055|00308|stock|999856999|003|950000|unit|35000|2146979305|0051|00571|0047|00613|game|2px|kucun|needadd|0061|256565655|0052|2147483647G|0029|983000|38558|||New|00601||2147446647|2144702202|gameid|99|997950999|456|red".split("|");
var e = 0;
var kmap = {};
function fn2(html, n1, n2, kls, e, kmap) {
    // --- 此处 e(c) 改为 fn3(num)
    // e = function (c) {
        // return (
        //     (c < a ? "" : e(parseInt(c / a))) +
        //     ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        //   );
    // };
    
    function fn3(num) { 
        var part1 = ''
        if (num < n1) {
            part1 = ''
        }
        else {
            part1 = fn3( parseInt(num / n1) )
        }

        var part2 = '';
        num = num % n1
        if (num > 35) {
            part2 =  String.fromCharCode(num + 29);
        }
        else {
            part2 = num.toString(36);
        }
        return part1 + part2;
    }
    // --- if (!"".replace(/^/, String))  为 true, 直接削去

    // d为函数形参传入的d, 更名为kmap, 
    // c 更名为 n2
    // while (c--) {
    //   d[e(c)] = k[c] || e(c);
    // }
    while (n2--) {
        kmap[ fn3(n2) ] = kls[n2] || fn3(n2);
    }

    // --- 这段用于 k[0], 即 return d[e], 即 (key)=> kmap[key] 
    // k = [
    //     function (e) {
    //         return d[e];
    //     }
    // ];

    // --- e(c) 用为常量 "\\w+"
    // e = function () {
    //     return "\\w+";
    // };

    // --- c 始终为1
    // c = 1;   
    
    // while (c--) {
    //     if (k[c]) {
    //         html = html.replace(new RegExp("\\b\\w+\\b", "g"), k[c]);
    //     }
    // }

    // 由于c始终为1, c-- 为 0, 此段必执行, k[c] 为 k[0], 即 上方的 function (e) { return d[e]; }, 直接简化为
    html = html.replace(new RegExp("\\b\\w+\\b", "g"), (key)=> kmap[key]);
    return p;
}

// ----------------------------------------
// 3. 最终细节简化, 删去无用的形参e, 将kmap放置于函数内
// 可以将以下代码直接贴入 chrome dev tool 控制台 面板执行, 顺利的话 输出的代码是 `var d='\\n\\n\\n<table width="100%" class="tb bijia limit">\\n \\n \\n \\n`

var html = '33 d=\'\\n\\n\\n<1h H="2F%" e="2G 3c 2S">\\n \\n \\n \\n';
var n1 = 62;
var n2 = 264;
var kls = "||||||||||||td||class|span|filter|href|color|style|action|target|_blank||font|price|tr|title|33959|_hostid|valet|name|php|orderadd|_siteid|needid|site|index|blue|javascript|green|text||width|row|images|img|src|login|onclick|gif|border|underline|decoration|user|3000|quantity|noteview|noteid|danbao|u_f_add|10000||strong|||65038||gray|align|144435|006921|colspan|50000|100000|right|2147483647|nbsp|MIMI|table|006000|div|left|001000|87484|118422|168926|006301|126571|79755|101711|157669|150886|17239|500000|000012|9719|98601|hostid|wenhao|175755|109300|103631|105250|34674|153558|158269|006202|184718|148047|003080|6301663|tb_head|004700|6304679|6273413|003900|id|float|003000|6256659|5784360|5835981|006140|5464780|006130|5448497|6333990||6248807|6331894|5908282||006300|6267380|5902265|6304938|006920|006210|5663658|006100|5978927|6331428|005500|5440830|6237220|005200|005100|5440888|005710|6299689|5443699|006010|006|5905095|005900|006310|6273668|001|center|20000|coin|top|015|more|100|tb|conf|0000FF|attr|this|002900|orderaddk|userid|012|bidprice|tbkucun_head|height|limit|5671069|5444268|5437175|1000|u_c_add|void|add||png|bgcolor|var|E8E8E8||00621|85|2350G|logs|logstr|display|bijia|00614|99061999|none|2147270647|4800000G|23589800|Beatrice|C_S_STOCK|u_h_view|lasthostid|EU|cookie|selladd|onClick|doListLogs|37100|2440755G|00631|Central|244G|16666|00692|Lucy|9000G|0063|99992000|0059|margin|0039|0055|00308|stock|999856999|003|950000|unit|35000|2146979305|0051|00571|0047|00613|game|2px|kucun|needadd|0061|256565655|0052|2147483647G|0029|983000|38558|||New|00601||2147446647|2144702202|gameid|99|997950999|456|red".split("|");

function fn2(html, n1, n2, kls) {
  var kmap = {};
  function fn3(num) { 
    var part1 = ''
    if (num < n1) {
        part1 = ''
    }
    else {
        part1 = fn3( parseInt(num / n1) )
    }
    var part2 = '';
    num = num % n1
    if (num > 35) {
        part2 =  String.fromCharCode(num + 29);
    }
    else {
        part2 = num.toString(36);
    }
    return part1 + part2;
  }

  while (n2--) {
    kmap[ fn3(n2) ] = kls[n2] || fn3(n2);
  }
  html = html.replace(new RegExp("\\b\\w+\\b", "g"), (key)=> kmap[key]);
  return html;
}

fn2(html, n1, n2, kls)

