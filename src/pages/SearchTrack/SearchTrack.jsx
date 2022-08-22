import { useSelector } from "react-redux";


const SearchTrack = () => {
    const {items} = useSelector(state=>state.search)
    return (
        <div
          style={{
            marginTop : "10vh"
          }}
        >
             {items.map(item=>(
                <h1>{item.name} </h1>

             ))}
           
            
        </div>
    );
};

export default SearchTrack;