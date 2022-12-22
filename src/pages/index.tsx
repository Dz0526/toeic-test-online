import { AnswerChoices } from 'components/AnswerChoices';
import type { NextPage } from 'next';
import { useState } from 'react';

// color code #b7b7b7,#705c53 (mono)  #f3ebdf,#a95320 (kinako)  #faf7f0,#d8d2c2 (kinako ver.2)

type Page = 'reading' | 'listening';

const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) => {
  return (
    <button className='rounded-lg shadow-lg p-4 h-12' onClick={onClick}>
      {children}
    </button>
  );
};

const Home: NextPage = () => {
  const [page, setPage] = useState<Page>('listening');

  const ListeningPage = () => {
    return (
      <>
        <header className='h-[5%] flex space-x-3'>
          <h1 className='grow font-bold mt-2 ml-2'>TOEIC 公式問題集</h1>
          <Button
            onClick={() => {
              setPage('reading');
            }}
          >
            次のページ
          </Button>
          <Button>提出</Button>
        </header>
        <div className='grid grid-rows-10 grid-cols-10 h-[90%] shadow-lg container mx-auto p-4'>
          {[...Array(6)].map((_, i) => (
            <AnswerChoices
              key={i + 1}
              label={i + 1}
              optionValues={['A', 'B', 'C', 'D']}
            />
          ))}
          {[...Array(25)].map((_, i) => (
            <AnswerChoices
              key={i + 7}
              label={i + 7}
              optionValues={['A', 'B', 'C']}
            />
          ))}
          {[...Array(69)].map((_, i) => (
            <AnswerChoices
              key={i + 32}
              label={i + 32}
              optionValues={['A', 'B', 'C', 'D']}
            />
          ))}
        </div>
      </>
    );
  };

  const ReadingPage = () => {
    return (
      <>
        <header className='h-[5%] flex space-x-3'>
          <h1 className='grow font-bold mt-2 ml-2'>TOEIC 公式問題集</h1>
          <Button
            onClick={() => {
              setPage('listening');
            }}
          >
            前のページ
          </Button>
          <Button>提出</Button>
        </header>
        <div className='grid grid-rows-10 grid-cols-10 h-[90%] shadow-lg container mx-auto p-4'>
          {[...Array(100)].map((_, i) => (
            <AnswerChoices
              key={i + 101}
              label={i + 101}
              optionValues={['A', 'B', 'C', 'D']}
            />
          ))}
        </div>
      </>
    );
  };

  return <>{page == 'listening' ? <ListeningPage /> : <ReadingPage />}</>;
};

export default Home;
