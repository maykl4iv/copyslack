Meteor.startup(function () {
  smtp = {
   username: 'maykl4iv',
    password: 'yz3INCCztEVpDZ2Nl3mMYA',
    server:   'smtp.mandrillapp.com',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
