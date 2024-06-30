import * as React from 'react';
import PropTypes from 'prop-types';

import {
  Pagination,
  Stack,
} from '@mui/material';

export default function PaginationButtons(props) {

  const { numSelected } = props;

  return (
    <Stack spacing={2}>
      <Pagination count={numSelected} showFirstButton showLastButton />
    </Stack>
  );
}

PaginationButtons.propTypes = {
  numSelected: PropTypes.number.isRequired,
};