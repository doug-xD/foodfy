const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    {nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    {nome: "Tuane", tecnologias: ["HTML", "Node.js"]}
];

// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
// SE encontrar, retorne true da função, caso contrário retorne false

function checaSeUsuarioUsaCSS(usuario) {

    for (let tecnologia of usuario.tecnologias) {
      const encontreiTecnologiaCSS = tecnologia == "CSS"
        if (encontreiTecnologiaCSS) {
            return true;
      } 
    }

    return false;
}

for (let usuario of usuarios) {
    const esteUsuarioPossuiCSS = checaSeUsuarioUsaCSS(usuario)
    if (esteUsuarioPossuiCSS){
        console.log(`usuário ${usuario.nome} Possui CSS `)
    }else{
        console.log(`usuário ${usuario.nome} não possui css`)
    }
}
//checaSeUsuarioUsaCSS(usuarios)