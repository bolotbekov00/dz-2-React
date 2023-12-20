import React, {useState} from 'react';


const ChildComponent = (props) => {
    return(
        <div>
            <h3>Child</h3>
            name: {props.nnn}
        </div>
    )
}
function ParentPages(props) {
    const [name, steName] = useState('baiel')
    return (
        <div>
            ParentComponent
            <input type="text" value={name} onChange={event => steName(event.target.value)}/>
            <ChildComponent nnn={name}/>
        </div>
    );
}

export default ParentPages;