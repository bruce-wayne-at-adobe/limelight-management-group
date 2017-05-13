var pg = require('pg').native
const pgp = require('pg-promise')();
if(process.env.NODE_ENV === 'production'){
  pgp.pg.defaults.ssl = true;
  pg.connect(process.env.heroku_postgresql_jade_URL, function (err, conn, done) {
    
const db = pgp(connectionString)
})
}

const connectionString = 'postgres://localhost:5432/waynes_world' || process.env.heroku_postgresql_jade_URL;
 
const db = pgp(connectionString);


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
  edited(id, post) {
    return db.any('UPDATE blogs SET post=$1 WHERE id = $2 RETURNING post', [post.title, post.id]);
  },
  getOnepost(id) {
    return db.one('SELECT * FROM blogs WHERE id = $1', [id]);
  },
};

module.exports = queries;
