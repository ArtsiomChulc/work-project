import './styles/App.css'
import {Button} from "../shared/components/atoms/button/Button.tsx";

function App() {

    return (
        <>
            <Button size={'large'} type={'button'} onClick={() => {}} text={'This button'}/>
            <Button size={'medium'} color={'secondary'} type={'button'} onClick={() => {}} text={'This button'}/>
            <Button type={'link'} onClick={() => {}} text={'This link'}/>
        </>
    )
}

export default App
