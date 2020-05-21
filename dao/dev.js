class DevDao {
  constructor({ db }) {
    this.db = db;
  }

  async createDev(email, firstName) {
    return this.db('developer').insert({
      email,
      first_name: firstName,
    });
  }

  async getDev(id) {
    try {
      const devs = await this.db.select('*').from('developer').where('id', id);
      return devs && devs.length >= 1 ? devs[0] : null;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = DevDao;
