import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <footer className='flex justify-center items-center text-sm h-[5%]'>
        <p>Copyright © dz99</p>
      </footer>
    </>
  );
};
