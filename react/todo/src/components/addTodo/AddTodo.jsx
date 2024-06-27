import './AddTodo.css';
import { useState, useContext } from 'react';
import Context from '../../contexts/context';

export default function AddTodo() {

  const { addNew } = useContext(Context);

  const [ formData, setFormData ] = useState({
                                        mission: '',
                                        important: false
                                    });

  function onSubmit(e) {

    e.preventDefault();

    if (formData.mission) {

        addNew(formData);
        setFormData({
            mission: '',
            important: false
        });

    }

  }

  console.log(formData);
  return (
    <>

        <h3 style={{margin: "1rem 2rem"}}>Add Todo:</h3>
        <form className="AddTodoForm" onSubmit={onSubmit}>

            <input type="text" name="mission" required
                value={formData.mission}
                onChange={(e) => setFormData({...formData,
                                              mission: e.target.value})} />
            
            {/* CONTROLLED INPUT: in REACT it's bi-directional
            effect of the input fields on the state and vice virsa */}
            <label htmlFor="important">Important?</label>    
            <input type="checkbox" name="important" id="important"
                checked={formData.important} 
                onChange={(e) => setFormData({...formData,
                                        important: e.target.checked})} />
            <button type="submit">Add</button>

        </form>

    </>
  )
}
