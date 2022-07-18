# Nationalities & Citizens

## [GET] api/nat
Returns a list of available nationalities/countries.

Sample Request:
`api/nat`

Sample response:

```json
{
  "data": [
    {
      "code": "DE",
      "flag": "https://countryflagsapi.com/png/DE",
      "citizensCount": 50
    },
    {
      "code": "FR",
      "flag": "https://countryflagsapi.com/png/FR",
      "citizensCount": 60
    }
  ]
}
```

## [GET] api/nat/{code}/citizens?page=1

Returns a paginated list of citizens for specific country.

Query Params:
- `code` country code.

Query Params:
- `page` select page.
- `search` Search by firstname, lastname and ID

Response:
- `page` Current page.
- `pages` Total number of pages.
- `items` list of citizens.

Sample Request:
`api/nat/DE/citizens?page=1`

Sample response:
```json
{
"data": {
  "page": 1,
  "pages": 4,
  "items": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Florian",
        "last": "Pierre"
      },
      "location": {
        "street": {
          "number": 6120,
          "name": "Rue de Cuire"
        },
        "city": "Saint-Denis",
        "state": "Haute-Saône",
        "country": "France",
        "postcode": 70961,
        "coordinates": {
          "latitude": "39.7481",
          "longitude": "-140.8681"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "florian.pierre@example.com",
      "dob": {
        "date": "1973-05-07T21:30:27.583Z",
        "age": 49
      },
      "id": {
        "name": "INSEE",
        "value": "1730462534442 29"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "FR"
    }
  ]
}
}
```


## [POST] api/nat/{code}/vote

Vote for country.

Sample Request:
`api/nat/DE/vote`

Sample response:
```json
{
  "success": true
}
```
