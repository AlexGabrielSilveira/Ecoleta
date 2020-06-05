const ufs = () => {
    var stateSelect = document.getElementById('state')

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
        .then(res => res.json() )  
        .then( states => {
            states.forEach( state => {
                stateSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            });
        })
        
    }
    ufs() ; 

    const lookCity = e => {
        const citySelect = document.getElementById("city")
        const cityUrl = e.target.value
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${cityUrl}/municipios`

        citySelect.innerHTML = ''

        fetch(url)
            .then(res => res.json())
            .then( cities => {
                cities.forEach( city => {
                    citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
                })
            })
        
    }
    document.getElementById('state').addEventListener('change', lookCity)

    const itensToCollect = document.querySelectorAll('.itens-grid li')

    const hidden = document.getElementById('hidden')

    var itensChoosed = []
   
    
    const handleItem = event => {
        const itemL = event.target
        itemL.classList.toggle("selected")
        
        const itemId = itemL.dataset.id

        const alreadySelected = itensChoosed.findIndex(item => {
            return item == itemId
        })
        if(alreadySelected >= 0) {
            const filter = itensChoosed.filter(item => {
                return item != itemId
            })
            itensChoosed = filter
        }else {
            itensChoosed.push(itemId)
        }

        hidden.value = itensChoosed
    }
    for(const item of itensToCollect) {
        item.addEventListener('click', handleItem)
    }
