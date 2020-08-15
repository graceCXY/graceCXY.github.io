var input = document.getElementById("myFile");
// import FileReader;

function readFromFile(link) {
    var reader = new FileReader();
    reader.readAsText(link);
    let content = reader.result;
    reader.onload = function() {
        console.log(content);
    };
    return content;
    // reader.onload = function(){
    //     var dataURL = reader.result;
    //     var output = document.getElementById('myFile');
    //     output.innerHTML= dataURL;
    // };
}
console.log(readFromFile("posts/countingstars.txt"));
// input.addEventListener("change", function () {
//   if (this.files && this.files[0]) {
//     var myFile = this.files[0];
//     var reader = new FileReader();
    
//     reader.addEventListener('load', function (e) {
//       output.textContent = e.target.result;
//     });
    
//     reader.readAsBinaryString(myFile);
//   }
// });