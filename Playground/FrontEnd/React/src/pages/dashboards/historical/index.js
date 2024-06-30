import * as React from 'react';
import PropTypes from 'prop-types';

import { 
  Box, 
  Grid, 
  Tab, 
  Tabs,
  Typography 
} from '@mui/material';

import EnhancedTablePeriodical from './EnhancedTablePeriodical';
import EnhancedTableDaily from './EnhancedTableDaily';
import EnhancedTableAnomaly from './EnhancedTableAnomaly';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - HISTORICAL ||============================== //

function createDataPeriodical(id, 
  line_id, 
  process_id, 
  photo_step, 
  suspicious_step,
  num_wafer, 
  modality_type, 
  num_modality, 
  incoming_index) {
  return {
    id,
    line_id,
    process_id,
    photo_step,
    suspicious_step,
    num_wafer,
    modality_type,
    num_modality,
    incoming_index
  };
}

function createDataDaily(id, 
  line_id, 
  process_id, 
  lot_id,
  photo_step, 
  suspicious_step,
  num_wafer, 
  modality_type, 
  incoming_index) {
  return {
    id,
    line_id,
    process_id,
    lot_id,
    photo_step,
    suspicious_step,
    num_wafer,
    modality_type,
    incoming_index
  };
}

function createDataAnomaly(id, 
  line_id, 
  process_id, 
  lot_id,
  photo_step, 
  suspicious_step,
  modality_type, 
  shape_index, 
  incoming_index) {
  return {
    id,
    line_id,
    process_id,
    lot_id,
    photo_step,
    suspicious_step,
    modality_type,
    shape_index,
    incoming_index
  };
}

const tablePropsListPeriodical = [
  {
    tableTitle: '2023/12/01 ~ 2024/01/01',
    rows: [
      createDataPeriodical(1, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1000, "CHAMBER", 4, 0.89),
      createDataPeriodical(2, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 800, "EQUIP", 2, 0.72),
      createDataPeriodical(3, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 900, "CHAMBER", 10, 0.88),
      createDataPeriodical(4, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 750, "EQUIP", 2, 0.74),
      createDataPeriodical(5, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 600, "CHAMBER", 4, 0.85),
      createDataPeriodical(6, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 400, "EQUIP", 4, 0.75),
      createDataPeriodical(7, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1200, "CHAMBER", 6, 0.86),
      createDataPeriodical(8, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1100, "EQUIP", 3, 0.78),
      createDataPeriodical(9, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 850, "CHAMBER", 2, 0.86),
      createDataPeriodical(10, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1050, "EQUIP", 1, 0.79),
      createDataPeriodical(11, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1150, "CHAMBER", 12, 0.87),
      createDataPeriodical(12, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1000, "EQUIP", 4, 0.71),
    ],
  },
  {
    tableTitle: '2023/11/01 ~ 2023/12/01',
    rows: [
      createDataPeriodical(1, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1000, "CHAMBER", 4, 0.89),
      createDataPeriodical(2, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 800, "EQUIP", 2, 0.72),
      createDataPeriodical(3, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 900, "CHAMBER", 10, 0.88),
      createDataPeriodical(4, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 750, "EQUIP", 2, 0.74),
      createDataPeriodical(5, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 600, "CHAMBER", 4, 0.85),
      createDataPeriodical(6, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 400, "EQUIP", 4, 0.75),
      createDataPeriodical(7, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1200, "CHAMBER", 6, 0.86),
      createDataPeriodical(8, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1100, "EQUIP", 3, 0.78),
      createDataPeriodical(9, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 850, "CHAMBER", 2, 0.86),
      createDataPeriodical(10, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1050, "EQUIP", 1, 0.79),
      createDataPeriodical(11, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1150, "CHAMBER", 12, 0.87),
      createDataPeriodical(12, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1000, "EQUIP", 4, 0.71),
    ],
  },
  {
    tableTitle: '2023/10/01 ~ 2023/11/01',
    rows: [
      createDataPeriodical(1, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1000, "CHAMBER", 4, 0.89),
      createDataPeriodical(2, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 800, "EQUIP", 2, 0.72),
      createDataPeriodical(3, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 900, "CHAMBER", 10, 0.88),
      createDataPeriodical(4, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 750, "EQUIP", 2, 0.74),
      createDataPeriodical(5, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 600, "CHAMBER", 4, 0.85),
      createDataPeriodical(6, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 400, "EQUIP", 4, 0.75),
      createDataPeriodical(7, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1200, "CHAMBER", 6, 0.86),
      createDataPeriodical(8, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1100, "EQUIP", 3, 0.78),
      createDataPeriodical(9, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 850, "CHAMBER", 2, 0.86),
      createDataPeriodical(10, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1050, "EQUIP", 1, 0.79),
      createDataPeriodical(11, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1150, "CHAMBER", 12, 0.87),
      createDataPeriodical(12, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1000, "EQUIP", 4, 0.71),
    ],
  },
];

