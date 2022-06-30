import { Circles } from 'react-loader-spinner';
import { LoaderContainer } from './SpinnerStyles';

export default function Spinner() {
  return (
    <LoaderContainer>
      <Circles
        type="Hearts"
        color="pink"
        height={120}
        width={120}
        timeout={8000}
        
      />
    </LoaderContainer>
  );
}