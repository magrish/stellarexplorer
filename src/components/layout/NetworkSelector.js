import React from 'react'
import {networks} from '../../lib/stellar'

const NetworkButton = ({network, selectedNetwork, switcher}) =>
  <button
    className={network === selectedNetwork ? 'is-active' : 'is-inactive'}
    onClick={e => switcher(network)}
  >
    {network.toUpperCase()}
  </button>

const NetworkSelector = props =>
  <div className="Network-Selector">
    {[networks.public, networks.test].map(network =>
      <NetworkButton
        key={network}
        hide={networks[network].hide}
        network={network}
        selectedNetwork={props.network}
        switcher={props.switcher}
      />
    )}
  </div>

export default NetworkSelector
