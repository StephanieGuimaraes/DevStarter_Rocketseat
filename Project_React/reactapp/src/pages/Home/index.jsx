import { Card } from '../../componentes/Card';
import './styles.css';

export function Home() {
  return (
    <div className="container">
        <h1>Lista de presença</h1>
        <input type="text" placeholder = "Digite um nome..."/>
        <button type = "button">Adicionar</button>

        
        <Card name="Rodrigo" time="10:55:25" />
        <Card name="Jorel" time="15:55:25" />
    </div>
  )
}

//export default Home
