import React from 'react'

export default function Child(props) {
    const data = "Estes são os dados do componente filho para o componente pai."
    return (
        <div>
            <div>
                {props.parentToChild}
            </div>
            <div>
                <button onClick={() => props.childToParent(data)}>Clique no filho</button>
            </div>
        </div>
    )
}