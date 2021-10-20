import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardList from './CardList'

const UserList = () => {
    const [user, setUser] = useState([])
useEffect(() => {
    let getuser=async()=>{
        try {
        let res=await axios.get("https://jsonplaceholder.typicode.com/users") 
        setUser(res.data)
        } catch (error) {
            console.log(error)
            
        }
    }
    getuser()

}, [])


    
    return (
        <div>
            { user.map((el,i)=><CardList users={el} key={i}/>)}
        </div>
    )
}

export default UserList
