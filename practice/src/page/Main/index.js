import { Link } from "react-router-dom";
import { MainStyled as S } from "./index.styled";

const Main = () => {
  return (
    <S.Container>
      <Link to="/react">버튼</Link>
      <button>버튼</button>
    </S.Container>
  );
};

export default Main;
