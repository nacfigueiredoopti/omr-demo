import { useFlag } from '../useFlag'

const STAGE_LABELS = {
  main_stage: 'Main Stage',
  red_stage: 'Red Stage',
  blue_stage: 'Blue Stage',
  masterclass_room: 'Masterclass Room',
}

export default function LivestreamBanner() {
  const { enabled, variables } = useFlag('stage_livestream', {
    default_quality: 'auto',
    adaptive_bitrate: true,
    stages_config: {
      main_stage: true,
      red_stage: true,
      blue_stage: false,
      masterclass_room: false,
    },
  })

  if (!enabled) return null

  let stages = variables.stages_config
  if (typeof stages === 'string') {
    try {
      stages = JSON.parse(stages)
    } catch {
      stages = {}
    }
  }
  const liveStages = Object.entries(stages || {})
    .filter(([, on]) => on)
    .map(([key]) => STAGE_LABELS[key] || key)

  return (
    <div className="livestream-banner">
      <div className="container livestream-inner">
        <span className="livestream-pulse" />
        <strong>Live now</strong>
        <span className="livestream-stages">
          {liveStages.length ? liveStages.join(' · ') : 'Stages standing by'}
        </span>
        <span className="livestream-quality">
          {String(variables.default_quality).toUpperCase()}
          {variables.adaptive_bitrate ? ' · Adaptive' : ''}
        </span>
        <button className="btn btn-accent">Watch →</button>
      </div>
    </div>
  )
}
