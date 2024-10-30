const menu = [
    {
        img: 'break.svg',
        name: 'breakfest'
    },



    {
        img: 'lunch.svg',
        name: 'lunch'
    },


    {
        img: 'dinner.svg',
        name: 'dinner'
    },


    {
        img: 'dessert.svg',
        name: 'dessert'
    },


    {
        img: 'quick.svg',
        name: 'quick bite!'
    },

]


//DOM
const menuEl = document.getElementById('menu')

menuEl.innerHTML = menu.map( m => {
    return `
        <div>
                <img src="../img/${m.img}" alt="">
                <h4>${m.name}</h4>
            </div>`
}).join(``)