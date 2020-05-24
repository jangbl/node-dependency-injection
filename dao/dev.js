class DevDao {
  constructor({ db }) {
    this.db = db;
  }

  async createDev(email, firstName, middleNames, lastName) {
    return this.db('developer').insert({
      email,
      first_name: firstName,
      middle_names: middleNames,
      last_name: lastName,
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
