import React, {useState} from 'react'

const Signup = () => {
  const [name , setName] = useState("")
  return (
    <> 
    <div> Signup</div>
    <div>
        <form>
            <lable>Name</lable>
            <input type="text" placeholder="Name" require="true" value={name} onChange={e.target.value}/>
            <lable>Phone Number</lable>
            <input type="number" placeholder="Phone Number" require="true" value={Number} onChange={e.target.value} />
            <label>Email Address</label>
            <input type="email address" placeholder="Email Address" require="true" value={emailaddress} onChange={e.target.value} />
            <lable>Password</lable>
            <input type="password" placeholder="Password" require="true" value={password} onChange={e.target.value} />
            <button type="submit">Submit</button>

        </form>
    </div>
    </>

  )
}

export default Signup
