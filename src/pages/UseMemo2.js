import { Fragment, useState, useEffect, useMemo } from "react";
import { isEmpty, camelCase, startCase, upperCase } from "lodash";

const formateBeersFcn = (beers) => {
  console.log("formateBeersFcn called");
  let newBeers = beers.map((beer) => {
    const { fermentation, mash_temp, twist } = beer.method;
    return {
      id: beer.id,
      name: beer.name,
      description: beer.description,
      tips: beer.brewers_tips,
      brewed: beer.first_brewed,
      methods: {
        fermentation: !isEmpty(fermentation?.temp)
          ? `${fermentation?.temp?.value} ${fermentation?.temp?.unit}`
          : "-",
        mash: !isEmpty(mash_temp?.temp)
          ? `${mash_temp?.temp?.value} ${mash_temp?.temp?.unit}`
          : "-",
        twist: !isEmpty(twist?.temp)
          ? `${twist?.temp?.value} ${twist?.temp?.unit}`
          : "-",
      },
      food_pairing: beer?.food_pairing?.length
        ? beer?.food_pairing.join(", ")
        : "-",
      others: {
        abv: beer?.abv ?? "-",
        ebc: beer?.ebc ?? "-",
        ph: beer?.ph ?? "-",
        srm: beer?.srm ?? "-",
        attenuation_level: beer?.attenuation_level ?? "-",
        boil_volume: !isEmpty(beer?.boil_volume)
          ? `${beer?.boil_volume?.value} ${beer?.boil_volume?.unit}`
          : null,
        volume: !isEmpty(beer?.volume)
          ? `${beer?.volume?.value} ${beer?.volume?.unit}`
          : null,
      },
    };
  });
  return newBeers;
};

const UseMemo2 = () => {
  const [beers, setBeers] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const getBeers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.log("error while calling API ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBeers();
  }, []);

  const formattedBeers = useMemo(() => formateBeersFcn(beers), [beers]);
  // const formattedBeers = formateBeersFcn(beers);

  return (
    <Fragment>
      <h1>React.useMemo</h1>
      <div>
        Counter: {count} &nbsp;
        <button onClick={() => setCount((curr) => curr + 1)}>+</button>
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Tips</td>
            <td>Brewed At</td>
            <td>Methods</td>
            <td>Food Pairing</td>
            <td>Others</td>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={7}>
                <div style={{ textAlign: "center" }}>Loading ....</div>
              </td>
            </tr>
          ) : 
            formattedBeers.map((beer, index) => (
              <tr key={beer.id}>
                <td>{beer.name}</td>
                <td>
                  <div className="ellipsis">{beer.description}</div>
                </td>
                <td>
                  <div className="ellipsis">{beer.tips}</div>
                </td>
                <td>{beer.brewed}</td>
                <td>
                  {Object.keys(beer.methods).map((method, idx) => (
                    <div key={idx}>{`${startCase(camelCase(method))}: ${
                      beer.methods[method]
                    }`}</div>
                  ))}
                </td>
                <td>{beer.food_pairing}</td>
                <td>
                  {Object.keys(beer.others).map((other, idx) => (
                    <div key={idx}>{`${upperCase(other.replace("_", " "))}: ${
                      beer.others[other]
                    }`}</div>
                  ))}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Fragment>
  );
};

export default UseMemo2;
