document.getElementById('profilePic').addEventListener('change', function(event) {
    var reader = new FileReader();
    
    reader.onload = function() {
      var imgElement = document.getElementById('profilePicPreview');
      imgElement.src = reader.result;
    }
    
    reader.readAsDataURL(event.target.files[0]);
  });
  