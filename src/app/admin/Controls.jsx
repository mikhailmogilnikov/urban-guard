import { Button } from '@nextui-org/button';

function Controls() {
  return (
    <div className="w-full lg:w-96 flex flex-col gap-6">
      <Button
        size="lg"
        variant="flat"
        color="success"
        className="h-16 rounded-3xl"
      >
        Добавить событие
      </Button>
      <Button
        size="lg"
        variant="flat"
        color="warning"
        className="h-16 rounded-3xl"
      >
        Удалить последнее событие
      </Button>
      <Button
        size="lg"
        variant="flat"
        color="danger"
        className="h-16 rounded-3xl"
      >
        Удалить все события
      </Button>
    </div>
  );
}

export default Controls;
