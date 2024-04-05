const HomeModel = require("../models/homeModel");

/*
HomeModel.find().then((dados) => {
    console.log(dados);
}).catch((err) => {
    console.log(err);
});
*/

/*
HomeModel.create({
    titulo: 'Augusto',
    descricao: 'Augusto é contratado como desenvolcedor pela Lemobs'
}).then((dados) => {
    console.log(dados);
}).catch((err) => {
    console.log(err);
});
*/

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Um titulo qualquer',
        numeros: [1, 2, 3, 4]
    });
    return
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return
}

