import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityPropTypes,
} from 'react-native'

export const TouchableCell = React.memo(
  ({ value, children, renderChildren, CellComponent, ...otherProps }) => {
    console.log(`- TouchableCell: ${value}`)

    const Cell = CellComponent ? CellComponent : TouchableOpacity
    const content = renderChildren ? (
      renderChildren(value)
    ) : (
      <Text>{value}</Text>
    )

    return (
      <Cell style={defaultStyles.touchableCell} {...otherProps}>
        {content}
      </Cell>
    )
  }
)

TouchableCell.propTypes = {
  ...TouchableOpacityPropTypes,
  // style: ViewPropTypes.style,
  // textStyle: Text.propTypes.style,
  // width: PropTypes.number,
}

TouchableCell.defaultProps = {
  width: 1,
}

const defaultStyles = StyleSheet.create({
  touchableCell: {
    flex: 1,
    backgroundColor: 'turquoise',
    justifyContent: 'center',
  },
})
