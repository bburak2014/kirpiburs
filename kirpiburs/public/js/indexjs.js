//localStorage.setItem('bgcolor', 'red');
window.onload = function () {
  var AddToStudent = [];
  // const AddToStudentL  = localStorage.getItem("AddToStudentLS");
  // AddToStudent = ("AddtoCard: ", JSON.parse(AddToStudentL));
  function localClear() {
    localStorage.clear();
  }
  
  $(document).ready(function () {
    $(".lclstrg").click(function (event) {
      var x = document.forms["frm1"];

      for (let i = 0; i < 4; i++) {
        
        AddToStudent.push(`${x.elements[i].value}`);
        localStorage.setItem("AddToStudentLS", JSON.stringify(AddToStudent));
      }
    });

  });
};
