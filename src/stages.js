// json para setar os estagios
let stages = {
  0:{
    descricao:"Boas Vindas",
    obj: require("./stages/welcome")
  },
  1:{
    descricao:"Sintomas1",
    obj: require("./stages/diagnostic1")
  },
  2:{
    descricao:"Sintomas2",
    obj: require("./stages/diagnostic2")
  },
  3:{
    descricao:"Idade",
    obj: require("./stages/idade")
  },
  4:{
    descricao:"Sintomas3",
    obj: require("./stages/diagnostic3")
  },
  5:{
    descricao:"Localizacao",
    obj: require("./stages/local")
  },
  6:{
    descricao:"Encaminhamento",
    obj: require("./stages/emcaminhamento")
  },
}

exports.step = stages