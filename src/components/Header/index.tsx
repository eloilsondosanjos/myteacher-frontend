import { HeaderContainer, Logo } from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/assets/myteacher.png" />
      </div>

      <p>Encontre o professor perfeito!</p>
    </HeaderContainer>)
}

export default Header