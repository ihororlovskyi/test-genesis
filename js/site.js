$(document).ready(function () {
  function loadPageContent() {
    if(window.localStorage.login){
      $('#message').html('<i>Hello,</i> ' + window.localStorage.login);
      $('#btn-login').hide();
      $('#btn-logout').show();
    } else {
      $('#message').html('');
      $('#btn-login').show();
      $('#btn-logout').hide();
    }
  }

  $('#btn-login, #btn-close').on('click', function() {
    $('.blur-fx').toggleClass('modalOpen');
  });

  $('#btn-logout').on('click', function() {
    delete window.localStorage.login;
    loadPageContent();
  });

  $('#login-form').on('submit', function(e) {
    e.preventDefault();
    var login = $('#login').val();
    var loginRegex = /^[A-z '\-\d]+$/g;
    if(!loginRegex.test(login)){
      $('#login').parent().toggleClass('has-error');
      return;
    }
    var password = $('#password').val();
    var passwordRegex = /[^\s\\]/;
    if(!passwordRegex.test(password)){
      $('#password').parent().toggleClass('has-error');
      return;
    }
    window.localStorage.login = login;
    $('.blur-fx').toggleClass('modalOpen');
    loadPageContent();
  });

  loadPageContent();
});
