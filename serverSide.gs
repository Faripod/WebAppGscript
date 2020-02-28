//Funzione per creare la webApp

function doGet(e) {
  
  Logger.log(e.parameter);
  
  /*
  Funzione per far eseguire prima della creazione della pagina HTML
  il codice al suo interno utile per eseguire prima JS e quindi includere
  informazioni
  */
  return HtmlService.createTemplateFromFile("page").evaluate();
}

function userClicked(dataContainer){
  
  var ss = SpreadsheetApp.openById(sheetID);
  //Current Active sheet
  var activeSheet = ss.getSheetByName(sheetName);
  
  //Buona prassi controllare le informazioni prima di scriverle
  activeSheet.appendRow([dataContainer.fn, dataContainer.ln, dataContainer.ls, new Date()]);
  Logger.log("Scrittura sullo sheet completata ");
}

//Include per innestare JS e css all'interno dell'HTML principale da un filename
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}