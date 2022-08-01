import './buttonStyle.css'
import Image from '../../assets/ws.png'

export function Button(props){

    return(
        <a className='buttonAction' href='https://wa.me/5804249114582'>
            <img src={Image} alt="image of button" />
        </a>
    )
}