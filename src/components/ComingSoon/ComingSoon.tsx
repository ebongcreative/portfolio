import FlexBox from "../FlexBox";
import { FigureStyled, SubtitleStyled, TitleStyled } from "./styled";
import megaphoneIcon from "@/assets/megaphone.png"

export default function ComingSoon () {
    return <FlexBox gap={20} flexDirection="column" alignItems="center" width={'100%'} height={'100%'} justifyContent="center">
        <FigureStyled>
            <img alt="megaphone icon" src={megaphoneIcon} />
        </FigureStyled>
        <TitleStyled>Coming soon</TitleStyled>
        <SubtitleStyled>This feature is a work in progress</SubtitleStyled>
    </FlexBox>
}