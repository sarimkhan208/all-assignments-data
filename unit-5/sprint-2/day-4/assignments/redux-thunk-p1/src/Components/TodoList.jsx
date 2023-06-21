export default function TodoList({data}){



    return <div>
        <h1>Todo List</h1>
        {
            data.length>0 && data.map((el)=>(
                <div key={el.id} >
                    <h3>{el.title} - {el.status?"Complete":"Pending"}</h3>
                </div>
            ))
        }
    </div>
}