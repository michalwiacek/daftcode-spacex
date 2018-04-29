import * as React from "react"
import PropTypes from "prop-types";
import {format, toUpper} from 'date-fns';
import { en } from 'date-fns/locale/en'

class MissionRocket extends React.Component {
  constructor() {
    super();
    this.state = {
      details: null
    }
  }
  
  render() {

    const { name, company, height, diameter, mass, first_flight, country, success_rate_pct, cost_per_launch, description} = this.props.rocket
    const date = format(this.props.rocket.first_flight, 'DD MMMM YYYY', {locale: en})

    return (
      <div className="MissionDetail">
      <h2 className="MissionDetail__title">Rocket</h2>
      <hr className="MissionDetail__hr"/>
        <ul>
      <li><p className="MissionDetail_key">name:</p><p className="MissionDetail_val">{name}</p></li>
      <li><p className="MissionDetail_key">company:</p><p className="MissionDetail_val">{company}</p></li>
      <li><p className="MissionDetail_key">height:</p><p className="MissionDetail_val">{height.meters}M / {height.feet}FT</p></li>
      <li><p className="MissionDetail_key">diameter:</p><p className="MissionDetail_val">{diameter.meters}M / {diameter.feet}FT</p></li>
      <li><p className="MissionDetail_key">mass:</p><p className="MissionDetail_val">{mass.kg}KG / {mass.lb}LB</p></li>
        </ul>
        <ul>
      <li><p className="MissionDetail_key">first flight:</p><p className="MissionDetail_val">{date}</p></li>
      <li><p className="MissionDetail_key">country:</p><p className="MissionDetail_val">{country}</p></li>
      <li><p className="MissionDetail_key">success rate pct:</p><p className="MissionDetail_val">{success_rate_pct}%</p></li>
      <li><p className="MissionDetail_key">cost per launch:</p><p className="MissionDetail_val">${cost_per_launch}</p></li>
        </ul>
      <p className="MissionDetail__feed">{description}</p>
      </div>
    );
  }
}

export default MissionRocket