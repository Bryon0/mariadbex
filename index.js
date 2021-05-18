const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: '127.0.0.1', 
     port: 3306,
     user:'root', 
     password: '20zosha',
     database: 'bookstore',
     connectionLimit: 5
});

async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT * FROM authors;");
	console.log(rows); //[ {val: 1}, meta: ... ]
	//const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	//console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
 

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

asyncFunction();