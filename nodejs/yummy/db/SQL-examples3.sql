USE classicmodels;

SELECT firstName, lastName, jobTitle, offices.officeCode, city, country
FROM employees JOIN offices
     ON employees.officeCode = offices.officeCode;

SELECT firstName, lastName, jobTitle, offices.officeCode, city, country
FROM employees JOIN offices
     ON employees.officeCode = offices.officeCode
WHERE offices.officeCode > 2
ORDER BY offices.officeCode DESC;

SELECT firstName, lastName, jobTitle, city, country
FROM employees JOIN offices
     ON employees.officeCode = offices.officeCode
WHERE offices.officeCode > 2
ORDER BY offices.officeCode DESC;

-- USE ALIASES for the table names:
SELECT firstName, lastName, jobTitle, o.officeCode, city, country
FROM employees e JOIN offices o
     ON e.officeCode = o.officeCode
WHERE o.officeCode > 2
ORDER BY o.officeCode DESC;