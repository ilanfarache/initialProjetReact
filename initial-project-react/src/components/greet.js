import React from 'react';

const greenProps = { name: "ilan" }

const Greet = (greenProps) => {


    return (
        <div>
            Hello {greenProps.name}
        </div>
    );
};

export default Greet;