import {useState} from 'react';
import './FilterWrapper.css';
import Accordian from './Accordian';



function FilterWrapper({setMainState}) {
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

  
  
  

    
    
   return (<div className='box'>
     <div className="filter">FILTER</div>
    {/* <Accordian title={'Category'} data={CategoryData}  handleChange={handleChange} checkedState={checkedState} /> */}
    <div className='plus-size'><img src='https://wforwomanonline.com/images/plus_size_Horizontal.png' alt='logo' ></img> </div>
   <Accordian title={'price'} data={PriceData} tag={'priceFilter'} setMainState={setMainState}/>
    <Accordian title={'Color'} data={ColorData} tag={'colorFilter'} setMainState={setMainState} />
    {/* <Accordian title={'Size'} data={SizeData} handleChange={handleChange} checkedState={checkedState}/> */}
    {/* <Accordian title={'NeckType'} data={NeckTypeData} handleChange={handleChange} checkedState={checkedState}/> */}
    {/* <Accordian title={'Sleeve'} data={SleeveData} handleChange={handleChange} checkedState={checkedState}/> */}
    {/* <Accordian title={'Occasion'} data={OccasionData} handleChange={handleChange} checkedState={checkedState}/> */}
    {/* <Accordian title={'Length'} data={LengthData} handleChange={handleChange} checkedState={checkedState}/> */}
    {/* <Accordian title={'Fastening Closures'} data={FasteningClosuresData} handleChange={handleChange} checkedState={checkedState}/> */}
    {/* <Accordian title={'Pattern'} data={PatternData} handleChange={handleChange} checkedState={checkedState}/> */}
    {/* <Accordian title={'Ornamentation'} data={OrnamentationData} handleChange={handleChange} checkedState={checkedState}/> */}
    {/* <Accordian title={'Fabric Family'} data={FabricFamilyData} handleChange={handleChange} checkedState={checkedState}/> */}
    
    
</div>);
}

export default FilterWrapper;
