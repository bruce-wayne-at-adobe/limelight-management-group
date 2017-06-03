const pgp = require('pg-promise')();
if(process.env.NODE_ENV === 'production'){
  pgp.pg.defaults.ssl = true;
}
const connectionString = process.env.DATABASE_URL

let dblocal = 'postgres://localhost:5432/waynes_world'
const db = pgp(connectionString || dblocal);


const queries = {
  getAll() {
    return db.any('SELECT * FROM blogs');
  },
  create(post) {
    console.log('this is the POST', post)
    console.log(connectionString)
    console.log(process.env.NODE_ENV)
    return db.any(`
      INSERT INTO blogs(title, body, email, image, location) 
      VALUES($1, $2, $3, $4, $5) RETURNING *
    `, [post.title, post.body, post.email, post.image, post.location])
  },
  delete(id) {
    return db.none('DELETE from blogs WHERE id = $1', [id]);
  },
  edited(body, title, id, location, email) {
    console.log('this is the value of blog, before the query: ', body)
    const blogcon = db.any('UPDATE blogs SET body=$1, title=$2, location=$3, email=$4 WHERE id = $5 RETURNING *', [body, title, id, location, email]);
    console.log('this is the result of the query: ', blogcon)
    return blogcon
  },
  getOnepost(id) {
    return db.one('SELECT * FROM blogs WHERE id = $1', [id]);
  },
};

module.exports = queries;
