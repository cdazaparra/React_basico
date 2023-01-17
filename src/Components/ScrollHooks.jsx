import React, {useState, useEffect} from 'react'
const ScrollHooks = () => {
        const [scrollX, setScrollX] = useState(0)
        const [scrollY, setScrollY] = useState(0)
        useEffect(()=>{
                //console.log("Moviendo el scroll");
                const detectarScroll = ()=>{
                        setScrollY(window.pageYOffset)
                        setScrollX(window.pageXOffset)
                }
                window.addEventListener("scroll", detectarScroll)
                return ()=>{
                        window.removeEventListener("scroll", detectarScroll)
                        //console.log("Fase de desmontaje");
                }
        })
        // Si se deja vacio se ejecuta de forma permanente
        // Si se pone [] Se ejecuta una sola vez
        // Si se pone una variable se ejecuta cuando cambia la variable
        useEffect(()=>{
                //console.log("Fase de montaje");
        },[])
        useEffect(()=>{
                //console.log("Fase de actualizacion");
        })
        useEffect(()=>{
                //console.log("Fase de desmontaje");
        })
        return (
                <>
                <h2>Hooks-useEffect y Ciclo De Vida</h2>
                <p>Scroll Y del Navegador {scrollY}</p>
                <p>Scroll Y del Navegador {scrollX}</p>
                </>
        );
}

export default ScrollHooks;