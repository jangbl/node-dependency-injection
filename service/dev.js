/* eslint-disable class-methods-use-this */
class DevService {
  constructor({ devDao }) {
    this.devDao = devDao;
  }

  getDev(id) {
    return this.devDao.getDev(id);
  }

  createDev({ email, firstName, middleNames, lastName }) {
    // John Smith  Alexander Johnson
    const { fName, mNames, lName } = this.sanitizeNames(
      firstName,
      middleNames,
      lastName
    );

    return this.devDao.createDev(email, fName, mNames, lName);
  }

  sanitizeNames(firstName, middleNameStr, lastName) {
    // eslint-disable-next-line prefer-const
    let [sanitizedFirstName, ...mNames] = firstName.trim().split(' ');
    if (middleNameStr) {
      mNames = mNames.concat(middleNameStr.split(' '));
    }

    const sanitizedMiddleNames = mNames.filter((n) => n);
    // console.log('sanitizedMiddleNames', sanitizedMiddleNames);

    // in case we do not have any middlenames
    // we want to return null and not empty string
    // for the middle name
    const sanitizedMiddleName = sanitizedMiddleNames.length
      ? sanitizedMiddleNames.join(' ')
      : null;
    const sanitizedLastName = lastName.trim();

    return {
      fName: sanitizedFirstName,
      mNames: sanitizedMiddleName,
      lName: sanitizedLastName,
    };
  }
}

module.exports = DevService;
