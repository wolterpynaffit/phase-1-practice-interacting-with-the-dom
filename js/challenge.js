const commentInput = document.querySelector('#comment-input')
const commentForm  = document.querySelector("#comment-form")
const commentContainer = document.querySelector(".comments")
let counter = document.querySelector('#counter')
const plus  = document.querySelector("#plus")
const minus  = document.querySelector("#minus")
const heart = document.querySelector("#heart")
const likeContainer = document.querySelector(".likes")
const pause = document.querySelector("#pause")

// This will increment the counter 
function seconds(){
    // counter.textContent.replace(counter.value, newValue)

}
seconds()




// Plus and Minus buttons 
function plusMinus(){
    plus.addEventListener('click', (e)=> {
       counter.textContent  =  parseInt(counter.textContent) + 1
       
    })
    minus.addEventListener('click', (e)=> {
        counter.textContent  =  parseInt(counter.textContent) - 1
        if (counter.textContent  < 0) {
            counter.textContent = 0
        } 
     })
}

plusMinus()

// Heart event listener 
heart.addEventListener('click',() => {
   const newLike = document.createElement('li')
   newLike.textContent = counter.textContent
   likeContainer.append(newLike)
})


// Upon submit, this will add comments to the comment container
commentForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    const newP = document.createElement('p')
    newP.textContent =  commentInput.value
    commentContainer.append(newP)
})


let count = 0;

function incrementCounter() {
  count++;
  document.getElementById("counter").innerText = count;

  const pause = document.querySelector("#pause")
  pause.set
}

// Call the incrementCounter function every second using setInterval
const interval = setInterval(incrementCounter, 1000);


function pauseFunction (){
    pause.addEventListener('click', ()=> {
        console.log('clicked')
    // setTimeout(incrementCounter(), () => {
    //     })

    })
}

pauseFunction()





