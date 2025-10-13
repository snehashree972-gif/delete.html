import React from 'react'

const Signup = () => {
  return (
    <>
    <div> Signup</div>
    <div>
        <form>
            <lable>Name</lable>
            <input type="text" placeholder="Name" require="true" />
            <lable>Phone Number</lable>
            <input type="number" placeholder="Phone Number" require="true" />
            <label>Email Address</label>
            <input type="email address" placeholder="Email Address" require="true" />
            <lable>Password</lable>
            <input type="password" placeholder="Password" require="true" />
            <button type="submit">Submit</button>

        </form>
    </div>
    </>
  )
}

export default Signup
