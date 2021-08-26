module.exports = (app) => {

    let likes = 0;
    let dislikes = 0;

    let entries = [];
    app.locals.entries = entries;

    app.get("/", (req, res) => {
        res.render("index.html", {
            likesNum : likes,
            disLikesNum : dislikes,
        });
    });
  
    app.post("/", (req, res)=>{
    
        if(req.body.LIKE){
            likes++;
            res.redirect("/#LIKE");
        }

        if(req.body.DISLIKE){
            dislikes++;
            res.redirect("/#DISLIKE");
        }

        if (!req.body.email || !req.body.body) {
            res.send(400).send("404");
        }
        let newEntry = {
            email: req.body.email,
            content: req.body.body,
            username: req.body.username,
            published: new Date() 
        };    
        entries.push(newEntry);
        res.redirect("/");
    


    });
}


 
