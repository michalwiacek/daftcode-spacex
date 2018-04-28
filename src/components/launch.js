
const React = require('react');
const PropTypes = React.PropTypes;

PropTypes.shape({
  details: PropTypes.string,
  flight_number: PropTypes.number,
  launch_date_local: PropTypes.string,
  launch_date_unix: PropTypes.number,
  launch_date_utc: PropTypes.string,
  launch_site: PropTypes.shape({
    site_id: PropTypes.string,
    site_name: PropTypes.string,
    site_name_long: PropTypes.string
  }),
  launch_success: PropTypes.bool,
  launch_year: PropTypes.string,
  links: PropTypes.shape({
    article_link: PropTypes.string,
    mission_patch: PropTypes.string,
    mission_patch_small: PropTypes.string,
    presskit: PropTypes.string,
    reddit_campaign: PropTypes.string,
    reddit_launch: PropTypes.string,
    reddit_media: PropTypes.string,
    reddit_recovery: PropTypes.any,
    video_link: PropTypes.string
  }),
  reuse: PropTypes.shape({
    capsule: PropTypes.bool,
    core: PropTypes.bool,
    fairings: PropTypes.bool,
    side_core1: PropTypes.bool,
    side_core2: PropTypes.bool
  }),
  rocket: PropTypes.shape({
    first_stage: PropTypes.shape({
      cores: PropTypes.arrayOf(PropTypes.shape({
        block: PropTypes.number,
        core_serial: PropTypes.string,
        flight: PropTypes.number,
        land_success: PropTypes.bool,
        landing_type: PropTypes.string,
        landing_vehicle: PropTypes.string,
        reused: PropTypes.bool
      }))
    }),
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    rocket_type: PropTypes.string,
    second_stage: PropTypes.shape({
      payloads: PropTypes.arrayOf(PropTypes.shape({
        customers: PropTypes.arrayOf(PropTypes.string),
        orbit: PropTypes.string,
        payload_id: PropTypes.string,
        payload_mass_kg: PropTypes.number,
        payload_mass_lbs: PropTypes.number,
        payload_type: PropTypes.string,
        reused: PropTypes.bool
      }))
    })
  }),
  telemetry: PropTypes.shape({
    flight_club: PropTypes.string
  })
});