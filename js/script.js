
/*=============================================
=            Tabs             =
=============================================*/

class TabSystem{
    constructor(tabIndex, tabContent) {
        this.tabIndex = tabIndex;
        this.tabContent = tabContent
        this.init();
    }

    init() {
        const tabsArray = Array.from(document.querySelectorAll(this.tabIndex));
        const arrayContent = Array.from(document.querySelectorAll(this.tabContent));

        /* Evento para pasarde tab en tab */
        tabsArray.forEach(tab => {

            tab.addEventListener('click', e => {

                //1. Recuperar numero de tab clickeado
                const classesSplit = e.target.attributes.class.nodeValue.split(' ');
                const tabNumber = classesSplit[1].split('-')[2];
        
                //2. Remover la clase componente 'active' del contenido actual y cualquiera que la tenga
                arrayContent.forEach(content => {
                    content.classList.remove('active');
                });
        
                tabsArray.forEach(indexTab => {
                    indexTab.classList.remove('active');
                })
        
                //3. Si existe un elemento correspondiente al tab clickeado existe añadir la clase active
                if(document.querySelector(`${this.tabContent}-${tabNumber}`)) {
                    e.target.classList.add('active');
                    document.querySelector(`${this.tabContent}-${tabNumber}`).classList.add('active'); 
                } else {
                    console.log(`error`);
                }
            });
        });
    }
}

const tabsOpcion2 = new TabSystem('.tab-item', '.tab-item-content');
const tabForm = new TabSystem('.tab-form', '.tab-form-content');

/*=====  End of Tabs   ======*/


/*=============================================
=            Form validations            =
=============================================*/


function validateFields(input) {

    if(input.value !== '') {
        return true;
    } else {
        return false;
    }
}
if(document.querySelectorAll('.validate')) {
    Array.from(document.querySelectorAll('.validate')).forEach(input => {
        input.addEventListener('focusout', e => {
            const isValid = validateFields(e.target);
            const element = e.target.parentNode.closest('.input-container').nextElementSibling.firstElementChild;
            if(isValid === true) {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        })
    });
}

if(document.querySelector('.form-tab')) {
    document.querySelector('.form-tab').addEventListener('submit', e => {
    
        e.preventDefault();
        let count = 0;
        const inputValid = Array.from(document.querySelectorAll('.validate'));
    
        inputValid.forEach(input => {
            if(validateFields(input)) {
                count++
            }
        });
    
        if(count === inputValid.length) {
            console.log('good');
            return true;
        } else {
            console.log('bad');
            return false;
        }
    
    });
}


/*=====  End of Form validations  ======*/



