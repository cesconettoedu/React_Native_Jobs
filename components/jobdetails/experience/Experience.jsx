import React from 'react'
import { View, Text } from 'react-native'

import styles from './experience.style'

const Experience = ({ info }) => {

  console.log(info);
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Experience for the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  )
}

export default Experience