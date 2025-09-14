'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/CV.pdf', '_blank')} className='bg-white px-4 py-1.5 font-medium text-black transition-colors duration-200 hover:bg-gray-700 active:bg-gray-600'>
      Download CV
    </Button>
  );
};

export default DownloadCV;
