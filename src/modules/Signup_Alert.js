import React from 'react'

const SignUpAlert = (props) => {
    return (
        <div>
            <div className={`flex justify-center items-center w-[100%] h-12  bg-green-400 text-green-950 relative -top-[20rem] -translate-x-full ${props.shos && "translate-x-0"} transition-all duration-500 delay-200 ease-in-out`}>
                <h3>Welcome your are Sucessfully signed in your account Now Please Login in Your new Account</h3>
            </div>
        </div>
    )
}

export default SignUpAlert