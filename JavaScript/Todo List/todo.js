let input = prompt("What would you like to do?")
const todos = ['Collect Eggs', 'OPpen thge vabinaet'];
while (input !== 'quit' && input !== 'q') {
    if (input.toLowerCase() === 'list') {
        console.log("**************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}: ${todos[i]}`)
        }
        console.log("**************");
    } else if (input.toLowerCase() === 'new') {
        const newToDo = prompt("OK, what do u wanna do?");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list`);
    }
    else if (input.toLowerCase() === 'delete') {
        const index = parseInt(prompt("OK, eneter the index u wanna delete"));
        if (Number.isNaN(index)) {
            const newDelete = prompt('Not a valid item index, try again');
        } else {
        const deleted = todos.splice(index - 1, 1);
        console.log(`${deleted[0]} removed from list.`);
    }
    }
    input = prompt("What would you like to do?")
}

console.log("Application quit")