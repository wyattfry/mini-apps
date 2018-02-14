$(document).ready(() => {
  console.log("ready");

  $(".submit-button").click(e => {
    e.preventDefault();

    let objToConvert = JSON.parse($(".JSONinput").val());

    let obj = {
      filter: $(".filterTerm").val(),
      data: objToConvert
    };
    axios
      .post("/", obj)
      .then(res => $(".CSVoutput").val(res.data))
      .catch(err => console.log(err));
  });
});
