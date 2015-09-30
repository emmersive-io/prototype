if (ServiceConfiguration.configurations.find({
    service: 'facebook'
  }).count() === 0) {
  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '892346210856852',
    secret: 'a9a32bbea86eba8e3a7db2e0a3efe625',
    loginStyle: 'popup'
  });
}
