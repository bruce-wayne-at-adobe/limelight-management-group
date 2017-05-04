const pgp = require('pg-promise')();

const connectionString = 'postgres://localhost:5432/waynes_world';
const db = pgp(connectionString);

const queries = {
  getAll() {
    return db.any('SELECT * FROM logs');
  },
  create(post) {
    return db.any(`
      INSERT INTO blogs(title, body, email, image, location) 
      VALUES($1, $2, $3, $4, $5)
    `, [post.title, post.body, post.email, post.image, post.location])
  },
  delete(id) {
    return db.none('DELETE from logs WHERE id = $1', [id]);
  },
  edited(id, post) {
    return db.any('UPDATE logs SET post=$1 WHERE id = $2 RETURNING post', [post, id]);
  },
  getOnepost(id) {
    return db.one('SELECT * FROM logs WHERE id = $1', [id]);
  },
};

module.exports = queries;
