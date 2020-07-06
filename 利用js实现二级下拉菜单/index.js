function show(li){
    var ul=li.getElementsByTagName("ul")[0];
    // 关建二：在li这个对象内查询标签名为ul的标签，由于二级标签只有一个，所以索引为0即可。
    ul.style.display="block";
    // 关键三：当鼠标划过li时，其子元素ul标签的display为block
    }
    function hide(li){
    var ul=li.getElementsByTagName("ul")[0];
    ul.style.display="none";
    }