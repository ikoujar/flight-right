import { useEffect, useState } from 'react';
import { Card, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Image from 'next/image';
import { FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import { Country } from '../interfaces';
import { useApi } from '../hooks/useApi';
import { Empty, Error, Loading, SearchForm } from './common';


export default function CountriesList() {

  const { data: items, loading, error } = useApi('api/nat');
  const [search, setSearch] = useState<string>();
  const [filtered, setFiltered] = useState<Country[]>([]);

  useEffect(() => {
    if (search) {
      const filterLogic = (e: Country) => e.code.toLowerCase().includes(search.toLowerCase());
      setFiltered(items.filter(filterLogic));
    } else {
      setFiltered(items || []);
    }
  }, [search, items]);

  return (
      <>
        <SearchForm onSearch={setSearch} />
        <Row>
          {
            filtered.length > 0 ?
                filtered.map(country =>
                    <Col key={country.code} md={3}>
                      <CountryItem
                          key={country.code}
                          country={country}
                      />
                    </Col>
                ) :
                <Col>
                  <Empty show={!error && !loading && !filtered.length} />
                  <Loading show={loading} />
                  <Error show={!!error} />
                </Col>
          }
        </Row>
      </>
  );
}

type CountryItemProps = {
  country: Country
}

function CountryItem({ country }: CountryItemProps) {
  return (
      <Card key={country.code} className='mb-2'>
        <Image
            alt={country.code}
            src={country.flag}
            width='100%'
            height={140}
        />
        <Card.Body>
          <div className={'d-flex'}>
            <Card.Title className={'flex-grow-1 my-auto'}>
              {country.code}
            </Card.Title>
            <OverlayTrigger
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Citizens</Tooltip>}
            >
              <Link href={`/nat/${country.code}`} passHref>
                <a>
                  <Button size={'sm'} className={'mx-1'} variant={'dark'}>
                    <FaUsers />
                  </Button>
                </a>
              </Link>
            </OverlayTrigger>
          </div>
          <Card.Subtitle
              className='mb-2 text-muted'
          >
            {country.citizensCount} Citizens
          </Card.Subtitle>
        </Card.Body>
      </Card>
  );
}
