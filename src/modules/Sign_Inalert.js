import React from 'react'

function SignInAlert(props) {
    return (
        <div>
            <div className={`flex justify-center items-center w-[100%] h-12  bg-green-400 text-green-950 relative -top-[20rem] -translate-x-full ${props.shos && "translate-x-0"} transition-all duration-500 delay-200 ease-in-out`}>
                <h3>Welcome your are Sucessfully signed in your account you are redirecting to Your dashboard</h3>
            </div>
        </div>

    )
}

export default SignInAlert;