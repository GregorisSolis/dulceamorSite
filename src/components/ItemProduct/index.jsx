import './itemProduct.css'

export function ItemProduct(props){
    return(
        <div className="content_product">
            <div className='content-img_product'>
                <img src={props.urlImg} alt='img' />
            </div>
            <div className='description'>
                <h2>{props.name}</h2>
                <p>$ {props.price}</p>
            </div>
        </div>
    )
}