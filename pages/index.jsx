import useSWR from 'swr';

import Toolbar from './components/toolbar';
import TCodesList from './components/tcodes_list';
import styles from '../styles/Home.module.css';

function useTCodes() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR('/api/tcodes', fetcher);

  return {
    data: data,
    isLoading: isLoading,
    isError: error,
    mutate: mutate
  }
}

export default function Home() {

  const { data, mutate } = useTCodes();

  console.log(`Rendering Home component: ${JSON.stringify(data)}`);

  return (
    <div>
      <Toolbar data={data} mutate={mutate}/>  
      <div className={styles.tcodes_container}>
        <TCodesList data={data}/>
      </div>
    </div>
  );
};
