const pgp = require('pg-promise')();
<<<<<<< HEAD
=======
if(process.env.NODE_ENV === 'production'){
  pgp.pg.defaults.ssl = true;
};
>>>>>>> 51c07c4cd752f356e153acb208f16fbb266bc2c0
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/waynes_world';
const db = pgp(connectionString);


const queries = {
  getAll() {
    return db.any('SELECT * FROM blogs');
  },
  create(post) {
    console.log('this is the POST', post)
    return db.any(`
      INSERT INTO blogs(title, body, email, image, location) 
      VALUES($1, $2, $3, $4, $5)
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
