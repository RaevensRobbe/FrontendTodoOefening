// #1 Framework imports
import React, { useState } from 'react';

// #2 Third liibrary packages

// #3 Custom / own code
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Todo from '../components/Todo';

import Container from '../components/Container';
import Row from '../components/Row';

const Todos = () => {
    const [placeholderTodos] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

    return (
        <main>
            <AppHeader />

            
            <Row className="o-row--dark">
                <Container>
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
