import React from 'react'

const UpdateAlert = (props) => {
  let { shos } = props
  return (
    <>
      <div className={` z-50 flex relative -top-[21rem] justify-center items-center w-[100%] h-12 bg-green-400 text-green-950 -translate-x-full ${shos && "translate-x-0"} transition-all duration-500 delay-200 ease-in-out`}>
        <h3>Update Operation is Successfully completed! values are updated</h3>
      </div>
      {

      }
    </>
  )
}

export default UpdateAlert