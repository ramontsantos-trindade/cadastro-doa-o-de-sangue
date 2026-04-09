const listaDeDoadores = []

const form = document.getElementById('formDoador');
const listaExibicao = document.getElementById('listaDoeadores');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que a página recarregue

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const tipoSanguineo = document.getElementById('tipoSanguineo').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

    if (nome.trim().split(" ").length < 2) {
        alert("Por favor, insira seu nome completo (nome e sobrenome).");
        return;
    }

    if (idade < 16)
        alert("A idade minima para cadastro é 16 anos.");

    if (peso < 50) {
        alert("O peso minimo para doação é 50kg");
    }

    const telefoneApenasNumeros = telefone.replace(/\D/g, '');

    if (telefoneApenasNumeros.length === 0) {
        alert("Por favor, insira um telefone válido com números.");
        return;
    }

    const doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        telefone: telefoneApenasNumeros,
        cidade: cidade,
        estado: estado,
    };

    listaDeDoadores.push(doador);

    console.log("Novo doador cadastrado", doador)
    console.log("Lista completa de doadores", listaDoadores)

    const li = document.createElement('li')
    li.textContent = `${doador.nome} | Tipo: ${doador.tipoSanguineo} | ${doador.cidade}-${doador.estado}`;
    listaExibicao.appendChild(li);

    form.reset()
    alert("Cadastro realizado com sucesso!");


});