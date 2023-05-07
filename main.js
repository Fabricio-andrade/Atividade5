const agenda = [];
let agendaFone = [];

function checandoEspacoVazio(e) {
    return e.includes(' ')
}

function inserir() {
    let result = false;
    for (let j = 0; j < agendaFone.length; j++) {
        if (document.getElementById('fone').value === agendaFone[j]) {
            result = true;
            break;
        }
    }
    if (result || isNaN(document.getElementById('fone').value)) {
        let aviso = document.getElementById('existe');
        aviso.classList.add('mostrar');
        setTimeout(() => {
            aviso.classList.remove('mostrar');
        }, 1000);
    } else if (document.getElementById('fone').value === '' || checandoEspacoVazio(document.getElementById('fone').value)) {
        aviso = document.getElementById('erro');
        aviso.classList.add('mostrar');
        setTimeout(() => {
            aviso.classList.remove('mostrar');
        }, 1000);
    } else {
        for (let i = 0; i < 1; i++)
            agenda.push({
                "nome": document.getElementById('nome').value.charAt(0).toUpperCase() + document.getElementById('nome').value.slice(1),
                "fone": document.getElementById('fone').value,
                "endereco": document.getElementById('end').value,
                "email": document.getElementById('email').value
            });
        agendaFone.push(document.getElementById('fone').value);
        agenda.sort((a, b) => a.nome.localeCompare(b.nome));
        document.getElementById('tabela').innerHTML = '';
        for (let index = 0; index < agenda.length; index++) {
            document.getElementById('tabela').innerHTML += `Nome: ${agenda[index].nome}<br> Telefone: ${agenda[index].fone}<br> Endereço: ${agenda[index].endereco}<br> Email: ${agenda[index].email}<br><br>`;
        }
    }
}

function deletar() {
    for (let j = 0; j < agendaFone.length; j++) {
        if (document.getElementById('foneCheck').value === agenda[j].fone) {
            agenda.splice(j, 1);
            break;
        }
    }

    for (let j = 0; j < agendaFone.length; j++) {
        if (document.getElementById('foneCheck').value === agendaFone[j]) {
            agendaFone.splice(j, 1);
            break;
        }
    }
    agenda.sort((a, b) => a.nome.localeCompare(b.nome))
    document.getElementById('tabela').innerHTML = '';
    for (let index = 0; index < agenda.length; index++) {
        document.getElementById('tabela').innerHTML += `Nome: ${agenda[index].nome}<br> Telefone: ${agenda[index].fone}<br> Endereço: ${agenda[index].endereco}<br> Email: ${agenda[index].email}<br><br>`;
    }
}

function editar() {
    if (document.getElementById('foneChange').value === '') {
        console.log("Insira o telefone para alteração!");
    } else {
        for (let i = 0; i < agenda.length; i++) {
            if (agenda[i].fone === document.getElementById('foneChange').value) {
                agenda.splice(i, 1, {
                    "nome": document.getElementById('nomeChange').value.charAt(0).toUpperCase() + document.getElementById('nomeChange').value.slice(1),
                    "fone": document.getElementById('foneChange').value,
                    "endereco": document.getElementById('endChange').value,
                    "email": document.getElementById('emailChange').value
                });
                break;
            }
        }
    }
    agenda.sort((a, b) => a.nome.localeCompare(b.nome))
    document.getElementById('tabela').innerHTML = '';
    for (let index = 0; index < agenda.length; index++) {
        document.getElementById('tabela').innerHTML += `Nome: ${agenda[index].nome}<br> Telefone: ${agenda[index].fone}<br> Endereço: ${agenda[index].endereco}<br> Email: ${agenda[index].email}<br><br>`;
    }
}

function consultar() {
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].fone === document.getElementById('foneConsultar').value) {
            document.getElementById('tabela').innerHTML = `Nome: ${agenda[i].nome}<br> Telefone: ${agenda[i].fone}<br> Endereço: ${agenda[i].endereco}<br> Email: ${agenda[i].email}<br><br>`;
            break;
        }
    }
}