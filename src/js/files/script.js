// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', pageLoad)

function pageLoad() {
    const htmlTag = document.documentElement

    document.addEventListener('click', e => {

        const targetElement = e.target

        let openItem = document.querySelector('.header__item.open')

        if (!targetElement.closest('.header__item.open') && openItem) {
            document.querySelector('.header__item.open').classList.remove('open')
        }

        if(targetElement.closest('.header__item') && htmlTag.closest('.touch')) {


            if (openItem && !targetElement.closest('.header__item.open')) {
                openItem.classList.remove('open')
            }
            if (!targetElement.closest('.header__item.open')) {
                e.preventDefault()
            }

            targetElement.closest('.header__item').classList.add('open')
        }



    })

    const menu = document.querySelector('.header__list')
    if (menu) {
        menu.addEventListener('mouseover', menuHover)
    }

    function menuHover(event) {
        if (event.target.closest('.header__item') && event.target.closest('.header__item').querySelector('.header__sub-list')) {
            const menuItem = event.target.closest('.header__item')
            const cordsMenuItem = menuItem.getBoundingClientRect()

            if ((htmlTag.clientWidth - cordsMenuItem.right) > 450) {
                menuItem.querySelector('.header__sub-list').style.cssText = 'left: 0; right: auto;'
            } else {
                menuItem.querySelector('.header__sub-list').style.cssText = 'right: 0; left: auto;'
            }
        }
    }

}