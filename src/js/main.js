console.log(fetch('https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=69060830', { mode: 'no-cors' }))    


/*
let el=document.getElementById('minha_caixa');//
let minha_modal = new bootstrap.Modal(el);
minha_modal.show();

const cep = document.querySelector("#cep")


// funcao para informar campo obrigatorio
const isValidFields = ()=>{
    return document.getElementById('formulario').reportValidity()
}



const consumo1 = async () => {

    let search = cep.value.replace("-","")

    console.log("Buscando CEP")


    const options = {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default'
    }


    try {
        const data = await fetch(`https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=69060830`, options)
        
        console.log(data.body)
        const json = await data.json()
        
        //const json = await data.json()
        
    } catch (error) {
        console.log('algum erro ocorreu')
    }
}
/*
const teste = ()=>{
    if (isValidFields()){     
        
    }
}*/

//document.getElementById('meu-btn')
//.addEventListener('click', consumo1)

/*
const showData = (result) =>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}*/

