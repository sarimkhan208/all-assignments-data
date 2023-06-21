const Card=({data=[]})=>{
    console.log(data)
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list">
                        {
                            <div>
                                <h1>Hero Name : {item.name}</h1>
                                <h2>Height: {item.height}</h2>
                                <h2>Weight: {item.weight}</h2>
                                <h2>Power Level: {item.power}</h2>
                            </div>
                            
                         }
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
