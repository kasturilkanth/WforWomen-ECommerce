import Card from './Card';
import './CardList.css';


function CardList({card}) {
    // console.log(card)
  return (
    <div className='cardlist'>
    {
 card.map((item,i)=>{
        return <Card key={i}  item={item} card={card}/>
 })}
 </div>
  )
}
export default CardList;