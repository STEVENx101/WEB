function changeColorScheme(color) {
    document.body.style.backgroundColor = color;
    if (color === 'black') {
      document.body.style.color = 'white';
      document.getElementById('studentDetails').style.color = 'white';
     
    } else {
      document.body.style.color = 'black';
      document.getElementById('studentDetails').style.color = 'black';
      
    }
  }
  
          function increaseFontSize() {
              var currentSize = parseInt(
                  window.getComputedStyle(document.body, null).getPropertyValue('font-size')
              );
              document.body.style.fontSize = currentSize + 2 + 'px';
          }
  
          function decreaseFontSize() {
              var currentSize = parseInt(
                  window.getComputedStyle(document.body, null).getPropertyValue('font-size')
              );
              document.body.style.fontSize = currentSize - 2 + 'px';
          }
  
          function showEnlargedImage(src, title, description) {
              var enlargedImg = document.getElementById('enlargedImg');
              var enlargedTitle = document.getElementById('enlargedTitle');
              var enlargedDescription = document.getElementById('enlargedDescription');
  
              enlargedImg.src = src;
              enlargedTitle.textContent = title;
              enlargedDescription.textContent = description;
  
              document.getElementById('enlargedContainer').style.display = 'block';
          }
  
          function hideEnlargedImage() {
              document.getElementById('enlargedContainer').style.display = 'none';
          }

          function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function changeFontSize(size) {
            document.body.style.fontSize = size + 'px';
        }


        function showNextImageSet() {
            var currentImageSet = document.getElementById('imageSet1');
            var nextImageSet = document.getElementById('imageSet2');
        
            currentImageSet.style.display = 'none';
            nextImageSet.style.display = 'block';
        }
        function showPreviousImageSet() {
            var currentImageSet = document.getElementById('imageSet2');
            var nextImageSet = document.getElementById('imageSet1');
        
            currentImageSet.style.display = 'none';
            nextImageSet.style.display = 'block';
        }