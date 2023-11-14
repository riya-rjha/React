import React, { useRef } from 'react';

//Component Name
const Buttons = ({ buttonText, request, setRequest }) => {
    const inputRef = useRef();
    return (
        <button
            className={buttonText === request ? "selected" : null}
            type='button'
            onClick={() => setRequest(buttonText)
            }
        >
            {buttonText}
        </button>
    )
};

export default Buttons;
