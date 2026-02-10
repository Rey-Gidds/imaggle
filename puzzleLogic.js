// Declarations


let table = document.getElementById('puzzleGrid')
let placed = 0
let rightPlaced = 0
let placedArea = document.getElementById('placed')
let rightPlacedArea = document.getElementById('rightPlaced')
let selectedImage = document.querySelector('.selectedImage')
let resetBtn = document.querySelector('.resetBtn');
let userChoice = null;
let value = undefined;
seenClicksInGrid = [];
let index = localStorage.getItem('index')
Main(index)
function Main(index){
    let puzzleImages = document.querySelector('.puzzleImages')
    for(let i = 8 ; i>=0 ; i--){
        if(i%2 == 0)
                continue
        let imagePiece = document.createElement('button')
        imagePiece.className = 'choiceBtn'
        imagePiece.setAttribute('data-index' , i)
        imagePiece.innerHTML = `<img src='image${index}/0${i}.jpg'>`
        puzzleImages.appendChild(imagePiece)
    }
    for(let i = 8 ; i>=0 ; i--){
        if(i%2 != 0)
                continue
        let imagePiece = document.createElement('button')
        imagePiece.className = 'choiceBtn'
        imagePiece.setAttribute('data-index' , i)
        imagePiece.innerHTML = `<img src='image${index}/0${i}.jpg'>`
        puzzleImages.appendChild(imagePiece)
    }
    const images = [
        `image${index}/00.jpg`, 
        `image${index}/01.jpg`,
        `image${index}/02.jpg`,
        `image${index}/03.jpg`,
        `image${index}/04.jpg`,
        `image${index}/05.jpg`,
        `image${index}/06.jpg`,
        `image${index}/07.jpg`,
        `image${index}/08.jpg`
    ]
    resetBtn.addEventListener('click' , function (){
        selectedImage.innerHTML = " ";
        userChoice = null;
        return;
    })
    
    
    // Function to select the image from the selection area
    // Attaches an event listener to each of the selection buttons to check the index of the button clicked and crossCheck it with the grid Button clicked to update the scores.
    
    
    
    document.querySelectorAll('.choiceBtn').forEach((button) => {
        button.addEventListener('click' ,function(){
            const Val = button.getAttribute('data-index')
            userChoice = Val
            selectedImage.innerHTML = `<img src=${images[Val]} alt="selected Image">`
        })
    })
    
    
    // function to get the value of each button and evaluate whether the image placed is correct
    // or not !
    // Attaches event listener to all of the buttons in grid to evaluate the index of the button clicked
    
    
    
    document.querySelectorAll('.gridBtn').forEach((button) => {
        button.addEventListener('click' , function (){
            let tempVar;
            value = button.getAttribute('data-index')
            if(userChoice == null){
                document.querySelector('.alertArea').textContent = "* Please select an image first from the selection area.";
            }
            else{
                document.querySelector('.alertArea').textContent = " ";
            }
            if(seenClicksInGrid.includes(value)){
                let last_i = seenClicksInGrid.length - 1
                let i = seenClicksInGrid.indexOf(value)
    
                // Move the desired element to the last to pop from the seenClicks array.
    
                tempVar = seenClicksInGrid[last_i]
                seenClicksInGrid[last_i] = seenClicksInGrid[i]
                seenClicksInGrid[i] = tempVar
    
                // Remove the last element after swapping or shifting the dedired element to remove to the last index.
    
                seenClicksInGrid.pop();
                button.innerHTML = ""
                dataPlaced = button.getAttribute('data-placed')
                decrementScore(dataPlaced , value)
                button.setAttribute('data-placed' , "") 
    
                // On reclicking the image it removes the data placed attribute value so that new image or that same image can be stored in placed data value.
                
            }
            else{
    
                // Add the click to the seen clicks and add the image to the button for preview
    
                if(userChoice == null)
                    return;
                seenClicksInGrid.push(value);
                button.innerHTML = `<img src=${images[userChoice]} class="imagePlaced" >`
                button.setAttribute('data-placed' , userChoice) 
                
                // sets the index of the image placed in the grid sort of remembers the image placed in the grid apart from the any choice of image the user has selected.
    
                validate(userChoice , value)
            }
        })
    })
}
function validate(userChoice , value){
    
    if(userChoice == value){
        placed++
        rightPlaced++
    }
    else{
        placed++
    }
    if(rightPlaced == 9){
        alert("Yay ! Puzzle Completed , Do check out other puzzles , lastly HAPPY PLAY !!! ;)")
    }
    placedArea.textContent = placed
    rightPlacedArea.textContent = rightPlaced
    return
}

function decrementScore(dataPlaced , value){
    if(dataPlaced == value){ 

        // If the data placed that is the image inside the grid cell is the correct one then decrement placed and right Placed too.

        rightPlaced--
        placed--
    }
    else{

        // Else only decrement the placed value.
        
        placed--
    }
    placedArea.textContent = placed
    rightPlacedArea.textContent = rightPlaced
    return
}