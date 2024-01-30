import img from "../../assets/img.jpeg"
import github from "../../assets/github.svg"

import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Counter } from "../../components/Counter"

import Avatar from "../../components/Avatar"


const Home = () => {

    return (
        <div>
            <Button label="Clique"></Button>
            <Button label="Clique ici"></Button>

            <Avatar.Small background={img} />

            <Card label="Github" icon={github} iconPosition="left" background={img} />

            <Counter />
        </div>
    )
}

export default Home;