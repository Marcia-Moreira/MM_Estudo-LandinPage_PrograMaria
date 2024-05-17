// Manipular dados para consumir dados sem precisar escrever no html e sim só no js.

// Criar um Objeto:

const infos = {
    imagem: 'https://github.com/marcia-moreira.png',
    nome: 'Marcia Moreira',
    cargo: 'Desenvolvedora Full Stack',
    
    github: 'https://github.com/Marcia-Moreira',
    linkedin: 'https://www.linkedin.com/in/idmarciamoreira',
    instagram: 'https://www.instagram.com/marcia_moreira_dev/',

    // minibio: 'colar aqui a sua minibio',
    // Não tireia minibio do html pois está cheio de tags no texto
};

document.getElementById('imagem').src = infos.imagem;
document.getElementById('nome').innerHTML = infos.nome;
document.getElementById('cargo').innerHTML = infos.cargo;
// document.getElementById('minibio').innerHTML = infos.minibio;

document.getElementById('github').href = infos.github;
document.getElementById('linkedin').href = infos.linkedin;
document.getElementById('instagram').href = infos.instagram;

// De posse desse script, podem ser retiradas no HTML todas as referidas informações com id acima.