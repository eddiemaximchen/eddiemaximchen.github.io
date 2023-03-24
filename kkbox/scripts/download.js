function downloadFiles(data, file_name, file_type){
    var file = new Blob([data],{type: file_type});
    if (window.navigator.msSaveOrOpenBlob){
      window.navigator.msSaveOrOpenBlob(file, file_name);
    }
    else{
      var a = document.createElement("a"),url=URL.createObjectURL(file);
      a.href=url;
      a.download=file_name;
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },0);
    }
  }