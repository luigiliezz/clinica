import Header from '../Header/index.js'


const Dropdown = ({submens, dropdown, deathlevel}) =>{
    deathlevel = deathlevel+1;
    const dropdownClass = deathlevel>1 ? "dropdown-submenu":"";

    return(
        <ul clasName={`dropdown${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submens.map((submenu, index)=>(
                <MenuItems items={submens} key= {index} deathlevel= {deathlevel} />

            ))
            }
        </ul>
    )

}

export default Dropdown;