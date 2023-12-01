import { Progress } from '@nextui-org/progress';
import Text from '../primitives/Text.jsx';

function MapPreloader() {
  return (
    <div className="mb-20 flex flex-col gap-3 w-full max-w-[12rem] justify-center items-center">
      <Text tag="h5" text="Загрузка карты..." />
      <Progress size="sm" isIndeterminate aria-label="Загрузка карты" />
    </div>
  );
}

export default MapPreloader;
