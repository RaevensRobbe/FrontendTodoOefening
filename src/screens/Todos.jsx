// #1 Framework imports
import React, { useState } from 'react';

// #2 Third liibrary packages

// #3 Custom / own code
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Todo from '../components/Todo';

import Container from '../components/Container';
import Row from '../components/Row';

import '../style/components/newTodo.css';

const Todos = () => {
    const [placeholderTodos] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

    return (
        <main>
            <AppHeader />

            
            <Row className="">
                <Container>
                    {/* INSERT TODO */}
                    <div className="c-add-todo">
                        <button className="c-add-todo-button">
                            <svg className="c-add-todo-button__icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="arcs">
                            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <div className="c-add-todo-data">
                            <input 
                                className="c-add-todo-data__input" placeholder="What is your next task?" type="text" 
                                name="" 
                                id="" 
                            />
                            <div>
                                <select class="c-add-todo-data__select" name="" id="">
                                    <option value="hobby">Hobby</option>
                                    <option value="school">School</option>
                                    <option value="work">work</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    

                    {placeholderTodos.map((t) => <Todo />)}
                </Container>
            </Row>

            <AppFooter />
        </main>
    )
}

// export const pi = Math.PI;

// // export default test = () => {

// // }

// import { Todos, pi } from '...';

export default Todos;
