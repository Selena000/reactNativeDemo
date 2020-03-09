export function setCompanyList(data) {
  return {
      type: 'INIT_COMPANY_LIST',
      data
  }
}

export function setHomeList(data) {
  return {
    type: 'INIT_HOME_LIST',
    data
  }
}