export default function Card({ val }) {
    function handelclick (){
        
    }
    return (
        <tr>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.password}</td>
            <td><button onClick={() => handelclick}>get users</button></td>
        </tr>
    )
}


