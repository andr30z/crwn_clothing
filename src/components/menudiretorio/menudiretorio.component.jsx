import React from 'react';
import { connect } from "react-redux";
import ItemMenu from "../item-menu/item-menu.component";
import { createStructuredSelector } from "reselect";
import {selectDiretorioSections} from '../../redux/diretorio/diretorio.selector';
import "./directory.styles.scss"
const MenuDiretorio = ({ sections }) => {

  return (
    <div className="menu-diretorio">
      {
        sections.map(({ id, ...outrasProps }) => (
          <ItemMenu key={id} {...outrasProps} />
        ))
      }
    </div>
  )
}


const mapStateToProps= createStructuredSelector({
  sections:selectDiretorioSections
}) 



export default connect(mapStateToProps)(MenuDiretorio);