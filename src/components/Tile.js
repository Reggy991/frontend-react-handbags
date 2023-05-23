import React from 'react';

function Tile({children}) {
    return (
        <section className="tile">
            {children}
        </section>
    );
}

export default Tile;