var timeleft = 9;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Nội dung không thể hiển thị. Vui lòng tải lại trang!";
    var myobj = document.getElementById("info");
    myobj.remove();
    loadPDF();
  } else {
    document.getElementById("countdown").innerHTML = "Hãy đợi trong " + timeleft + " giây";
  }
  timeleft -= 1;
}, 1000);
