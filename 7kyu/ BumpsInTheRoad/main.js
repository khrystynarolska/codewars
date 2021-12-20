/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle 
about 15 more bumps before it dies totally.
Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") 
or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
*/


const bump = x => [...x].filter(n => n === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';

console.log(bump('nnn_____nn_n_nnnnn____n_nnn_nnnnn_______n___'));
console.log(bump('nnn_____nn_n_nnnnn______________n___'));