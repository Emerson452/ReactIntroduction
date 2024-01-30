import img from "../../assets/img.jpeg"
import github from "../../assets/github.svg"

import Button from "../../components/Button"
import { Card } from "../../components/Card"
import { Counter } from "../../components/Counter"

import Avatar from "../../components/Avatar"
import { NameState } from "../../components/NameState"


const Home = () => {

    return (
        <div>
            <Button.Primary label="Clique"/>
            <Button.Secondary label="Clique ici"/>

            <Avatar.Small background={img} />

            <Card label="Github" icon={github} iconPosition="left" background={img} />

            <Counter />
            <NameState />
        </div>
    )
}

export default Home;