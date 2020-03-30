// Funzione per recuperare le informazioni relative alla cella riga e colonna

function getFocusCell(sheetID, tabName) {
  
  var row = SpreadsheetApp.open(sheetID).getSheetByName(tabName).getActiveCell().getRow();
  
  return row;
}