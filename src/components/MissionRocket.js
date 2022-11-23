import * as React from "react"
import { format } from "date-fns/esm"
import { enUS } from "date-fns/esm/locale"
import { parseISO } from "date-fns"

class MissionRocket extends React.Component {
  constructor() {
    super()
    this.state = {
      details: null,
    }
  }

  render() {
    const {
      name,
      company,
      height,
      diameter,
      mass,
      first_flight,
      country,
      success_rate_pct,
      cost_per_launch,
      description,
    } = this.props.rocket
    const date = format(
      parseISO(this.props.rocket.first_flight),
      "dd MMMM yyyy",
      { locale: enUS }
    )

    return (
      <div className="MissionDetail">
        <h2 className="MissionDetail__title">Rocket</h2>
        <hr className="MissionDetail__hr" />
        <div className="MissionDetail__block-wrapper">
          <blockquote className="MissionDetail__block">
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">name: </span>
              <span className="MissionDetail__val">{name}</span>
            </div>
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">company: </span>
              <span className="MissionDetail__val">{company}</span>
            </div>
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">height: </span>
              <span className="MissionDetail__val">
                {height.meters}M / {height.feet}FT
              </span>
            </div>
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">diameter: </span>
              <span className="MissionDetail__val">
                {diameter.meters}M / {diameter.feet}FT
              </span>
            </div>
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">mass: </span>
              <span className="MissionDetail__val">
                {mass.kg}KG / {mass.lb}LB
              </span>
            </div>
          </blockquote>
          <blockquote className="MissionDetail__block">
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">first flight: </span>
              <span className="MissionDetail__val">{date}</span>
            </div>
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">country: </span>
              <span className="MissionDetail__val">{country}</span>
            </div>
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">success rate pct: </span>
              <span className="MissionDetail__val">{success_rate_pct}%</span>
            </div>
            <div className="MissionDetail__item">
              <span className="MissionDetail__key">cost per launch: </span>
              <span className="MissionDetail__val">${cost_per_launch}</span>
            </div>
          </blockquote>
        </div>
        <p className="MissionDetail__feed">{description}</p>
      </div>
    )
  }
}

export default MissionRocket
