import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './SpinnerStyles';

export default function Spinner() {
    return (
        <LoaderContainer>
            <BallTriangle
            type="Hearts"
            color="#ec7e89"
            height={120}
            width={120}
            timeout={8000}
            />
        </LoaderContainer>
    );
}