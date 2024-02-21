import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {setAuthData} from '../redux/actions';
import { BAR_CHART, LINE_CHART } from '../constants';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://dev-xsrm2yaj0fy25qf.api.raw-labs.com/ai-data',
      );
      const jsonData = response.data;
      if (Object.keys(jsonData).length !== 0) {
        dispatch(setAuthData(jsonData));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [selectedChart, setSelectedChart] = useState('bar');
  const chartConfig = {
    backgroundColor: '#39CD8F',
    backgroundGradientFrom: '#009B61',
    backgroundGradientTo: '#39CD8F',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={BAR_CHART}
          onPress={() => setSelectedChart('bar')}
          color={selectedChart === 'bar' ? '#4CAF50' : '#101012'}
        />
        <Button
          title={LINE_CHART}
          onPress={() => setSelectedChart('line')}
          color={selectedChart === 'line' ? '#4CAF50' : '#101012'}
        />
      </View>

      <View style={styles.chartContainer}>
        {selectedChart === 'bar' && (
          <BarChartComponent chartConfig={chartConfig} />
        )}
        {selectedChart === 'line' && (
          <LineChartComponent chartConfig={chartConfig} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
