import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {useSelector} from 'react-redux';
import {screenWidth} from '../../App';
import {RootState} from '../redux';
import styles from '../style/styles';
import {BAR_CHART_FOR_CAT} from '../constants';

const BarChartComponent = ({chartConfig}) => {
  const {data} = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>{BAR_CHART_FOR_CAT} </Text>
      {data && (
        <BarChart
          data={{
            labels: Object.keys(data?.category_distribution),
            datasets: [
              {
                data: Object.values(data?.category_distribution),
              },
            ],
          }}
          verticalLabelRotation={90}
          width={screenWidth - 20} // Adjust for margins and padding
          height={600}
          chartConfig={{...chartConfig, decimalPlaces: 0}}
          style={{borderRadius: 10}}
        />
      )}
    </View>
  );
};

export default BarChartComponent;
