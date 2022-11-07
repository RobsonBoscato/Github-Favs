// classe que contem a logica dos dados

class Favorites {
    root = document.querySelector('#app');
    tbody = this.root.querySelectorAll('table tbody')
    
}

export class FavoritesView extends Favorites {
    constructor(){
        super()

        this.update()
    }

    update() {
    this.removeAllTr()
    this.createRow()

    }

    removeAllTr() {
        this.tbody.forEach((tr) => {tr.remove()})
    }

    createRow() {
        const tr = document.createElement('tr')
        
        tr.innerHTML = `
        <tr>
            <td>
                <img 
                src="https://github.com/robsonboscato.png">
                    <div id="container">
                        <p>robsonboscato</p>
                        <span>Robson Boscato</span>
                    </div>
            </td>

            <td>12</td>
            <td>54</td>
            <td><button>Remover</button></td>
            
        </tr>`

        return tr

    }
}

//classe que possui a interface e estuturação