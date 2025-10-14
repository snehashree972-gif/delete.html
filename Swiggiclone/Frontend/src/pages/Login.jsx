import React from 'react'

const Login = () => {
  return (
    <>
    <div> Login</div>
    <div>
      <form>
        <lable>Name</lable>
            <input type="text" placeholder="Name" require="true" value={name} onChange={e.target.value} />
            <lable>Phone Number</lable>
            <input type="Number" placeholder="Phone Number" require="true" value={phonenumber} onChange={e.target.value} />
            <lable>Email Address</lable>
            <input type="Email Address" placeholder="Email Address" require="true" value={emailaddress} onChange={e.target.value}/>
            <button type="submit">Submit</button>
      </form>
    </div>

</>
  )
}

export default Login
