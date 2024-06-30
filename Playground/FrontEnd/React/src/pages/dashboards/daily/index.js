import { Grid } from '@mui/material';

// project import
import EnhancedTable from './EnhancedTable';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

function createData(id, 
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

const tablePropsList = [
  {
    tableTitle: '2023/12/01 ~ 2024/01/01',
    rows: [
      createData(1, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1000, "CHAMBER", 4, 0.89),
      createData(2, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 800, "EQUIP", 2, 0.72),
      createData(3, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 900, "CHAMBER", 10, 0.88),
      createData(4, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 750, "EQUIP", 2, 0.74),
      createData(5, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 600, "CHAMBER", 4, 0.85),
      createData(6, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 400, "EQUIP", 4, 0.75),
      createData(7, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1200, "CHAMBER", 6, 0.86),
      createData(8, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1100, "EQUIP", 3, 0.78),
      createData(9, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 850, "CHAMBER", 2, 0.86),
      createData(10, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1050, "EQUIP", 1, 0.79),
      createData(11, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1150, "CHAMBER", 12, 0.87),
      createData(12, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1000, "EQUIP", 4, 0.71),
    ],
  },
  {
    tableTitle: '2023/11/01 ~ 2023/12/01',
    rows: [
      createData(1, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1000, "CHAMBER", 4, 0.89),
      createData(2, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 800, "EQUIP", 2, 0.72),
      createData(3, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 900, "CHAMBER", 10, 0.88),
      createData(4, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 750, "EQUIP", 2, 0.74),
      createData(5, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 600, "CHAMBER", 4, 0.85),
      createData(6, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 400, "EQUIP", 4, 0.75),
      createData(7, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1200, "CHAMBER", 6, 0.86),
      createData(8, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1100, "EQUIP", 3, 0.78),
      createData(9, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 850, "CHAMBER", 2, 0.86),
      createData(10, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1050, "EQUIP", 1, 0.79),
      createData(11, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1150, "CHAMBER", 12, 0.87),
      createData(12, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1000, "EQUIP", 4, 0.71),
    ],
  },
  {
    tableTitle: '2023/10/01 ~ 2023/11/01',
    rows: [
      createData(1, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1000, "CHAMBER", 4, 0.89),
      createData(2, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 800, "EQUIP", 2, 0.72),
      createData(3, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 900, "CHAMBER", 10, 0.88),
      createData(4, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 750, "EQUIP", 2, 0.74),
      createData(5, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 600, "CHAMBER", 4, 0.85),
      createData(6, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 400, "EQUIP", 4, 0.75),
      createData(7, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1200, "CHAMBER", 6, 0.86),
      createData(8, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1100, "EQUIP", 3, 0.78),
      createData(9, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 850, "CHAMBER", 2, 0.86),
      createData(10, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1050, "EQUIP", 1, 0.79),
      createData(11, 'AAAA', 'BBBB', 'CC010000', 'CC005000', 1150, "CHAMBER", 12, 0.87),
      createData(12, 'AAAA', 'BBBB', 'CC020000', 'CC015000', 1000, "EQUIP", 4, 0.71),
    ],
  },
];

const Daily = () => {

  return (
    <Grid item xs={12}>
      {tablePropsList.map((tableProps) => {
        return (
          <MainCard sx={{ mt: 2 }} content={false} key={tableProps}>
            <EnhancedTable tableTitle={tableProps.tableTitle} rows={tableProps.rows} />
          </MainCard>
        )
      })}
    </Grid>
  );
};

export default Daily;
