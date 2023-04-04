function gerarNumerosNaoContidos(min,max,array){
    const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
    return array.includes(aleatorio) ? gerarNumerosNaoContidos(min,max,array) : aleatorio
}

function gerarNumeros(qtd){
   const numeros = Array(qtd)
   .fill(0)
   .reduce((nums) =>{
        const novoNumero = gerarNumerosNaoContidos(1,60,nums)
        return ([...nums, novoNumero])
   },[])
   .sort((n1,n2) => (n1-n2))
   return numeros

}

console.log(gerarNumeros(7))



/* console.log(gerarNumerosNaoContidos(1,60,[0,0,0,0,0,0])) */