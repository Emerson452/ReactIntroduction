import {Small} from "./Small"
import {Cover} from "./Cover"


const Avatar = ({children}) => {

    return (
        <div>{children}</div>
    )
}

Avatar.Small = Small;
Avatar.Cover = Cover;


export default Avatar;