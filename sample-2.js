// USAGE VIA THE UI: select the cells you want to generate HTML for, then go to the menu and select Generate A+ > Generate HTML for selected cells

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Generate A+")
    .addItem("Generate HTML for general template", "generateHTML")
    .addItem("Generate HTML for Nykaa", "generateHTMLNykaa")
    //.addItem('Generate HTML grid template','generateHTMLGrid')
    .addToUi();
}
function generateHTML() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // Prompt the user to select the destination cell
  var cellAddress = Browser.inputBox(
    "Select Destination Cell",
    "Enter the cell address (e.g., A1):",
    Browser.Buttons.OK_CANCEL
  );
  if (cellAddress && sheet.getRange(cellAddress)) {
    var selection = sheet.getActiveRangeList();
    var ranges = selection.getRanges();

    if (ranges.length > 0) {
      var result = `<style type='text/css'>
                      .main-container {
                        line-height: 0;
                      }
                      .main-container img {
                        display: block;
                        width: 100%;
                      }
                      .widdd50 img {
                          width: 50%;
                          float: left;
                      }
                      </style>
                      <div class='main-container'>`;

      for (var i = 0; i < ranges.length; i++) {
        var values = ranges[i].getValues();
        for (var j = 0; j < values.length; j++) {
          var value = values[j][0];
          if (value) {
            result += `<img src='${value}'>`;
          }
        }
      }
      result += `</div>`;
      // Set the result in the specified destination cell
      sheet.getRange(cellAddress).setValue(result);
    }
  }
}
function generateHTMLNykaa() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // Prompt the user to select the destination cell
  var cellAddress = Browser.inputBox(
    "Select Destination Cell",
    "Enter the cell address (e.g., A1):",
    Browser.Buttons.OK_CANCEL
  );
  if (cellAddress && sheet.getRange(cellAddress)) {
    var selection = sheet.getActiveRangeList();
    var ranges = selection.getRanges();
    if (ranges.length > 0) {
      var result = `<style type='text/css'>
                      .aplus-container {max-width: 770px; margin: 0 auto; width: 100%;line-height: 0;}
                      .aplus-container img{
                          display: block;
                          width: 100%;
                          max-width: 100%;
                          height: auto;
                          vertical-align: middle;
                          border: 0;
                      }
                      </style>
                      <div class='aplus-container'>`;
      for (var i = 0; i < ranges.length; i++) {
        var values = ranges[i].getValues();
        for (var j = 0; j < values.length; j++) {
          var value = values[j][0];
          if (value) {
            result += `<img src='${value}'>`;
          }
        }
      }
      result += `</div>`;
      // Set the result in the specified destination cell
      sheet.getRange(cellAddress).setValue(result);
    }
  }
}
