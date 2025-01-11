import styles from './styles.css';


const addDropDownMenu = (btnClassName, dropDownClassName) => {

    const btn = document.querySelector(`.${btnClassName}`);
    const dropdown = document.querySelector(`.${dropDownClassName}`);
    
    btn.addEventListener('click', () => {
        dropdown.classList.toggle('visible');
        dropdown.classList.toggle('hidden');
    });
}

addDropDownMenu('menuBtn', 'dropdown');