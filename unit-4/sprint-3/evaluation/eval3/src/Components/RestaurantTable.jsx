import Pagination from "./Pagination"
import { RestaurantCard } from "./RestaurantCard"

function RestaurantTable({data}){

    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                   
                    {
                        data?.length>0 && data.map((item)=>(
                            <RestaurantCard key={item.id} id={item.id} name={item.name} rating={item.rating} type={item.type}
                            number_of_votes={item.number_of_votes} price_starts_from={item.price_starts_from}  />
                        ))
                    }
                </tbody>
                <Pagination/>
            </table>
            
    )
}

export default RestaurantTable