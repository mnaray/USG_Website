import React from 'react'
import Membercard from './Membercard'
import MemberFoto from "../../logos/USG_Logo_Transparent_PNG.png";

function MembercardGrid() {
    return (
        <div className="flex flex-row">
            <Membercard
                mbr={MemberFoto}
                name="Nikknez"
                function="Mitglied"
                comment="Er ist toll"
            />
            <Membercard
                mbr={MemberFoto}
                name="Pseudonym"
                function="Mitglied"
                comment="Comment"
            />
            <Membercard
                mbr={MemberFoto}
                name="Pseudonym"
                function="Mitglied"
                comment="Comment"
            />
            <Membercard
                mbr={MemberFoto}
                name="Pseudonym"
                function="Mitglied"
                comment="Comment"
            />
        </div>
    )
}

export default MembercardGrid