$(document).ready(() => {
  console.log('ready');

  $('.submit-button').click((e) => {

    e.preventDefault();

    let obj = JSON.parse($('textarea:first').val());

    axios.post('/', obj )
      .then(res => $('.output').text(res.data) )
      .catch(err => console.log(err));
  });

});