import "../../constants/searchCss.scss";
import BrewerySearchCity from '../Home/BrewerySearchCity';
import BrewerySearchName from '../Home/BrewerySearchName'

export default function Search(props) {
    const { radioClick} = props
    // const { searchBar, searchMethod, searchMethodName } = props.form
    const {searchMethod,searchMethodName} = props.form
    return (
        <>
            <div className="search">
                <h3>Search for breweries by {searchMethodName}:</h3>
                    <div className="search-radio-buttons">
                        <label name="searchMethod">
                            <input type="radio"
                                id="name"
                                name="searchMethod"
                                value="by_name"
                                checked={searchMethod === "by_name"}
                                onChange={radioClick} />
                            Brewery name
                        </label>

                        <label name="searchMethod">
                            <input type="radio"
                                id="city"
                                name="searchMethod"
                                value="by_city"
                                checked={searchMethod === "by_city"}
                                onChange={radioClick} />
                            City
                        </label>

                        <label name="searchMethod">
                            <input type="radio"
                                id="state"
                                name="searchMethod"
                                value="by_state"
                                checked={searchMethod === "by_state"}
                                onChange={radioClick} />
                            State
                        </label>

                        <label name="searchMethod">
                            <input type="radio"
                                id="post code"
                                name="searchMethod"
                                value="by_postal"
                                checked={searchMethod === "by_postal"}
                                onChange={radioClick} />
                            ZIP/Postal code
                        </label>

                        <label name="searchMethod">
                            <input type="radio"
                                id="country"
                                name="searchMethod"
                                value="by_country"
                                checked={searchMethod === "by_country"}
                                onChange={radioClick} />
                            Country
                        </label>
                    </div>
            </div>
            {/* Conditionally render BrewerySearch component based on searchMethod */}
            {searchMethod === 'by_city' && <BrewerySearchCity />}
            {searchMethod === 'by_name' && <BrewerySearchName />}
        </>
    )
}