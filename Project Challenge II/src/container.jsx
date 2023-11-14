import React from 'react'
import Buttons from './buttons.jsx'

const container = ({request, setRequest}) => {
    return (
        <div className='box'>
            <Buttons
                buttonText="users"
                request={request}
                setRequest={setRequest}
            />
            <Buttons
                buttonText="posts"
                request={request}
                setRequest={setRequest}
            />
            <Buttons
                buttonText="comments"
                request={request}
                setRequest={setRequest}
            />
        </div>
    )
}

export default container