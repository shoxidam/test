import Card from "./component/Card";
import { useState } from 'react'

export default function App() {

    const [users, setUsers] = useState([
        {
            name: 'tim',
            age: 18,
            password: 12345,
        },
        {
            name: 'bob',
            age: 20,
            password: 54321,
        },
        {
            name: 'jonh',
            age: 19,
            password: 3790,
        },
    ])

    return (
        <div className="App">
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody > 
                    {
                        users.map((val, ind) => {
                            return (
                               <Card key={ind} val={val}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
} 
