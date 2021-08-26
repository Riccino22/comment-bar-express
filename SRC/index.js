const express    =        require("express");
const morgan     =         require("morgan");
const bodyParser =    require("body-parser");
const path       =           require("path");
const app        =                 express();


//APP.SET
app.set("views", path.join(__dirname, "/VIEWS/"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);


//APP.USE
app.use(express.static(path.join(__dirname, "/PUBLIC/")));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

require("./ROUTES/index")(app);


//APP.ENGINE

app.engine("html", require("ejs").renderFile);


//LISTEN ON PORT
app.listen(app.get("port"), ()=>{
    console.log("Server in port " + app.get("port"));
});