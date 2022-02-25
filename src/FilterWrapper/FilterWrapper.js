import {useState,useCallback} from 'react';
import './FilterWrapper.css';
import Accordian from './Accordian';



function FilterWrapper({setMainState,appliedFilters,clearFilter}) {
  const [singleFilter,setSingleFilter]=useState({});
  const [clearfilter,setClearfilter]=useState([])
   
//array to store the data
  const CategoryData=['kurtas','tops','lips']
  const PriceData=['Rs0 to Rs2000','Rs2000 to Rs4000','Rs4000 to Rs6000','Rs6000 to Rs8000','Rs8000 to Rs10000','Rs10000 to Rs12000','Rs12000 to Rs14000','Rs14000 to Rs16000','Rs16000 to Rs18000','Rs18000 to Rs20000','Rs20000 to Rs22000','Rs22000 to Rs24000']
  const ColorData = ['blue', 'pink', 'white', 'green', 'yellow', 'black', 'red', 'off-white', 'beige', 'Maroon', 'teal', 'cream', 'purple', 'peach', 'orange', 'gold', 'grey', 'wine', 'brown', 'Ecru', 'multicoloured', 'silver', 'musterd', 'coral', 'mauve', 'dark yellow']
  const SizeData=['6','8','10','12','14','16','18','20','22','XL','XXL','L','M','S','XS','WL','WS','WM','WFS','FS','Onesize']
  const NeckTypeData=['Round Neck','Mandarin Collar','Boat Neck','V Neck','Square neck','Shirt Collar','Keyhole neck','Open Neck','Choker Neck','Shawl Collar']
  const SleeveData=['3/4 sleeve','Full Sleeve','Elbow Sleeve','Short Sleeve','Half Sleeve','Sleeveless','Kaftan Sleeve']
  const OccasionData=['Festive','Casual']
  const LengthData=['Length','calf length','knee length','ankle length','above knee']
  const FasteningClosuresData=['print','solid','Yd-Dobby']
  const PatternData=['solid','Embroidered','Floral','printed','striped','embellished','paisley','geometric','ornamental','ikkat','tribal','woven design','block print',' polka dots',' animal','stipes','all over buti','checkered',' all over jaal',' animal/birds','bandhej']
  const OrnamentationData=[ 'thread work','thread embroidery','sequins','Dori Embroidery','metalic Embroidery','beads and stones','gotta patti','beads','metallic dori','Embroidery']
  const FabricFamilyData=['Cotton','Cotten blend','Viscose','Rayon','100% man made fiber','cotton flax','linen','crepe','denim ','polyester','liva','chanderi ','acrylic','jacquard','nylon ','flax']
  
  //to clear all the filters sellected 
const onclickHandler=()=>{
    clearFilter()
    clearfilter.forEach((e)=>{e()})
}
//reset is passed to the callback function
const resetState=useCallback((func,singleCheckState,tag)=>{
  setClearfilter((prev)=>[...prev,func])
 
  setSingleFilter((prev)=>{
      const current={...prev}
      current[tag]=singleCheckState
      return current
  })
},[])


//to remove the values when we press the x symbol
  const cancelfunc=(str)=>{
    const split=str.split(':')
    const tag=split[0].toLowerCase()
    const inputVal=split[1]
    let filterName;
    if(tag==='category'){
      filterName='categoryFilter'
  }
  if(tag==="price"){
    filterName='priceFilter'
}
    if(tag==="color"){
        filterName='colorFilter'
    }
    if(tag==='size'){
      filterName='sizeFilter'
  }
    
    if(tag==="neckType"){
        filterName='neckTypeFilter'
    }
   
    if(tag==='sleeve'){
      filterName='sleeveFilter'
  }
  if(tag==='occasion'){
    filterName='occasionFilter'
}
if(tag==='length'){
  filterName='lengthFilter'
}
if(tag==='fasteningClosure'){
  filterName='fasteningClosuresFilter'
}
if(tag==='pattern'){
  filterName='patternFilter'
}
if(tag==='ornamentation'){
  filterName='ornamentationFilter'
}
if(tag==='fabricFamily'){
  filterName='fabricFamilyFilter'
}
    
    

    const func=singleFilter[filterName]
    if(func){
        func(inputVal)
    }
    const removeValue = (inputVal, filterName) => {
      if (inputVal) {
          setMainState((prev) => {
              const currentValues = { ...prev };
              currentValues[filterName] = currentValues[filterName].filter((val) => val !== inputVal)
              return currentValues;
          })
      }
    };
    removeValue(inputVal,filterName)

   

}
  
  

    
    
   return (<div className='box'>
     <div className="filter">FILTER</div>
     {appliedFilters.length>0 &&
      <div className='appliedFiltes'>
        {appliedFilters.map((ele)=>{
                    return(
                    <div key={ele} className='element-container'>
                     
                      <span className='element'>{ele}</span>
                      {appliedFilters.length>1&&<span className='cancel' onClick={()=>cancelfunc(ele)}>X</span>}
                    </div>)
                })}
        <button className='clearall' onClick={onclickHandler}>clear all</button>
      </div>}
    <Accordian title={'Category'} data={CategoryData} tag='categoryFilter' setMainState={setMainState} callback={resetState}  />
    <div className='plus-size'><img src='https://wforwomanonline.com/images/plus_size_Horizontal.png' alt='logo' ></img> </div>
   <Accordian title={'price'} data={PriceData} tag='priceFilter' setMainState={setMainState} callback={resetState}/>
    <Accordian title={'Color'} data={ColorData} tag='colorFilter' setMainState={setMainState} callback={resetState}/>
    <Accordian title={'Size'} data={SizeData} tag='sizeFilter' setMainState={setMainState} callback={resetState} />
    <Accordian title={'NeckType'} data={NeckTypeData} tag='neckTypeFilter' setMainState={setMainState} callback={resetState}/>
    <Accordian title={'Sleeve'} data={SleeveData} tag='sleeveFilter' setMainState={setMainState} callback={resetState}/>
    <Accordian title={'Occasion'} data={OccasionData} tag='occasionFilter' setMainState={setMainState} callback={resetState} />
    <Accordian title={'Length'} data={LengthData} tag='lengthFilter' setMainState={setMainState} callback={resetState} />
    <Accordian title={'Fastening Closures'} data={FasteningClosuresData} tag='fasteningClosuresFilter' setMainState={setMainState} callback={resetState} />
    <Accordian title={'Pattern'} data={PatternData}  tag='patternFilter' setMainState={setMainState} callback={resetState} />
    <Accordian title={'Ornamentation'} data={OrnamentationData}  tag='ornamentationFilter' setMainState={setMainState} callback={resetState} />
    <Accordian title={'Fabric Family'} data={FabricFamilyData}  tag='fabricFamilyFilter' setMainState={setMainState} callback={resetState} />
    
    
</div>);
}

export default FilterWrapper;
