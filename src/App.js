import {useEffect,useState} from 'react';
import Header from './Header/Header';
import FilterWrapper from './FilterWrapper/FilterWrapper';
import CardList from './CardWrapper/CardList';
// import Homepage from './AppliedFiltersCard/Homepage';
// import NoData from './AppliedFiltersCard/NoData';


function App() {
  const[card,setCard]=useState([]);
  const [filter,setFilter]=useState('')
  const [mainState, setMainState] = useState({
    categoryFilter: [],
      priceFilter: [],
      colorFilter:[],
      sizeFilter:[],
      
    });

 
  useEffect(()=>{
    fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=${filter}`)
    .then((res)=>res.json())
    .then((result)=>{
     console.log(result.result.products);
     setCard(result.result.products);
    })
    // let filteredString=filterString(mainState)
    // console.log(mainState)
    // setFilter(filteredString)
},[setCard]);

  
  return (

<>
<Header/>

<div style={{display:'flex'}}>
<FilterWrapper setMainState={setMainState} />
<CardList card={card}  />
</div>
    </>
  );
}

export default App;
