/*function generateHTML2(cells) {
  var result = '<style type="text/css">.main-container{line-height: 0;}.main-container img{display: block;width: 100%;}.widdd50 img{width: 50%;float: left;}</style><div class="main-container">';
  for (var i = 0; i < cells.length; i++) {
    result += '<img src="' + cells[i] + '">';
  }
  result += '</div>';
  return result;  
}*/

// USAGE: generateHTML(A2:A4)

function generateHTML(cells) {
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
  for (var i = 0; i < cells.length; i++) {
    result += `<img src='${cells[i]}'>`;
  }
  result += `</div>`;
  return result;
}
