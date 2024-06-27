import './TShirt.css';
import tShirtImg from '../../img/t-shirt-blue.webp';

export default function TShirt() {
  return (
    <figure className='tShirt'>
        <img src={tShirtImg} alt="blue t-shirt" />
        <h3>Blue T-Shirt</h3>
        <p>price: 45 sheq</p>
        <button>Add to the Cart</button>
    </figure>
  )
}
