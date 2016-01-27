var marked = require('marked')
    ,fs = require("fs")
    ,http = require('http')
    ,header = '<link rel="stylesheet" type="text/css" href="../asset/stylesheets/normalize.css">';

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: false,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

fs.readFile('sources/Audio-Player-2.0.md', 'utf-8', function (err, data) {
    if (err) throw err;
    server(header + marked(data));
    output(header + marked(data));
});
function output (data) {
    fs.writeFile("posts/Audio-Player-2.0.html", data, "utf-8", function (err) {
        if (err) {
            console.log("檔案輸出錯誤！");
            throw err;
        }
    });
}
function server(html){
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.end(html);
    }).listen(8888, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:8888/');
}