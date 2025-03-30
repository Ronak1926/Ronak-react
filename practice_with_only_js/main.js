let counter = 0;

let  html = `
    <h1 class = 'js-display'>the value of the counter is ${counter}</h1>
    <button class='js-add-value' onClick = addValue()>Add Value</button>
    <br/>
    <button class='js-remove-value' onClick = removeValue()>Remove Value</button>
`;

document.querySelector('.js-container').innerHTML = html;

const addValue = () =>{
    ++counter;
    document.querySelector('.js-display').innerHTML = `the value of the counter is ${counter}`;
}
const removeValue = () => {
    --counter;
    document.querySelector('.js-display').innerHTML = `the value of the counter is ${counter}`;
}