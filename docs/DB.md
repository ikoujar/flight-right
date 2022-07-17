# Nationalities & Citizens

This Document explains the application database structure:

## DB Structure

We are using the database to store voting logs only, so it's just a simple MongoDB collection containing:
- Voter IP `String`
- Country Code `String`

Votes collection:
```json
[
  {
    "voter": "127.0.0.1",
    "country": "FR"
  },
  {
    "voter": "192.168.0.1",
    "country": "DE"
  }
]
```
