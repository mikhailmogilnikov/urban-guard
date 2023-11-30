import Text from '../ui/primitives/Text.jsx';
import Controls from './Controls.jsx';

function Admin() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
      <div className="lg:w-96 w-full p-4 flex flex-col gap-16 mb-28">
        <Text tag="h1" classNames="!text-3xl" text="Dev mode" />
        <Controls />
      </div>
    </div>
  );
}

export default Admin;
