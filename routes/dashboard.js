module.exports = (app,fetch) => {

    app.get("/", (req, res, next) => {
      fetch('https://coronavirus-19-api.herokuapp.com/all')
        .then(res => res.text())
        .then(body => res.render("main/dashboard", {
          data: JSON.parse(body),
          title: "test"
        }));


    });
}
