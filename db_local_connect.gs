// Replace the variables in this block with real values.
var address = '192.168.1.33:1521';//'Your DB Address Here';
    var user = 'fptech';//'Enter USER';
    var userPwd = 'fptech'//'YOUR PASSWORD';
    var db = 'FPTECH'//'DATABASE NAME';

    var dbUrl = 'jdbc:oracle://' + address + '/' + db;

    // Read up to 1000 rows of data from the table and log them.
   function readFromTable() {
      var conn = Jdbc.getConnection(dbUrl, user, userPwd);

      var start = new Date();
      var stmt = conn.createStatement();
      // Read up to 1000 rows of data from the table and log them.
      // stmt.setMaxRows(1000);
      var results = stmt.executeQuery('SELECT * FROM UTENTI');//YOURTABLE');

      var sheet = SpreadsheetApp.getActiveSpreadsheet();
      var cell = sheet.getRange('A1');
      var numCols = results.getMetaData().getColumnCount();
      var row =0;

      while (results.next()) {
        var rowString = '';
        for (var col = 0; col < numCols; col++) {
          rowString += results.getString(col + 1) + '\t';
          cell.offset(row, col).setValue(results.getString(col +1 ));
        }
        row++
       Logger.log(rowString)
      }

      results.close();
      stmt.close();
      conn.close();

      var end = new Date();
      Logger.log('Time elapsed: %sms', end - start);
    }