Logger = BetterLog.useSpreadsheet('12Ptvz-3hBHsXJ4Q7TxDOxyIitPFVch-YXKgako3eGT0'); 

function sendResponse(resp,e){

return ContentService.createTextOutput(JSON.stringify(resp)).setMimeType(ContentService.MimeType.JSON);
  
}



function processRequest(e){
  e=e || {};
  
  Logger.log(e.postData.contents);
  

}




function doPost(e) {
  
  var resp=processRequest(e);
  return sendResponse({"status":"ok"},e);
  
}


