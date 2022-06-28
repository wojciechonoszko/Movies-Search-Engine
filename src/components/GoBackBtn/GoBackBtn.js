import { BtnWrapper, Search } from './GoBackBtnStyles';

export default function GoBackBtn({ data }) {
    return (
        <BtnWrapper>
            <Search to={data}>Go back</Search>
        </BtnWrapper>
    );
}