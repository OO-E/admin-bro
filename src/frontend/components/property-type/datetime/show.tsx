import React, { ReactNode } from 'react'
import { ValueGroup } from '@admin-bro/design-system'

import mapValue from './map-value'
import { EditPropertyProps } from '../base-property-props'

export default class Show extends React.PureComponent<EditPropertyProps> {
  render(): ReactNode {
    const { property, record } = this.props
    const value = mapValue(record.params[property.name], property.type)

    return (
      <ValueGroup label={property.label}>
        {value}
      </ValueGroup>
    )
  }
}
