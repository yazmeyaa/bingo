import { Container, LinkedNavText, LinksList, Navigation, Title } from "./styles"

function Header() {
    return (
        <Container>
            <Title>Бинго!</Title>
            <Navigation>
                <LinksList>
                    <li><LinkedNavText to={'/'}>Главная</LinkedNavText></li>
                    <li><LinkedNavText to={'/create'}>Создать новое бинго!</LinkedNavText></li>
                    <li><LinkedNavText to={'/bingo'}>Поучаствовать</LinkedNavText></li>
                </LinksList>
            </Navigation>
        </Container>
    )
}

export default Header