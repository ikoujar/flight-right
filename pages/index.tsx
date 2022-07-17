import type { NextPage } from 'next';
import Main from '../layouts/main';
import CountriesList from '../components/countries';

const Home: NextPage = () => {
    return (
        <Main title='Countries'>
            <h2>Countries</h2>
            <CountriesList />
        </Main>
    );
};

export default Home;
