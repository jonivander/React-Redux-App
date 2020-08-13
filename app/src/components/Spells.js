import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSpells } from '../actions';

const Spells = props => {
    useEffect((props) => {
        props.fetchSpells();
    }, []);
    console.log(props); 
    return (
        <section>
            <h1>✨🔮 Standard Book of Spells 🔮✨</h1>
            {props.isFetching ? <h4>Conjuring spells...</h4> : null}
            {props.error ? (<p>Experiencing unforeseen magical interference...</p>) : null}
            {props.length > 0 ? (
                <div>
                    
                    {/* <h2 key={spells.spells_id}>{spells.spell}</h2> */}
                </div>
            ) : null }
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        spells: state.spells, 
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchSpells })(Spells);
