function testing() {
  articles = articles_json;
  test = document.getElementById("test");
  article = articles_json[0].comment;

  test.innerHTML = marked(article);
}

function load_queue() {
  articles = articles_json;
  table_format = "";
  issue_counter = 0;
  var date = new Date();
  var date = new Date();
  if (issue_counter < 5) {
    date.setDate(date.getDate() + 7);
  }
  issue_date = date.toDateString();
  
  table_headers = "<table><tr><th style='width:130px'>Date</th><th>URL</th><th>Headline</th><th>Comments</th><th>Preview</th><th>Draft</th></tr>";
// <tr><td>That</td><td>looks</td><td>table-ish</td><td>butwithout</td><td>borders</td></tr>
  close_table = "</table>";
  table_format = ""

  new_item = '</tr></td><td>Will be filed at end of queue</td><td><input id="newurl" type="text" size="25" value=""></td><td><input id="newheadline" type="text" size="25" value=""></td><td><textarea id="newcomment" class="comment" rows=10 cols=40 wrap=soft onkeyup="update_preview()"></textarea></td><td id="newpreview" class="preview"><center><button type="button" onclick="update_preview()">Update Preview</button></center></td><td><form action=""><input type="checkbox" name="draft" value="n">Draft<br></form></td>'

  queue = document.getElementById("queue");

  for (var i = 0; i < articles.length; i++) {
    draft = '<form action=""><input type="checkbox" name="draft" value="n">Draft<br></form>'
    if (articles[i].draft == "y") {
      draft = '<form action=""><input type="checkbox" name="draft" value="y" checked="checked">Draft<br></form>';
    }
    comment = articles[i].comment;
    headline = articles[i].headline;
    url = articles[i].url;
    link = marked("[Link](" + url + ")");
    preview = marked("## " + headline + "\n\n" + comment + "\n\n" + link);

    url_box = '<input type="text" size="25" value="' + url + '">'
    headline_box = '<input type="text" size="25" value="' + headline + '">'
    comment_box = '<textarea rows=10 cols=40 wrap=soft onkeyup="update_preview()">' + comment + '</textarea>'

    table_format = table_format + "</tr></td><td>" + issue_date + "</td><td>" + url_box + "</td><td>" + headline_box + "</td><td>" + comment_box + "</td><td class='preview'>" + preview + "</td><td>" + draft + "</td>";
    issue_counter++;
    // <tr><td>Date</td><td>URL</td><td>Comments</td><td>Preview</td><td>Draft</td></tr>
  }
  queue.innerHTML = table_headers + table_format + new_item + close_table;

}
function update_preview() {
//   var all_comments = document.getElementsByClassName("comment");
//   for (i = 0; i < all_comments.length; i++) {
//       all_comments[i].style.backgroundColor = "red";
//   }

//// update only the new item:
//   url = document.getElementById("newurl").value;
//   comment = document.getElementById("newcomment").value;
//   headline = document.getElementById("newheadline").value;
//   preview = document.getElementById("newpreview");
// 
//   preview.innerHTML = marked("## " + headline + "\n\n" + comment + "\n\n" + link);
// }

  docbody      = document.getElementsByTagName("body")[0];
  doctable     = docbody.getElementsByTagName("table")[0];
  doctablebody = doctable.getElementsByTagName("tbody")[0];

  docrow = doctablebody.getElementsByTagName("tr");

  for (i = 1; i < docrow.length; i++) {
    url = docrow[i].getElementsByTagName("td")[1].childNodes[0].value;
    headline = docrow[i].getElementsByTagName("td")[2].childNodes[0].value;
    comment = docrow[i].getElementsByTagName("td")[3].childNodes[0].value;
    preview = docrow[i].getElementsByTagName("td")[4];
    link = "[Link](" + url + ")";

    preview.innerHTML = marked("## " + headline + "\n\n" + comment + "\n\n" + link);

  }
}
