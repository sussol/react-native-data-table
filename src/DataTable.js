/**
 * mSupply Mobile
 * Sustainable Solutions (NZ) Ltd. 2019
 */

import PropTypes from 'prop-types'
import React from 'react'
import {
  StyleSheet,
  VirtualizedList,
  VirtualizedListPropTypes,
} from 'react-native'

export const DataTable = React.memo(({ renderRow, ...otherProps }) => (
  <VirtualizedList
    style={defaultStyles.virtualizedList}
    renderItem={renderRow}
    {...otherProps}
  />
))

DataTable.propTypes = {
  ...VirtualizedListPropTypes,
  renderHeader: PropTypes.func,
  renderRow: PropTypes.func.isRequired,
}
DataTable.defaultProps = {
  getItem: (items, index) => items[index],
  getItemCount: items => items.length,
}

const defaultStyles = StyleSheet.create({
  virtualizedList: {
    flex: 1,
  },
})
