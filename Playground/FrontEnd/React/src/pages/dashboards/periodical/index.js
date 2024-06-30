import { useState } from 'react';

// material-ui
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  MenuItem
} from '@mui/material';

// project import
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
// import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import AnalyticCard from './AnalyticCard';

import EnhancedTablePeriodical from 'components/tables/EnhancedTablePeriodical';

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

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

// ==============================|| DASHBOARD - PERIODICAL ||============================== //

const Periodical = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Periodical Analysis</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticCard title="Total Coupling Case" count="1,769" percentage="+ 152 Cases" color="primary" extra="Period: 2023/06/01 ~ 2024/01/01" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticCard title="Recent Coupling Case" count="152" percentage="+ 10 Cases" color="primary" extra="Period: 2023/12/01 ~ 2024/01/01" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticCard title="Max Difference Case" count="070000~065000" percentage="3 nm" color="warning" extra="AAAA | BBBB | DDDD" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticCard title="Max Period Case" count="070000~065000" percentage="84 Days" color="warning" extra="AAAA | BBBB | DDDD" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">[Recent - Module] Incoming Index</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Stack spacing={1.5} sx={{ mb: -12 }}>
            <Typography variant="h6" color="secondary">
              Number of Suspicious Steps
            </Typography>
            <Typography variant="h4">15</Typography>
          </Stack>
          <SalesColumnChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">[Recent - Step] Incoming Index</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
              Most Suspicious Step
              </Typography>
              <Typography variant="h3">CC005000</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">[Recent - Module] Incoming Index</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">[Recent - Step] Incoming Index</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                Most Suspicious Step
              </Typography>
              <Typography variant="h3">CC005000</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        {tablePropsListPeriodical.map((tableProps) => {
          return (
            <MainCard sx={{ mt: 2 }} content={false} key={tableProps}>
              <EnhancedTablePeriodical tableTitle={tableProps.tableTitle} rows={tableProps.rows} />
            </MainCard>
          )
        })}
      </Grid>
    </Grid>
  );
};

export default Periodical;
