// components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import UseForm from './components/UseForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';

//Hooks
import {useForm} from './hooks/useForm';



function App() {
  const formComponents = [
    <UseForm />,
    <ReviewForm />,
    <Thanks />
  ];

    const {currentStep, currentComponent, changeStep} = useForm(formComponents);

  return (
    <div>
      <div className='app'>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, ultilize o formulário abaixo para avaliar o produto.</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form action="" onSubmit={(e) => (currentStep + 1, e)}>
          <div className='inputs-container'>{currentComponent}</div>
          <div className='action'>
            <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
            </button>
            <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
            </button>

          </div>

        </form>
      </div>

    </div>
    
  )
}

export default App
