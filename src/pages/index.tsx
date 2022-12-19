import { RadioGroup } from '@headlessui/react';
import { AnswerChoices } from 'components/AnswerChoices';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='grid grid-rows-10 grid-cols-10 h-[90%]'>
      {[...Array(100)].map((_, i) => (
        <AnswerChoices
          key={i}
          label={i + 1}
          optionValues={['A', 'B', 'C', 'D']}
        />
      ))}
    </div>
  );
};

export default Home;
