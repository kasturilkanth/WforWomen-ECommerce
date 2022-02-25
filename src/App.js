import {useEffect,useState} from 'react';
import Header from './Header/Header';
import FilterWrapper from './FilterWrapper/FilterWrapper';
import CardList from './CardWrapper/CardList';
// import './App.css';



function App() {
  const[card,setCard]=useState([]);//to extract the data from the api without selected filter
  const [filter,setFilter]=useState('')//to render the selected filter
  const[searchField,setSearchField]=useState('')//state to change the searched values
  const [appliedFilters,setAppliedFilters]=useState([]);//to append the sellected filters to new array
  const [mainState, setMainState] = useState({
    categoryFilter: [],
      priceFilter: [],
      colorFilter:[],
      sizeFilter:[],
      neckTypeFilter:[],
      sleeveFilter:[],
      occasionFilter:[],
      lengthFilter:[],
      fasteningClosuresFilter:[],
      patternFilter:[],
      ornamentationFilter:[],
      fabricFamilyFilter:[],
});//to get the value from the checked state and delete
//function to handle the searched value
const searchvaluefunc=(e)=>{
// console.log(e.target.value)
const searchValue=e.target.value
setSearchField(searchValue)
}
//to filter name by searched value
const filteredCards=card.filter((card)=>{
 
    return card.name.toLowerCase().includes(searchField.toLowerCase().trim())
  }
)
//to make the object empty and change the state and to make the selected filter unselect
const clearFilter=()=>{
  const obj={
    categoryFilter: [],
      priceFilter: [],
      colorFilter:[],
      sizeFilter:[],
      neckTypeFilter:[],
      sleeveFilter:[],
      occasionFilter:[],
      lengthFilter:[],
      fasteningClosuresFilter:[],
      patternFilter:[],
      ornamentationFilter:[],
      fabricFamilyFilter:[],
  }
  setMainState(obj)
  setFilter('')
}
//to add the selected values to the filter session
const filterString=(obj)=>{
  const array=Object.keys(obj);
  let string="";
  //here array1 is used for showing applied filters
  let array1=[];
  array.forEach((e)=>{
    
    // here e will be element in array
    obj[e].forEach((ele)=>{
      if(e==="colorFilter"){
        string+=`color-${ele},`
        array1.push(`color:${ele}`)

      }
      if(e==="priceFilter"){
        string+=`selling_price-${ele},`
        array1.push(`Price:${ele}`)
      }
      if(e==="sizeFilter"){
        string+=`size-${ele},`
        array1.push(`size:${ele}`)
      }
      if(e==="occasionFilter"){
        string+=`occasion-${ele},`
        console.log(string)
        array1.push(`Occasion:${ele}`)

      }
      if(e==="categoryFilter"){
        string+=`product_category-${ele},`
        console.log(string)
        array1.push(`product_category:${ele}`)

      }
      if(e==="neckTypeFilter"){
        string+=`neck-${ele},`
        console.log(string)
        array1.push(`neck:${ele}`)

      }
      if(e==="sleeveFilter"){
        string+=`sleeve-${ele},`
        console.log(string)
        array1.push(`sleeve:${ele}`)

      }
      if(e==="lengthFilter"){
        string+=`length-${ele},`
        console.log(string)
        array1.push(`length:${ele}`)

      }
      if(e==="fasteningClosuresFilter"){
        string+=`fastening_closure-${ele},`
        console.log(string)
        array1.push(`fastening_closure:${ele}`)

      }
      if(e==="patternFilter"){
        string+=`pattern-${ele},`
        console.log(string)
        array1.push(`pattern:${ele}`)

      }
      if(e==="ornamentationFilter"){
        string+=`ornamentation-${ele},`
        console.log(string)
        array1.push(`ornamentation:${ele}`)

      }
      if(e==="fabricFamilyFilter"){
        string+=`fabric_family-${ele},`
        console.log(string)
        array1.push(`fabric_family:${ele}`)

      }
      //if you unchecked all the filters
      if(obj[e].length===0){
        string+=''
      }
      
    })
  })
  //passing array1 values and changing appliedfilters
  setAppliedFilters(array1)
  //remove last character from string
  return(string.slice(0,string.length-1))
}

 
  useEffect(()=>{
    console.log(filter);
    fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=120&sort_by=&sort_dir=desc&filter=${filter}`)
    .then((res)=>res.json())
    .then((result)=>{
    //  console.log(result.result.products);
     setCard(result.result.products);
     
     let filteredString=filterString(mainState)
          setFilter(filteredString)
    })
   
    
},[mainState,filter]);

  
  return (

<div className='app'>
<Header searchvaluefunc={searchvaluefunc}/>

<div style={{display:'flex'}}>
<FilterWrapper setMainState={setMainState} appliedFilters={appliedFilters}  clearFilter={clearFilter} />
<CardList card={filteredCards}  />
</div>
    </div>
  );
}

export default App;
