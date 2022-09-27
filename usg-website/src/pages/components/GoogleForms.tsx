import React from 'react'

interface Source {
    url: string;
}

function GoogleForms(source: Source) {
    return (
        <iframe title="Google Forms embed" src={source.url} width="640" height="595" frameBorder="0" marginHeight={0} marginWidth={0} className="my-12 mx-6">
            Wird geladen…
        </iframe>
    )
}

export default GoogleForms