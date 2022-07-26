// ---------------------------------------
var blob_from_bytes_array = function(arr) {
    // 字节数组转 Blob对象
    return new Blob( [new Uint8Array(arr)], { type: "application/octet-binary" })
};

var blob_from_base64 = function(base64) {

};

var blob_from_string = function(s) {

};

var blob_to_bytes_array = async function (blob) {
    // 从blob读取字节数组
    return Array.from(new Uint8Array(await blob.arrayBuffer()));
};

var blob_to_base64 = function(blob) {
    // 异步函数
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    })
};

// ---------------------------------------
var ascii_to_bytes_array = function(str) {
    var res = [];
    var ch = '';
    var code = '';

    for (var i = 0; i < str.length; i++) {
        ch = str[i];
        code = str.charCodeAt(i);
        if (code < 0 || code > 127) {
            throw Error(`传入${i}个字符[${ch}],编码[${code}], 非ascii字符.`)
        }
        res.push(code);
    }
    return res
}
var ascii_from_bytes_array = function(arr) {
    var res = '';
    var ch;
    var code;
    for (var i = 0; i < arr.length; i++ ) {
        code = arr[i];
        ch = String.fromCharCode(code);
        if (code < 0 || code > 127) {
            throw Error(`传入${i}个字节[${code}],字符为[${ch}], 非ascii字符.`)
        }
        res += ch;
    }
    return res;
};

// ---------------------------------------
var utf8_to_code_array = function(str) {
    var res = [];
    var ch = '';
    var code = '';

    for (var i = 0; i < str.length; i++) {
        ch = str[i];
        code = str.charCodeAt(i);
        res.push(code);
    }
    return res;
}
var utf8_from_code_array = function(arr) {
    var res = '';
    var ch;
    var code;
    for (var i = 0; i < arr.length; i++ ) {
        code = arr[i];
        ch = String.fromCharCode(code);
        res += ch;
    }
    return res;
}

const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }



var blob = blob_from_bytes_array([5,6,7]);
(async ()=> {
    console.log(await blob_2_base64(blob))
})
