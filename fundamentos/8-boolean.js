let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // vai verificar se o numero 1 é true ou false; !! = negação duas vezes

console.log("Os verdadeiros...");
console.log(!!3.579);
console.log(!!-1);
console.log(!!' ');
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!(''|| 0 || NaN || ' '));

let nome = '';
console.log(nome || 'desconhecido'); // Vai imprimir o primeiro verdadeiro 
nome = 'Lucas';
console.log(nome || 'desconhecido');
