const uri  = 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=69060000'

let h = new Headers();
//h.append('Accept', 'application/json');
h.append('X-VTEX-API-AppKey', 'vtexappkey-carrefourbr-PZLYPS');
h.append("X-VTEX-API-AppToken", "UTARJONVBFAYJEOZGNAUZIRIFLMBNUVOOLWNTLIORNRCMGSIVEQFCTNNYOXYGHPUYEVLDHUVPKUHHBDOZPBKMOKGRITGDBXVQBDESIDQJWDANEZSIQVGSCZVEVPLCJVC");
//h.append("Cookie", "_abck=2BA5E30FE5EC33C3F813E206FDC1590D~-1~YAAQar0QAt+47faAAQAAzwCjNggP6BXMeyFyzITmpRNHdcOmRpG5rXjNhHaEW8hLtiKlbQfiQTWXcu/98hUN0y47xGszA77ge61xEniGNFMPMNdVYEnXqgpbhRFYK+94CT7BD7qxo03jvUfzVA3OPesOsdTTnuCD4tC3cmm7NainNFnSuZ6xpMc64DY80aGpVhdyKi57XhPxFnGvHLihSBDQtt883hin+mUZb3yqiVTwFIEroUb4lO5VKKX3bB02PvU7wDyJk7l54mYfsjMK31openR9ODwB1kl5deNABdlL0Ff5lS49ZIDMKf+P+3MaTarN+M1BklzBWGHEXCMD+8hjLAxalJ2ie6AxdnJYpD9xXQsgM0/c6tfklFZKAn25Q8Z6iTwFcOHV7LBrJw==~-1~-1~-1; ak_bmsc=687EBA4F6DEB354A58690E5AAF7BCCB5~000000000000000000000000000000~YAAQar0QApER6vaAAQAAy55nNhDdWJBOJVHPQlNR3oBA6HWPHUG2aTxMQPB8SoiCyOnh/ty2sD7E4pRuBxgcGZ37jAsS08JFsSIQB67JmF2mDvZn90IZhvPhhaQGtl7iH1+SUCUxt/wdImoXveqWPDQZkEhGjgx4c6IHMRlrf/k4y9H1UWI6vK8Y/JN9bLrb7P75P30muQTErd5SfvByR70JEFPx0vlRHX/4N/MdUejRDbx9eiPzyOg2853Xklg2Crf/TlDmGOnGOsHqm70zM7Djf84yC/H2kKKu8H+PVcm2ThQXuAtjc7m7eNuULLFOJNLwFy0YrVi9Jp/0CmUANpBU4h5X5WGBlTQJhJUDUpFo6RdzYNDxeIjnTIf/3iXcjVk=; bm_sv=C0D7478355EB1BCA8DBEE56A73B6D2B3~YAAQar0QArnL7faAAQAAZyOkNhBEBQNVYS764C+ttDP45PZEpH66URJLznq8UC+OsJRZcKzR0NyDCjHDSNvvY9MgpFvuZhQFmowbAEDB0I4mB36td257ztTJz/IbXmayPbSrY38/ueT7SL5d5ireTkbG3TRBZsnk0ReI8UNq/rwF1VjO7vk4fY6wKfDo4HGHr0Zzqy/fPvYajMiWM3lCsnfdjJVY1SmBZAIJcm4Q0jWaJ5z8Ga0hrPZwJs0PvM8FpTvi79aT~1; bm_sz=6D91BA6D2151BBF68101DE354C3061A0~YAAQar0QAuG47faAAQAAzwCjNhCObeqWlUxPJYjVBsmBGMhVCekkFukwwyn4RBpSFRn6ICVJnDXxQ/Af83uMFZM5pC5aKCO9FLrMsCdQXrdxYUbQlXhfZ6Li9hWGQwdLQfoUNES/hRrISyf0iAfTfpguCFAoBlK3J8IAQbindCMYABnP8bKKu4yFKr6pWtlC5cr/xAaP6qzdOvnyMU+l62ePFU85W29PkryAAkhaTQSBXm09kn3QkU/d1RSmSxd7wHr6BsL4ZBpozXFJMulFG8m+I8MWTeOMlkgVMkhDSdyV6Z12wDGsmfY=~4470582~4604741");


let req = new Request (uri, {
    method:'GET',
    headers: h,
    credentials: 'include',
    redirect: 'follow',
    //mode: 'basic'

});


fetch(req)
    .then ( (response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error('Bad HTTP');
        }

    })
    .then( (jsonData) => {
        console.log(jsonData);

    })
    .catch ((err) => {
        console.log('Error', err.message);
    })


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

