let age=prompt('Enter your age:');
if(age!= null)
{
    document.write(`Your age is ${age}`);

}
else{
    document.write('Age field was blank');
}

let response=confirm('Are you sure you want to delete?')
if(response)
{
    document.write('Deleted');
}
else{
    document.write('Not deleted');
}

