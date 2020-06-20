/* eslint-disable class-methods-use-this */
const db = require('../db');

class DevDao {
  async createDev(email, firstName, middleNames, lastName) {
    const [id] = await db('developer')
      .insert({
        email,
        first_name: firstName,
        middle_names: middleNames,
        last_name: lastName,
      })
      .returning('id');
    return id;
  }

  async getDev(id) {
    try {
      const devs = await db.select('*').from('developer').where('id', id);
      return devs && devs.length >= 1 ? devs[0] : null;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = new DevDao();
