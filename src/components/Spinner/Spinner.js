import { Hearts } from 'react-loader-spinner';
import { LoaderContainer } from './SpinnerStyles';

export default function Spinner() {
  return (
    <LoaderContainer>
      <Hearts
        type="Hearts"
        color="red"
        height={120}
        width={120}
        timeout={8000}
      />
    </LoaderContainer>
  );
}