import React, {useState} from 'react'

const ContadorHooks = () => {
        const [counter, setCounter] = useState(0)

        const increment = () => {
            setCounter(counter + 1)
        }

        const decrement = () => {
            setCounter(counter - 1)
        }
        return (
                <>
                        <h2>Hooks-useState</h2>
                        <nav>
                                <h3>{counter}</h3>
                                <button onClick={increment}>Increment</button>
                                <button onClick={decrement}>Decrement</button>
                        </nav>
                </>
        );
}

export default ContadorHooks;