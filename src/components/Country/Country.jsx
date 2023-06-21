import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const { name, flags, population } = props.country;
    return (
        <div className="country">
            <h2>Name: {name.common}</h2>
            <img src={flags.svg} alt="" />
            <p><small>Population: {population}</small></p>
        </div>
    );
};

export default Country;