import Image from 'next/image';
import { useEffect, useState } from 'react';
import postFile from '@/utility/postFile';

function MarkerImage({ type, isActive, eventId }) {
  const [file, setFile] = useState(null);

  useEffect(() => {
    postFile(eventId)
      .then((f) => {
        setFile(f);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (file === null) return <div />;

  return (
    <Image
      src={file.src}
      fill
      alt={type}
      loading={isActive ? 'eager' : 'lazy'}
      style={{ borderRadius: 'inherit' }}
    />
  );
}

export default MarkerImage;
