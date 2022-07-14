// 原生: 
var event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
});
el.dispatchEvent(event);

// jquery: 
$('#xxx').click()

/* -----------------------------------------------
    <!-- 此为手写的html, 激活了a标签 -->
    <a id='atag' href='http://www.baidu.com'></a>
    <script>
        // 为以下代码
    </script>
*/

document.getElementById('atag').dispatchEvent(event)

/* -----------------------------------------------
    在mdn 中 "Get MDN Plus" 有效, 打开了plus页面
    https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent

    <li>
        <a class="button primary mdn-plus-subscribe-link" href="/en-US/plus">
            <span class="button-wrap">Get MDN Plus</span>
        </a>
    </li>
*/
document.getElementsByClassName('button-wrap')[4].dispatchEvent(event);

/* -----------------------------------------------
    // https://www.bijiaqi.com/ 有效
    <input 
        type="button" 
        class="button" 
        value="新用户注册" 
        data-type="register"
    ></input>
*/
var el = $('[data-type=register]')[0];
el.dispatchEvent(event);



