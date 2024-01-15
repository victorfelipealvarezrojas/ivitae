import { HomeTemplate } from './ui/components/template/HomeTemplate'

import './container.css'

function ContainerApp() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <HomeTemplate />
    </div>
  )
}

export default ContainerApp