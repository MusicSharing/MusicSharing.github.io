
 var funDownload = function(content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};

$("#save").click(function(){
     if (user_music_list.length == 0){
        user_music_list = music_data
    }
    funDownload(JSON.stringify(user_music_list), 'music_list.json');

})


$("#upfile").click();
$("#upfile").on("change", function () {
    var obj = document.getElementById("upfile");
    var selectedFile = obj.files[0];
    var reader = new FileReader();
     reader.readAsText(selectedFile);

     reader.onload = function(){
         let json = JSON.parse(this.result);
         user_music_list = json;
         $("#upfile").val("")
     }
});
