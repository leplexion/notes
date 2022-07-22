'''
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

'''

import re

def base36_encode(number):
    number = int(number)
    num_str = '0123456789abcdefghijklmnopqrstuvwxyz'
    if number == 0:
        return '0'
    base36 = []
    while number != 0:
        number, i = divmod(number, 36)    # 返回 number// 36 , number%36
        base36.append(num_str[i])
    return ''.join(reversed(base36))

def fn2(html, n1, n2, kls):
    kmap = {}

    def fn3(num):
        part1 = ''
        if num < n1:
            part1 = ''
        else:
            part1 = fn3(int(num / n1))
        part2 = ''

        num = divmod(num, n1)[1]
        if num > 35:
            part2:bytes = bytes([num + 29])
            part2 = part2.decode('utf-8')
        else:
            part2 = base36_encode(num)

        return part1 + part2

    while True:
        n2 -= 1
        if not (n2 > 0): break
        val = ''
        if (n2 >= 0 and len(kls) > n2) and kls[n2]:
            val = kls[n2]
        else:
            val = fn3(n2)

        key = fn3(n2)
        kmap[key] = val

    def fnreg(reres):
        key = reres.group()
        if kmap.__contains__(key):
            return kmap[key]
        else:
            return key

    html:str = re.sub(f'\\b\\w+\\b', fnreg, html)
    return html

if __name__ == '__main__':
    html = '33 d=\'\\n\\n\\n<1h H="2F%" e="2G 3c 2S">\\n \\n \\n \\n'
    n1 = 62
    n2 = 264
    kls = "||||||||||||td||class|span|filter|href|color|style|action|target|_blank||font|price|tr|title|33959|_hostid|valet|name|php|orderadd|_siteid|needid|site|index|blue|javascript|green|text||width|row|images|img|src|login|onclick|gif|border|underline|decoration|user|3000|quantity|noteview|noteid|danbao|u_f_add|10000||strong|||65038||gray|align|144435|006921|colspan|50000|100000|right|2147483647|nbsp|MIMI|table|006000|div|left|001000|87484|118422|168926|006301|126571|79755|101711|157669|150886|17239|500000|000012|9719|98601|hostid|wenhao|175755|109300|103631|105250|34674|153558|158269|006202|184718|148047|003080|6301663|tb_head|004700|6304679|6273413|003900|id|float|003000|6256659|5784360|5835981|006140|5464780|006130|5448497|6333990||6248807|6331894|5908282||006300|6267380|5902265|6304938|006920|006210|5663658|006100|5978927|6331428|005500|5440830|6237220|005200|005100|5440888|005710|6299689|5443699|006010|006|5905095|005900|006310|6273668|001|center|20000|coin|top|015|more|100|tb|conf|0000FF|attr|this|002900|orderaddk|userid|012|bidprice|tbkucun_head|height|limit|5671069|5444268|5437175|1000|u_c_add|void|add||png|bgcolor|var|E8E8E8||00621|85|2350G|logs|logstr|display|bijia|00614|99061999|none|2147270647|4800000G|23589800|Beatrice|C_S_STOCK|u_h_view|lasthostid|EU|cookie|selladd|onClick|doListLogs|37100|2440755G|00631|Central|244G|16666|00692|Lucy|9000G|0063|99992000|0059|margin|0039|0055|00308|stock|999856999|003|950000|unit|35000|2146979305|0051|00571|0047|00613|game|2px|kucun|needadd|0061|256565655|0052|2147483647G|0029|983000|38558|||New|00601||2147446647|2144702202|gameid|99|997950999|456|red".split("|")
    print(fn2(html, n1, n2, kls))
