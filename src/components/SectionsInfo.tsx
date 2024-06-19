import {CardStyled, IconsStyled} from "./CardStyle";
import SectionInfoStyled from "./SectionsInfoStyled";

import screen from "../assets/screen.png"
import levels from "../assets/levels.png"
import check from "../assets/check.png"

const SectionInfo = () => {
    return (
        <SectionInfoStyled>
        <CardStyled>
            <IconsStyled src={screen} alt="..." />
            <h2>Somento para desktop</h2>
            <p>Vamos aprender como utilizar um framework.</p>
        </CardStyled>
        <CardStyled>
            <IconsStyled src={levels} alt="..." />
            <h2>Criado com componentes</h2>
            <p>Utilizamos o Styled Components.</p>
        </CardStyled>
        <CardStyled>
            <IconsStyled src={check} alt="..." />
            <h2>Facíl aproveitamento</h2>
            <p>Estamos no caminho.</p>
        </CardStyled>
        </SectionInfoStyled>
    );
};

export default SectionInfo;