import { Segment } from 'semantic-ui-react';
import './App.css';
import FormEntregador from './views/entregador/FormEntregador';


function App() {
  return (
    <div className="App">

      <FormEntregador />

      <div style={{ marginTop: '6%' }}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2025 - Projeto WEB III - IFPE Jaboatão dos Guararapes <br />
          BY: Ewerthon Weslley Ferreira Messias
        </Segment>
      </div>


    </div>
  );
}

export default App;