const tablePropsListDaily = [
  {
    tableTitle: '2024/01/01',
    rows: [
      createDataDaily(1, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1000, "CHAMBER", 0.89),
      createDataDaily(2, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 800, "EQUIP", 0.72),
      createDataDaily(3, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 900, "PPID", 0.88),
      createDataDaily(4, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 750, "EQUIP", 0.74),
      createDataDaily(5, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 600, "CHAMBER", 0.85),
      createDataDaily(6, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 400, "PPID", 0.75),
      createDataDaily(7, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1200, "CHAMBER", 0.86),
      createDataDaily(8, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1100, "EQUIP", 0.78),
      createDataDaily(9, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 850, "CHAMBER", 0.86),
      createDataDaily(10, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1050, "EQUIP", 0.79),
      createDataDaily(11, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1150, "CHAMBER", 0.87),
      createDataDaily(12, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1000, "EQUIP", 0.71),
    ],
  },
  {
    tableTitle: '2023/12/31',
    rows: [
      createDataDaily(1, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1000, "CHAMBER", 0.89),
      createDataDaily(2, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 800, "EQUIP", 0.72),
      createDataDaily(3, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 900, "CHAMBER", 0.88),
      createDataDaily(4, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 750, "EQUIP", 0.74),
      createDataDaily(5, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 600, "CHAMBER", 0.85),
      createDataDaily(6, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 400, "EQUIP", 0.75),
      createDataDaily(7, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1200, "CHAMBER", 0.86),
      createDataDaily(8, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1100, "EQUIP", 0.78),
      createDataDaily(9, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 850, "CHAMBER", 0.86),
      createDataDaily(10, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1050, "EQUIP", 0.79),
      createDataDaily(11, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1150, "CHAMBER", 0.87),
      createDataDaily(12, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1000, "EQUIP", 0.71),
    ],
  },
  {
    tableTitle: '2023/12/30',
    rows: [
      createDataDaily(1, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1000, "CHAMBER", 0.89),
      createDataDaily(2, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 800, "EQUIP", 0.72),
      createDataDaily(3, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 900, "CHAMBER", 0.88),
      createDataDaily(4, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 750, "EQUIP", 0.74),
      createDataDaily(5, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 600, "CHAMBER", 0.85),
      createDataDaily(6, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 400, "EQUIP", 0.75),
      createDataDaily(7, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1200, "CHAMBER", 0.86),
      createDataDaily(8, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1100, "EQUIP", 0.78),
      createDataDaily(9, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 850, "CHAMBER", 0.86),
      createDataDaily(10, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1050, "EQUIP", 0.79),
      createDataDaily(11, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', 1150, "CHAMBER", 0.87),
      createDataDaily(12, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', 1000, "EQUIP", 0.71),
    ],
  },
];

const tablePropsListAnomaly = [
  {
    tableTitle: 'High D1',
    rows: [
      createDataAnomaly(1, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.89),
      createDataAnomaly(2, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.72),
      createDataAnomaly(3, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "PPID", 0.60, 0.88),
      createDataAnomaly(4, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.74),
      createDataAnomaly(5, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.85),
      createDataAnomaly(6, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "PPID", 0.60, 0.75),
      createDataAnomaly(7, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.86),
      createDataAnomaly(8, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.78),
      createDataAnomaly(9, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.86),
      createDataAnomaly(10, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.79),
      createDataAnomaly(11, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.87),
      createDataAnomaly(12, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.71),
    ],
  },
  {
    tableTitle: 'High D2',
    rows: [
      createDataAnomaly(1, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.89),
      createDataAnomaly(2, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.72),
      createDataAnomaly(3, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.88),
      createDataAnomaly(4, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.74),
      createDataAnomaly(5, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.85),
      createDataAnomaly(6, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.75),
      createDataAnomaly(7, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.86),
      createDataAnomaly(8, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.78),
      createDataAnomaly(9, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.86),
      createDataAnomaly(10, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.79),
      createDataAnomaly(11, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.87),
      createDataAnomaly(12, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.71),
    ],
  },
  {
    tableTitle: 'High Fountain',
    rows: [
      createDataAnomaly(1, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.89),
      createDataAnomaly(2, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.72),
      createDataAnomaly(3, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.88),
      createDataAnomaly(4, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.74),
      createDataAnomaly(5, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.85),
      createDataAnomaly(6, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.75),
      createDataAnomaly(7, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.86),
      createDataAnomaly(8, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.78),
      createDataAnomaly(9, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.86),
      createDataAnomaly(10, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.79),
      createDataAnomaly(11, 'AAAA', 'BBBB', 'DDDDD.1', 'CC010000', 'CC005000', "CHAMBER", 0.60, 0.87),
      createDataAnomaly(12, 'AAAA', 'BBBB', 'DDDDD.1', 'CC020000', 'CC015000', "EQUIP", 0.60, 0.71),
    ],
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Historical = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="basic tabs example">
            <Tab label="Daily" {...a11yProps(0)} />
            <Tab label="Periodical" {...a11yProps(1)} />
            <Tab label="Anomaly" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {tablePropsListDaily.map((tableProps) => {
            return (
              <MainCard sx={{ mt: 2 }} content={false} key={tableProps}>
                <EnhancedTableDaily tableTitle={tableProps.tableTitle} rows={tableProps.rows} />
              </MainCard>
            )
          })}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {tablePropsListPeriodical.map((tableProps) => {
            return (
              <MainCard sx={{ mt: 2 }} content={false} key={tableProps}>
                <EnhancedTablePeriodical tableTitle={tableProps.tableTitle} rows={tableProps.rows} />
              </MainCard>
            )
          })}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {tablePropsListAnomaly.map((tableProps) => {
            return (
              <MainCard sx={{ mt: 2 }} content={false} key={tableProps}>
                <EnhancedTableAnomaly tableTitle={tableProps.tableTitle} rows={tableProps.rows} />
              </MainCard>
            )
          })}
        </CustomTabPanel>
      </Box>
    </Grid>
  );
};

export default Historical;
