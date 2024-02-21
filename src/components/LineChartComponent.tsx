import React from 'react';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {screenWidth} from '../../App';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import styles from '../style/styles';
import {LINE_CHART_FOR_RES} from '../constants';

const LineChartComponent = ({chartConfig}) => {
  const {data} = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>{LINE_CHART_FOR_RES}</Text>
      {data && (
        <LineChart
          data={{
            labels: data?.response_times?.day_wise?.map(
              (entry: {date: any}) => entry?.date,
            ),
            datasets: [
              {
                data: data?.response_times?.day_wise?.map(
                  (entry: {average_time: any}) => entry.average_time,
                ),
              },
            ],
          }}
          verticalLabelRotation={90}
          width={screenWidth - 20}
          height={600}
          bezier
          chartConfig={{...chartConfig, decimalPlaces: 2}}
          style={{borderRadius: 10}}
        />
      )}
    </View>
  );
};

export default LineChartComponent;
