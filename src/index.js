// create variables
const barsContainer = document.getElementById('barsContainer')
const newArrayBtn = document.getElementById('newArrayBtn')
const bubbleSortBtn = document.getElementById('bubbleSortBtn')
const selectionSortBtn = document.getElementById('selectionSortBtn')
const insertionSortBtn = document.getElementById('insertionSortBtn')
const quickSortBtn = document.getElementById('quickSortBtn')
const mergeSortBtn = document.getElementById('mergeSortBtn')
const sizeBar = document.getElementById('size');
const speedBar = document.getElementById('speed');

// newArr function for create new bars and remove old bars
const newArr = () => {
    const noOfBars = parseInt(sizeBar.value);
    barsContainer.innerHTML = '';
    width = 7 * parseInt(70/noOfBars);
    for(let i=0; i<noOfBars; i++){
        n = Math.floor(Math.random() * (500 - 10 + 1) ) + 10;
        const bar = document.createElement('div')
        bar.classList.add('bar')
        bar.style.height = n + "px"
        bar.style.width = width + 'px'
        barsContainer.appendChild(bar)
    }
    enabled();
}
// Handle newArrayBtn and sizeBar
newArrayBtn.addEventListener('click',newArr)
sizeBar.addEventListener('change',newArr);

// swap function
const swap = (e1,e2) => {
    temp = e1.style.height
    e1.style.height = e2.style.height
    e2.style.height = temp
}

// sleep funtion using Promise and setTimeout
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Handle speedBar change
let speed=1000;
speedBar.addEventListener('change',()=>{
    speed = speedBar.value;
})

// all button disabled function
const disabled = ()=>{
    bubbleSortBtn.disabled = true
    selectionSortBtn.disabled = true
    // insertionSortBtn.disabled = true
    // quickSortBtn.disabled = true
    // mergeSortBtn.disabled = true
}

// all button enabled functon 
const enabled = ()=>{
    bubbleSortBtn.disabled = false
    selectionSortBtn.disabled = false
    // insertionSortBtn.disabled = false
    // quickSortBtn.disabled = false
    // mergeSortBtn.disabled = false
}

// Bubble Sort function
const bubbleSort = async () => {
    disabled()
    const noOfBars = sizeBar.value; 
    // create Array of all the bars
    const arr = Array.from(barsContainer.querySelectorAll('.bar'));

    for(let i=0; i<noOfBars; i++){
        for(let j=0; j<noOfBars-i-1; j++){
            curr = arr[j]
            next = arr[j+1]
            curr.style.backgroundColor = 'red';
            next.style.backgroundColor = 'red';
            if(curr.clientHeight > next.clientHeight){
                await sleep(3000-speed);
                swap(curr,next);
            }
            await sleep(3000-speed);
            curr.style.backgroundColor = 'yellow';
        }
        arr[noOfBars-1-i].style.backgroundColor = 'green';
    }
    await enabled()
}
bubbleSortBtn.addEventListener('click',bubbleSort);

// Selection Sort function
const selectionSort = async () => {
    disabled()
    const noOfBars = sizeBar.value; 
    // create Array of all the bars
    const arr = Array.from(barsContainer.querySelectorAll('.bar'));

    for(let i=0; i<noOfBars; i++){
        min = i;
        arr[i].style.backgroundColor = 'blue';
        for(let j=i+1; j<noOfBars; j++){
            arr[j].style.backgroundColor = 'red';
            if(arr[min].clientHeight > arr[j].clientHeight){
                await sleep(3000-speed);
                if(min!=i){arr[min].style.backgroundColor = 'yellow';}
                min=j;
                arr[min].style.backgroundColor = 'cyan';
            }else {
                await sleep(3000-speed);
                arr[j].style.backgroundColor = 'yellow';
            }
                        
        }
        await sleep(3000-speed);
        swap(arr[i],arr[min]);
        arr[i].style.backgroundColor = 'green';
        if(min!=i){arr[min].style.backgroundColor = 'yellow'};
        await sleep(3000-speed);
    }
    await enabled()
}
selectionSortBtn.addEventListener('click',selectionSort);