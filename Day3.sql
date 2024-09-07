SELECT person.firstName, person.lastName, address.city, address.state
FROM person
LEFT JOIN address
ON person.personId = address.personId;
