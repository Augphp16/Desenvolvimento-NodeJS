/*
HomeModel.find().then((dados) => {
    console.log(dados);
}).catch((err) => {
    console.log(err);
});
*/

/*
HomeModel.create({
    titulo: 'Flamengo',
    descricao: 'Em busca do título carioca'
}).then((dados) => {
    console.log(dados);
}).catch((err) => {
    console.log(err);
});
*/

exports.paginaInicial = (req, res) => {
    res.render('index');
    return
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return
}

