import { FamilyFamilia } from './FamilyFamilia';
import { FamilySubFamilia } from './FamilySubFamilia';

export const FamilyPage = () => {
    return (
        <div className='family_main'>

            <div className='family_header'>
                <div className='family_header-input'>
                    <input type='text' id='txtFamilyID' name="familyID" />
                </div>
                <p id='lblTitleFamily'>Familias / Sub-Familias</p>
            </div>

            <div className='family_familia'>
                <FamilyFamilia />
            </div>

            <div className='family_subFamilia'>
                <FamilySubFamilia />
            </div>

            <div className='family_icons'>
                <p>icons</p>
            </div>

        </div>
    )
}
