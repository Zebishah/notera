import React from 'react'

const WrongAlert = (props) => {
    return (
        <div>
            <div className={`flex justify-center items-center w-[100%] h-12  bg-red-600 text-green-950 relative -top-[20rem] -translate-x-full ${props.dhos && "translate-x-0"} transition-all duration-500 delay-200 ease-in-out`}>
                <h3>Wrong Credentials....</h3>
            </div>
        </div>
    )
}

export default WrongAlert