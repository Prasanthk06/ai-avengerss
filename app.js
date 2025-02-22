import mysql from 'mysql2/promise';

const conn = await mysql.createConnection('mysql://root:Prashanth5319@localhost:3306/lms')
conn.connect();
const [result] = await conn.execute("SELECT * FROM student");
console.log(result);


