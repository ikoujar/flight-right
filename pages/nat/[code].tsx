import type { NextPage } from 'next';
import Main from '../../layouts/main';
import CitizensList from '../../components/citizens';
import { useRouter } from 'next/router';

const CountryPage: NextPage = () => {
  const router = useRouter();
  return (
    <Main title={'Citizens'}>
      <h2>
        Citizens
      </h2>
      {
        router.query?.code && <CitizensList country={router.query.code.toString()} />
      }
    </Main>
  );
};

export default CountryPage;
