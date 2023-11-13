import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: "Título",
    descricao: 'Primeira Atividade',
  },
  {
    id: 2,
    prioridade: '2',
    titulo: "Título",
    descricao: 'Segunda Atividade',
  },
  {
    id: 3,
    prioridade: '3',
    titulo: "Título",
    descricao: 'Terceira Atividade',
  },
]

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function addAtividades(e){
    e.preventDefault();

    const atividade = {
      id: Number(document.getElementById('id').value),
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    };

    setAtividades([...atividades, {...atividade}]);
  }

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  return (
    <>
        <AtividadeForm 
            atividades={atividades}
            addAtividades={addAtividades}
        />
        <AtividadeLista 
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        />
    </>
  );
}

export default App;
