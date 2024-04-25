import { useState } from 'react';

import { style } from '../FormSingIn/stylesFormSignIn';
import { style as styleT }  from './styleTagForm';

const TagForm = ({ setInterests, interests, interestsError }) => {

  const [tagInput, setTagInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      setInterests([...interests, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleDeleteTag = (index) => {
    setInterests(interests.filter((_, i) => i !== index));
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={ tagInput }
          onChange={ (e) => setTagInput(e.target.value) }
          onKeyDown={ handleKeyDown }
          className={ interestsError ? style.inputAlert : style.input }
          placeholder="Agregar etiquetas apretando Enter"
        />

        { interestsError.length ? <div className={ style.textAlert }>{ interestsError }</div> : <div className={ styleT.p }>Puedes agregar todas las tags que quieras, solo agrega el texo y apreta la tecla Enter</div>}
      </div>

      <div className={ styleT.divGrid }>
        {interests.map((tag, index) => (
          <div key={ index } className='my-1'>
            <div className={ styleT.tag }>
              <div>
                { tag }
              </div>
              <div>
                <button
                  onClick={ () => { handleDeleteTag(index) } }
                  className={ styleT.button }
                  type='button'
                >x</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TagForm;
