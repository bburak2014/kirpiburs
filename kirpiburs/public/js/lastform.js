//localStorage.setItem('bgcolor', 'red');
window.onload = function () {
    var AddToStudent = [];
   const AddToStudentL  = localStorage.getItem("AddToStudentLS");
     AddToStudent = ("AddtoCard: ", JSON.parse(AddToStudentL));
    function localClear() {
      localStorage.clear();
    }
    
    $(document).ready(function () {
      
        var x = document.forms["frm1"];
  
        for (let i = 0; i < 20; i++) {
            x.elements[i].value=AddToStudent[i];
                        //console.log(AddToStudent[i]); 
          //localStorage.setItem("AddToStudentLS", JSON.stringify(AddToStudent));
        }
     
  
    });
  };
  